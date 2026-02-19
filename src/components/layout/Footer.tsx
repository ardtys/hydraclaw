"use client";

import { motion } from "framer-motion";
import { Github, Twitter, MessageCircle, Send } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";
import { Badge } from "@/components/ui";

const socialIcons: Record<string, React.ReactNode> = {
  Twitter: <Twitter className="w-5 h-5" />,
  Github: <Github className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  Send: <Send className="w-5 h-5" />,
};

export function Footer() {
  return (
    <footer className="relative border-t border-hydra-border bg-hydra-bg-card/30">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-web2/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <a href="#" className="flex items-center gap-2 mb-4">
              <HydraLogoSmall className="w-6 h-6 text-web4" />
              <span className="text-lg font-bold font-[family-name:var(--font-syne)] text-hydra-text">
                HYDRACLAW
              </span>
            </a>
            <p className="text-sm text-hydra-text-muted mb-4 max-w-xs">
              5 Heads. 5 Layers. One Protocol. The Hydra Doesn&apos;t Sleep.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <SocialLink href="https://twitter.com/hydraclaw" icon={<Twitter className="w-4 h-4" />} label="Twitter" />
              <SocialLink href="https://discord.gg/hydraclaw" icon={<MessageCircle className="w-4 h-4" />} label="Discord" />
              <SocialLink href="https://github.com/hydraclaw" icon={<Github className="w-4 h-4" />} label="GitHub" />
              <SocialLink href="https://t.me/hydraclaw" icon={<Send className="w-4 h-4" />} label="Telegram" />
            </div>
          </div>

          {/* Protocol */}
          <div>
            <h4 className="text-sm font-semibold text-hydra-text mb-4">Protocol</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.protocol.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-hydra-text-muted hover:text-hydra-text transition-colors inline-flex items-center gap-2"
                  >
                    {link.label}
                    {"badge" in link && link.badge && (
                      <Badge variant="default" className="text-[10px] px-1.5 py-0">
                        {link.badge}
                      </Badge>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-hydra-text mb-4">Community</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-hydra-text-muted hover:text-hydra-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Token */}
          <div>
            <h4 className="text-sm font-semibold text-hydra-text mb-4">$HYDRA</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.token.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-hydra-text-muted hover:text-hydra-text transition-colors inline-flex items-center gap-2"
                  >
                    {link.label}
                    {"badge" in link && link.badge && (
                      <Badge variant="default" className="text-[10px] px-1.5 py-0">
                        {link.badge}
                      </Badge>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-hydra-text mb-4">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-hydra-text-muted hover:text-hydra-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-hydra-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-hydra-text-dim">
              HydraClaw Protocol © 2026. All rights reserved.
            </p>
            <p className="text-xs text-hydra-text-dim flex items-center gap-1">
              Built with <span className="text-web3">Rust</span>. Powered by the <span className="text-web4">Swarm</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-lg bg-hydra-bg-elevated border border-hydra-border text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-all"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </motion.a>
  );
}

function HydraLogoSmall({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="9" r="5" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="9" r="3" fill="currentColor" />
      <path d="M6 12 Q4 18 3 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 14 Q8 19 7 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 14 Q12 20 12 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 14 Q16 19 17 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 12 Q20 18 21 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
