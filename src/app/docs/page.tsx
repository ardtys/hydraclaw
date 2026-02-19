"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { SectionWrapper } from "@/components/shared";
import { Badge, Button } from "@/components/ui";
import { QUICKSTART_SNIPER, QUICKSTART_COPYTRADE } from "@/lib/constants";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-hydra-bg relative overflow-hidden">
      <div className="noise" />
      <div className="grid-pattern" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-web1/30 bg-web1/10 text-web1 text-sm font-medium mb-6">
              Documentation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-6">
              HydraClaw <span className="text-web4">Docs</span>
            </h1>
            <p className="text-xl text-hydra-text-muted leading-relaxed mb-8">
              Everything you need to deploy and manage AI trading agents.
              From quickstart to advanced customization.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              { label: "Quick Start", href: "#quickstart" },
              { label: "CLI Reference", href: "#cli" },
              { label: "Configuration", href: "#config" },
              { label: "SDK Guide", href: "#sdk" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg border border-hydra-border bg-hydra-bg-card/50 text-sm text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Start Section */}
      <SectionWrapper id="quickstart">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Quick Start
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl">
            Deploy your first agent in 5 minutes. Choose your strategy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sniper Quickstart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-web4/30 bg-hydra-bg-card/50 overflow-hidden"
          >
            <div className="p-4 bg-web4/10 border-b border-web4/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge variant="web4" glow>Sniper</Badge>
                <span className="text-sm text-hydra-text-muted">Fast Entry Strategy</span>
              </div>
              <button className="px-3 py-1 text-xs rounded-md border border-hydra-border bg-hydra-bg-elevated text-hydra-text-muted hover:text-hydra-text transition-colors">
                Copy
              </button>
            </div>
            <pre className="p-6 overflow-x-auto text-sm">
              <code className="text-hydra-text-muted font-mono whitespace-pre">
                {QUICKSTART_SNIPER}
              </code>
            </pre>
          </motion.div>

          {/* Copy-Trade Quickstart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-web2/30 bg-hydra-bg-card/50 overflow-hidden"
          >
            <div className="p-4 bg-web2/10 border-b border-web2/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge variant="web2" glow>Copy-Trade</Badge>
                <span className="text-sm text-hydra-text-muted">Mirror Strategy</span>
              </div>
              <button className="px-3 py-1 text-xs rounded-md border border-hydra-border bg-hydra-bg-elevated text-hydra-text-muted hover:text-hydra-text transition-colors">
                Copy
              </button>
            </div>
            <pre className="p-6 overflow-x-auto text-sm">
              <code className="text-hydra-text-muted font-mono whitespace-pre">
                {QUICKSTART_COPYTRADE}
              </code>
            </pre>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Installation */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Installation
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl">
            How to install HydraClaw CLI on various platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              os: "Linux / macOS",
              command: "curl -sSf https://hydraclaw.sh/install | sh",
              description: "Automatic installer script that detects OS and architecture.",
            },
            {
              os: "Windows",
              command: "iwr https://hydraclaw.sh/install.ps1 | iex",
              description: "PowerShell installer for Windows 10/11.",
            },
            {
              os: "Cargo (Rust)",
              command: "cargo install hydraclaw-cli",
              description: "Build from source using Rust package manager.",
            },
          ].map((install, idx) => (
            <motion.div
              key={install.os}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 p-6"
            >
              <h3 className="text-lg font-semibold text-hydra-text mb-3">{install.os}</h3>
              <div className="rounded-lg bg-hydra-bg-elevated p-3 mb-4">
                <code className="text-sm font-mono text-web4 break-all">{install.command}</code>
              </div>
              <p className="text-sm text-hydra-text-muted">{install.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CLI Reference */}
      <SectionWrapper id="cli">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            CLI Reference
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl">
            Complete list of available commands in HydraClaw CLI
          </p>
        </motion.div>

        <div className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-hydra-border bg-hydra-bg-elevated/50">
                <th className="text-left py-4 px-6 text-sm font-medium text-hydra-text">Command</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-hydra-text">Description</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-hydra-text">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  command: "hydraclaw init",
                  description: "Initialize new agent project with template config",
                  example: "hydraclaw init --chain solana --strategy sniper",
                },
                {
                  command: "hydraclaw deploy",
                  description: "Build and deploy agent to local or remote hardware",
                  example: "hydraclaw deploy --target pi@192.168.1.10",
                },
                {
                  command: "hydraclaw status",
                  description: "Check status of all running agents",
                  example: "hydraclaw status --verbose",
                },
                {
                  command: "hydraclaw logs",
                  description: "Stream logs from running agent",
                  example: "hydraclaw logs alpha-hunter --follow",
                },
                {
                  command: "hydraclaw stop",
                  description: "Stop a running agent",
                  example: "hydraclaw stop alpha-hunter",
                },
                {
                  command: "hydraclaw config",
                  description: "View or edit configuration",
                  example: "hydraclaw config set rpc https://...",
                },
                {
                  command: "hydraclaw wallet",
                  description: "Manage wallets and keys",
                  example: "hydraclaw wallet import --keyfile key.json",
                },
                {
                  command: "hydraclaw upgrade",
                  description: "Upgrade CLI to latest version",
                  example: "hydraclaw upgrade",
                },
              ].map((cmd) => (
                <tr key={cmd.command} className="border-b border-hydra-border/50">
                  <td className="py-4 px-6">
                    <code className="text-sm font-mono text-web4">{cmd.command}</code>
                  </td>
                  <td className="py-4 px-6 text-sm text-hydra-text-muted">{cmd.description}</td>
                  <td className="py-4 px-6">
                    <code className="text-xs font-mono text-hydra-text-dim bg-hydra-bg-elevated px-2 py-1 rounded">
                      {cmd.example}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* Configuration */}
      <SectionWrapper id="config">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Configuration
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl">
            All agent configuration is in the hydra.toml file. Here is the complete reference.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 overflow-hidden">
          <div className="p-4 bg-hydra-bg-elevated/50 border-b border-hydra-border flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <span className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 text-sm text-hydra-text-muted font-mono">hydra.toml</span>
          </div>
          <pre className="p-6 overflow-x-auto text-sm">
            <code className="text-hydra-text-muted font-mono">
{`# Agent Configuration
[agent]
name = "alpha-hunter"              # Unique identifier for your agent
strategy = "sniper"                # Strategy type: sniper, copy-trade, dca, etc.
enabled = true                     # Enable/disable agent

# Risk Management
[risk]
max_position = "500 USDC"         # Maximum position size per trade
stop_loss = 0.15                  # Stop loss percentage (15%)
take_profit = 2.0                 # Take profit multiplier (2x)
max_daily_loss = "1000 USDC"      # Maximum daily loss limit
trailing_stop = true              # Enable trailing stop loss

# Sniper-specific settings
[sniper]
min_liquidity = "5000 USDC"       # Minimum liquidity to enter
max_mcap = "100000"               # Maximum market cap ($100k)
buy_amount = "50 USDC"            # Buy amount per snipe
slippage = 0.30                   # Slippage tolerance (30%)
priority_fee = "auto"             # Priority fee for fast inclusion

# Copy-trade settings
[copy_trade]
target_wallets = [                # Wallets to copy
  "0xABC...XYZ",
  "0xDEF...UVW"
]
delay_ms = 500                    # Delay before copying (avoid detection)
min_trade_size = "250 USDC"       # Minimum trade to copy
max_copy_amount = "500 USDC"      # Maximum amount per copied trade

# Network Configuration
[network]
rpc = "https://rpc.hydraclaw.io"  # RPC endpoint
ws = "wss://rpc.hydraclaw.io"     # WebSocket endpoint
backup_rpc = [                    # Fallback RPCs
  "https://backup.hydraclaw.io"
]

# Notifications
[notifications]
telegram_bot_token = ""           # Telegram bot token
telegram_chat_id = ""             # Chat ID for notifications
discord_webhook = ""              # Discord webhook URL
notify_on = ["trade", "error"]    # Events to notify

# Logging
[logging]
level = "info"                    # Log level: debug, info, warn, error
file = "logs/agent.log"           # Log file path
rotate = "daily"                  # Log rotation: daily, weekly`}
            </code>
          </pre>
        </div>
      </SectionWrapper>

      {/* SDK Guide */}
      <SectionWrapper id="sdk">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            SDK Guide
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl">
            Build custom agents using HydraClaw SDK. Complete documentation for developers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Agent Lifecycle",
              description: "Understanding lifecycle hooks and events available for custom agents",
              topics: ["on_start()", "on_new_token()", "on_price_change()", "on_stop()"],
            },
            {
              title: "Strategy Interface",
              description: "Implement Strategy trait for custom trading logic",
              topics: ["analyze()", "should_enter()", "should_exit()", "position_size()"],
            },
            {
              title: "Data Sources",
              description: "Access various data sources for informed trading",
              topics: ["DEX pools", "Social sentiment", "On-chain metrics", "Price feeds"],
            },
            {
              title: "Risk Management",
              description: "Built-in risk management utilities",
              topics: ["Position sizing", "Stop loss", "Take profit", "Portfolio limits"],
            },
          ].map((guide, idx) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 p-6"
            >
              <h3 className="text-xl font-semibold text-hydra-text mb-3">{guide.title}</h3>
              <p className="text-sm text-hydra-text-muted mb-4">{guide.description}</p>
              <div className="space-y-2">
                {guide.topics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-web4" />
                    <code className="text-sm font-mono text-hydra-text-muted">{topic}</code>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper id="faq">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            Answers to commonly asked questions
          </p>
        </motion.div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "What are the minimum hardware requirements to run HydraClaw?",
              a: "HydraClaw can run on very minimal hardware. Minimum: 512MB RAM, 100MB storage, ARM or x86 processor. Examples: Orange Pi Zero ($10), Raspberry Pi Zero ($15), or OpenWRT router.",
            },
            {
              q: "Are my private keys safe?",
              a: "Yes. Private keys are stored encrypted on your local hardware. HydraClaw never sends keys to any server. You have full control over your funds. We recommend using a dedicated wallet with limited funds for trading bots.",
            },
            {
              q: "What fees does HydraClaw charge?",
              a: "HydraClaw itself is open-source and free to use. No platform fee or subscription. You only pay blockchain transaction fees. If you use an agent from the marketplace, there's a 2-5% fee split between the creator and protocol.",
            },
            {
              q: "How do I update my agent to the latest version?",
              a: "Run `hydraclaw upgrade` to auto-update CLI and all agents. You can also set auto_update = true in config for automatic updates. Major updates will require manual confirmation.",
            },
            {
              q: "Is HydraClaw legal to use?",
              a: "HydraClaw is a tool for automated trading, which is legal in most jurisdictions. However, usage responsibility lies with the user. Make sure to comply with local regulations regarding crypto trading and tax obligations.",
            },
            {
              q: "What if my bot encounters an error?",
              a: "HydraClaw has built-in error handling and automatic recovery. If a critical error occurs, the agent will pause trading and send a notification. You can check logs with `hydraclaw logs [agent-name]` for debugging.",
            },
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-hydra-border bg-hydra-bg-card/50 p-6"
            >
              <h3 className="text-lg font-semibold text-hydra-text mb-3">{faq.q}</h3>
              <p className="text-sm text-hydra-text-muted leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Need Help */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-hydra-border bg-gradient-to-br from-web1/10 to-transparent p-8 lg:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Need More Help?
          </h2>
          <p className="text-lg text-hydra-text-muted mb-8 max-w-2xl mx-auto">
            Follow us for support, discussions, and the latest updates
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://x.com/hydra_claw" target="_blank" rel="noopener noreferrer">
              <Button variant="amber" size="lg">
                Follow on X
              </Button>
            </a>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
