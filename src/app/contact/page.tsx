'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Contact</Badge>
          <h1 className="text-5xl font-bold mb-4 gradient-text">Get in Touch</h1>
          <p className="text-[#6B7D95] max-w-2xl mx-auto text-lg">
            Questions about our products? Interested in Enterprise? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-4 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50">
              <Mail className="h-5 w-5 text-[#00E3FD] mb-2" />
              <h3 className="font-semibold text-sm mb-1">Email</h3>
              <p className="text-xs text-[#6B7D95]">contact@zerodin.io</p>
            </div>
            <div className="p-4 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50">
              <MessageSquare className="h-5 w-5 text-[#00E3FD] mb-2" />
              <h3 className="font-semibold text-sm mb-1">Sales</h3>
              <p className="text-xs text-[#6B7D95]">sales@zerodin.io</p>
            </div>
            <div className="p-4 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50">
              <MapPin className="h-5 w-5 text-[#00E3FD] mb-2" />
              <h3 className="font-semibold text-sm mb-1">Location</h3>
              <p className="text-xs text-[#6B7D95]">Freetown, Sierra Leone</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="p-12 rounded-xl border border-[#00E3FD]/30 bg-[#0A1628]/50 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[#6B7D95]">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-[#1A2D44] bg-[#0A1628]/50 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#6B7D95] uppercase tracking-wider">Name</label>
                    <input type="text" required className="w-full h-10 rounded-lg border border-[#1A2D44] bg-[#060B14] px-3 text-sm mt-1 focus:border-[#00E3FD]/50 focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#6B7D95] uppercase tracking-wider">Email</label>
                    <input type="email" required className="w-full h-10 rounded-lg border border-[#1A2D44] bg-[#060B14] px-3 text-sm mt-1 focus:border-[#00E3FD]/50 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-[#6B7D95] uppercase tracking-wider">Subject</label>
                  <input type="text" required className="w-full h-10 rounded-lg border border-[#1A2D44] bg-[#060B14] px-3 text-sm mt-1 focus:border-[#00E3FD]/50 focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#6B7D95] uppercase tracking-wider">Message</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-[#1A2D44] bg-[#060B14] px-3 py-2 text-sm mt-1 focus:border-[#00E3FD]/50 focus:outline-none resize-none" />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
