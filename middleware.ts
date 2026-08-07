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

export async function aegaeonMiddleware(request: NextRequest) {
  // Skip static assets and internal paths
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

  // Skip if no API key configured (development mode)
  if (!AEGAEON_API_KEY) {
    console.warn('AEGAEON: No API key configured — running without protection');
    return NextResponse.next();
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000); // 3s timeout

    const response = await fetch(`${AEGAEON_API}/api/v1/defense/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': AEGAEON_API_KEY,
        'X-Forwarded-For': request.ip || '0.0.0.0',
      },
      body: JSON.stringify({
        path: path,
        method: request.method,
        headers: Object.fromEntries(request.headers.entries()),
        query: request.nextUrl.search,
        ip: request.ip || '0.0.0.0',
        user_agent: request.headers.get('user-agent') || '',
      }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      // If AEGAEON is down, allow traffic (fail-open)
      return NextResponse.next();
    }

    const check: DefenseCheck = await response.json();

    if (check.blocked) {
      // Log the blocked request
      console.log(`🚫 AEGAEON BLOCKED: ${path} — Score: ${check.score} — ${check.action}`);
      
      return new NextResponse(
        JSON.stringify({
          error: 'Access Denied',
          reason: `Request blocked by AEGAEON defense system`,
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

    // Request allowed — add defense headers
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
