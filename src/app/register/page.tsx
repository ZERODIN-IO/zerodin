'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Shield, ArrowRight, CheckCircle2, Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Shield className="h-8 w-8 text-primary" style={{ filter: "drop-shadow(0 0 10px rgba(0,227,253,0.4))" }} />
            <span className="font-mono text-xl font-bold">
              ZER<span className="text-primary">O</span>DIN
            </span>
          </Link>
          <h1 className="text-2xl font-bold mb-2">Create your account</h1>
          <p className="text-sm text-muted-foreground">
            Start your 14-day free trial. No credit card required.
          </p>
        </div>

        {/* Form */}
        <div className="p-6 rounded-xl border border-border bg-card/50 space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm mt-1 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm mt-1 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full h-10 rounded-lg border border-border bg-background px-3 pr-10 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button className="w-full" size="lg">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="h-3 w-3 text-green-400" />
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>

        {/* Trust indicators */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-400" /> No credit card required</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-400" /> 14-day free trial</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-400" /> Cancel anytime</span>
        </div>
      </div>
    </div>
  );
}
