// AEGAEON Defense Middleware for Next.js
// Add this to any Next.js app for instant protection by 19 defense modules

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AEGAEON_API = process.env.AEGAEON_API_URL || 'https://aegaeon-api.onrender.com';
const AEGAEON_API_KEY = process.env.AEGAEON_API_KEY || '';

interface DefenseCheck {
  blocked: boolean;
  score: number;
  band: string;
  action: string;
  patterns?: string[];
}

// Next.js 15+ removed request.ip; the client IP now comes from the
// proxy chain headers. Trust x-forwarded-for (first hop) and fall
// back to x-real-ip, then to a sentinel that AEGAEON can score as
// "unknown" rather than "0.0.0.0" (which some deployments read as
// localhost and treat as trusted).
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  return 'unknown';
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (
    path.startsWith('/_next') ||
    path.startsWith('/static') ||
    path.startsWith('/api/auth') ||
    path === '/favicon.ico' ||
    path === '/health'
  ) {
    return NextResponse.next();
  }

  if (!AEGAEON_API_KEY) {
    console.warn('AEGAEON: No API key configured - running without protection');
    return NextResponse.next();
  }

  const clientIp = getClientIp(request);

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    const response = await fetch(`${AEGAEON_API}/api/v1/defense/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': AEGAEON_API_KEY,
        'X-Forwarded-For': clientIp,
      },
      body: JSON.stringify({
        path: path,
        method: request.method,
        headers: Object.fromEntries(request.headers.entries()),
        query: request.nextUrl.search,
        ip: clientIp,
        user_agent: request.headers.get('user-agent') || '',
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return NextResponse.next();
    }

    const check: DefenseCheck = await response.json();

    if (check.blocked) {
      console.log(`AEGAEON BLOCKED: ${path} - Score: ${check.score} - ${check.action}`);

      return new NextResponse(
        JSON.stringify({
          error: 'Access Denied',
          reason: 'Request blocked by AEGAEON defense system',
          score: check.score,
          band: check.band,
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'X-Defense-Score': String(check.score),
            'X-Defense-Band': check.band,
          },
        }
      );
    }

    const nextResponse = NextResponse.next();
    nextResponse.headers.set('X-Defense-Score', String(check.score));
    nextResponse.headers.set('X-Defense-Band', check.band);
    return nextResponse;

  } catch (error) {
    // Fail-open: if AEGAEON is unreachable, allow traffic
    console.error('AEGAEON middleware error:', error);
    return NextResponse.next();
  }
}

// Run on every path except Next.js internals and static files.
// This is the shape Next.js 16 expects for the exported function.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
