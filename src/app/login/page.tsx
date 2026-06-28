'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Shield className="h-8 w-8 text-[#00E3FD]" style={{ filter: "drop-shadow(0 0 10px rgba(0,227,253,0.4))" }} />
            <span className="font-mono text-xl font-bold">
              ZER<span className="text-[#00E3FD]">O</span>DIN
            </span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
          <p className="text-sm text-[#6B7D95]">Sign in to your Zerodin account.</p>
        </div>

        {/* Form */}
        <div className="p-6 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50 space-y-4">
          <div>
            <label className="text-xs font-medium text-[#6B7D95] uppercase tracking-wider">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full h-10 rounded-lg border border-[#1A2D44] bg-[#060B14] px-3 text-sm mt-1 focus:border-[#00E3FD]/50 focus:outline-none focus:ring-1 focus:ring-[#00E3FD]/20 transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-[#6B7D95] uppercase tracking-wider">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full h-10 rounded-lg border border-[#1A2D44] bg-[#060B14] px-3 pr-10 text-sm focus:border-[#00E3FD]/50 focus:outline-none focus:ring-1 focus:ring-[#00E3FD]/20 transition-all"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7D95] hover:text-[#E8EDF5]"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-[#6B7D95] cursor-pointer">
              <input type="checkbox" className="rounded border-[#1A2D44] bg-[#060B14]" />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-[#00E3FD] hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full" size="lg">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Register link */}
        <p className="text-center text-sm text-[#6B7D95] mt-6">
          Don't have an account?{' '}
          <Link href="/register" className="text-[#00E3FD] hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
