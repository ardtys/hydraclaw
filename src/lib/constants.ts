export const NAV_ITEMS = [
  { label: "Protocol", href: "/protocol" },
  { label: "Layers", href: "/layers" },
  { label: "Agents", href: "/agents" },
  { label: "$HYDRA", href: "/token" },
  { label: "Docs", href: "/docs" },
] as const;

export const STATS = [
  { value: 10, suffix: "ms", label: "Boot Time", prefix: "<" },
  { value: 5, suffix: "MB", label: "Binary Size", prefix: "<" },
  { value: 8, suffix: "MB", label: "RAM Usage", prefix: "<" },
  { value: 10, suffix: "", label: "Hardware Cost", prefix: "$" },
  { value: 2, suffix: "", label: "Chains", prefix: "" },
] as const;

export const TERMINAL_LINES = [
  { text: "$ hydraclaw init --chain solana", delay: 0 },
  { text: "✓ Binary size: 3.4MB", delay: 800 },
  { text: "✓ Boot time: 8ms", delay: 1200 },
  { text: "✓ RAM usage: 4.2MB", delay: 1600 },
  { text: "✓ Agent swarm: 5 heads active", delay: 2000 },
  { text: "✓ Connected to Solana mainnet", delay: 2400 },
  { text: "", delay: 2800 },
  { text: "Ready to hunt. 🐙", delay: 3000 },
] as const;

export const OLD_WAY_ITEMS = [
  {
    title: "Bloated bots eating 1GB+ RAM",
    detail: "Competitors require Node.js or Python runtime that consumes massive memory. A server with 1GB RAM isn't even enough to run a simple bot.",
  },
  {
    title: "500+ seconds startup on edge hardware",
    detail: "JavaScript/Python-based bots require extremely long boot times on cheap hardware. While the market moves fast, your bot is still loading dependencies.",
  },
  {
    title: "Pay 1% fee to closed-source Telegram bots",
    detail: "Popular bot platforms take a percentage of every transaction. Closed-source code means you don't know what the bot is actually doing with your funds.",
  },
  {
    title: "$599 Mac Mini just for a trading bot",
    detail: "Running a Node.js bot 24/7 requires expensive hardware. Electricity costs and maintenance add unnecessary operational burden.",
  },
] as const;

export const HYDRA_WAY_ITEMS = [
  {
    title: "<5MB Rust binary — runs on a $10 board",
    detail: "HydraClaw compiles to a native binary with zero runtime dependencies. A $10 Orange Pi Zero is enough to run a complete agent swarm.",
  },
  {
    title: "<10ms cold start — snipe before competitors boot",
    detail: "While other bots are still loading npm packages, HydraClaw agents are already active and ready to execute. Millisecond advantage = maximum profit on memecoins.",
  },
  {
    title: "0% platform fee — self-hosted, open protocol",
    detail: "No middleman. Deploy on your own hardware, full control over private keys and strategies. Open-source code can be audited by anyone.",
  },
  {
    title: "AI agents that learn, adapt, and collaborate",
    detail: "Each agent uses on-device ML for strategy optimization. Agents can communicate via mesh network for swarm intelligence coordination.",
  },
] as const;

export const LAYERS = [
  {
    id: "web1",
    tag: "WEB 1.0",
    name: "Static Knowledge Base",
    headline: "SEO-First Documentation. Zero JavaScript. Pure Signal.",
    description: "The foundational layer providing comprehensive technical documentation, tutorials, and a knowledge base accessible to anyone. Optimized for search engines so developers can discover HydraClaw organically.",
    details: [
      "Complete API documentation, CLI commands, and configuration options",
      "Step-by-step tutorials for every agent type and strategy",
      "Architecture deep-dives for developers who want to contribute",
      "Technical blog posts on optimization, security best practices, and case studies",
    ],
    stack: ["Astro", "Markdown", "Cloudflare Pages"],
    audience: "Developers & Researchers",
    audienceDetail: "Software engineers seeking lightweight trading bot solutions, researchers studying distributed AI systems, and tech enthusiasts who want to understand the protocol.",
    revenue: "Organic traffic → funnel to Web2",
    revenueDetail: "Organic traffic from Google becomes top-of-funnel. Interested visitors sign up for the dashboard (Web2) to start using HydraClaw.",
    color: "web1",
  },
  {
    id: "web2",
    tag: "WEB 2.0",
    name: "Dashboard & Analytics",
    headline: "SaaS-Grade Dashboard. Manage Bots, Track PnL, Monitor Everything.",
    description: "A traditional web platform with familiar UX that allows users to manage agents, view performance analytics, and configure strategies without touching the command line.",
    details: [
      "Real-time PnL tracking with interactive charts and per-agent breakdown",
      "Portfolio overview: total assets, open positions, historical performance",
      "Agent management: deploy, pause, configure, and monitor all agents from one place",
      "Alert system: Telegram/Discord notifications for important events",
      "Strategy backtesting: test strategies with historical data before deployment",
    ],
    stack: ["SvelteKit", "Supabase", "Redis", "Hono API"],
    audience: "Retail Traders & Non-Technical Users",
    audienceDetail: "Retail traders familiar with web interfaces, users uncomfortable with CLI, and anyone wanting easy monitoring without technical complexity.",
    revenue: "SaaS Subscriptions ($9-99/mo)",
    revenueDetail: "Tiered subscription: Free tier for 1 agent, Pro ($29/mo) for 5 agents + advanced analytics, Enterprise ($99/mo) for unlimited agents + priority support.",
    color: "web2",
  },
  {
    id: "web25",
    tag: "WEB 2.5",
    name: "Hybrid Bridge",
    headline: "Sign in with Google. Auto-Created Wallet. Trade Without Seed Phrases.",
    description: "The bridge connecting Web2 users to crypto without friction. Users can log in with email/social, wallets are created in the background, and trading begins with fiat — zero crypto knowledge required.",
    details: [
      "Social login: Google, Twitter, Discord, or email — no wallet extension needed",
      "Embedded wallet: non-custodial wallet created automatically, private key encrypted and stored securely",
      "Fiat on-ramp: buy $HYDRA or SOL directly with credit/debit card via MoonPay",
      "Gasless transactions: users don't need to hold native tokens for gas, protocol sponsors via Gelato Relay",
      "Account abstraction (ERC-4337): smart accounts with recovery options and session keys",
    ],
    stack: ["Privy SDK", "MoonPay", "Gelato Relay", "ERC-4337"],
    audience: "Web2 Users → Crypto Onboarding",
    audienceDetail: "Complete beginners interested in crypto but intimidated by complexity. Users who've lost seed phrases before. Anyone wanting an 'it just works' experience.",
    revenue: "Fiat Conversion Fees (0.5-1%)",
    revenueDetail: "Small spread on top of MoonPay rates for fiat → crypto conversion. Volume-based revenue that scales with user adoption.",
    color: "web25",
  },
  {
    id: "web3",
    tag: "WEB 3.0",
    name: "Token & On-Chain Protocol",
    headline: "$HYDRA Token. Stake for Access. Earn Protocol Revenue. Govern the Swarm.",
    description: "The native token that serves as the backbone of the protocol economy. $HYDRA isn't just a governance token — holders get access to premium features, a share of protocol revenue, and voting power to determine development direction.",
    details: [
      "Access tiers: the amount of $HYDRA held determines access level (Bronze → Diamond)",
      "Revenue sharing: a percentage of protocol fees is distributed to stakers",
      "Governance: proposals and voting for parameter changes, new features, and treasury allocation",
      "Agent marketplace currency: buy/sell agent strategies using $HYDRA",
      "Staking rewards: additional APY for those who lock $HYDRA for specific periods",
    ],
    stack: ["Anchor/Solidity", "Metaplex", "Jito", "Helius RPC"],
    audience: "Degens & Token Holders",
    audienceDetail: "Crypto natives familiar with DeFi mechanics, investors seeking yield opportunities, and community members wanting to participate in governance.",
    revenue: "Protocol Fees + Token Appreciation",
    revenueDetail: "0.1% fee from every trade executed by agents. Fees are collected in the treasury, partially used to buy back $HYDRA, partially distributed to stakers.",
    color: "web3",
  },
  {
    id: "web4",
    tag: "WEB 4.0",
    name: "AI Autonomous Agents",
    headline: "Lightweight AI Agents. Trade, Copy, Farm, Evolve. Swarm Intelligence.",
    description: "The pinnacle of the stack — autonomous AI agents running on edge hardware. Each agent is a standalone Rust binary with an embedded ML model that can learn, adapt, and communicate with other agents for strategy coordination.",
    details: [
      "On-device inference: ML model runs locally, no API calls to cloud — zero latency",
      "Continuous learning: agents collect data and retrain models to improve performance",
      "Strategy marketplace: buy proven strategies from top performers, or sell your own",
      "Swarm mesh: agents communicate via libp2p to share signals and coordinate entry/exit",
      "Failover & redundancy: if one agent goes down, others take over — zero downtime",
    ],
    stack: ["Rust", "ONNX Runtime", "libp2p", "Tokio"],
    audience: "Power Users & Agent Deployers",
    audienceDetail: "Advanced users wanting maximum customization, developers building custom agents, and institutions needing reliable automated trading infrastructure.",
    revenue: "Agent Marketplace Fees (2-5%)",
    revenueDetail: "Commission from every transaction on the agent marketplace. Top strategy creators earn passive income, protocol takes a small cut.",
    features: [
      "Auto-trade with sentiment analysis from social media and on-chain data",
      "Copy-trade with AI risk management that automatically adjusts position size",
      "Airdrop farming that auto-interacts with protocols to maximize eligibility",
      "Self-optimizing strategies using reinforcement learning",
      "Agent-to-agent communication via encrypted mesh network",
    ],
    color: "web4",
  },
] as const;

export const USER_JOURNEY = [
  {
    step: 1,
    title: "Discover",
    shortDesc: "Find HydraClaw via search engine",
    description: "Users search for 'lightweight trading bot' or 'rust crypto bot' on Google and discover HydraClaw documentation. SEO-optimized articles explain the advantages over competitors. Users become interested in performance benchmarks and start exploring further.",
    color: "web1",
  },
  {
    step: 2,
    title: "Sign Up",
    shortDesc: "Create an account with Google, free",
    description: "Users click 'Get Started' and sign up using their Google account. No complicated email verification needed. Free tier activates immediately with 1 agent slot. The dashboard displays an interactive tutorial for first-time users.",
    color: "web2",
  },
  {
    step: 3,
    title: "Bridge In",
    shortDesc: "Auto-created wallet, buy crypto with card",
    description: "When users click 'Start Trading', an embedded wallet is automatically created in the background. Users can immediately buy $HYDRA or SOL using a credit/debit card. No need to download MetaMask or save seed phrases — everything is handled securely by the protocol.",
    color: "web25",
  },
  {
    step: 4,
    title: "Stake & Unlock",
    shortDesc: "Hold $HYDRA for premium features",
    description: "By holding $HYDRA, users unlock higher tiers. Bronze (1K) for basic features, Silver (10K) for copy-trade, Gold (100K) for unlimited agents + revenue share. Staking provides additional APY and voting power.",
    color: "web3",
  },
  {
    step: 5,
    title: "Deploy Agents",
    shortDesc: "Launch AI swarm, auto-trade 24/7",
    description: "Users choose a strategy from the marketplace or configure custom settings. Deploy agents with one click from the dashboard or via CLI for advanced users. Agents start operating 24/7, users can monitor performance in real-time and receive alerts.",
    color: "web4",
  },
] as const;

export const BENCHMARK_DATA = [
  {
    metric: "Language",
    hydraclaw: "Rust",
    node: "TypeScript",
    python: "Python",
    go: "Go",
  },
  {
    metric: "RAM Usage",
    hydraclaw: "<5MB",
    node: ">1GB",
    python: ">100MB",
    go: "<10MB",
  },
  {
    metric: "Startup Time",
    hydraclaw: "<10ms",
    node: ">500s",
    python: ">30s",
    go: "<1s",
  },
  {
    metric: "Binary Size",
    hydraclaw: "3.4MB",
    node: "~28MB",
    python: "N/A",
    go: "~8MB",
  },
  {
    metric: "Min Hardware",
    hydraclaw: "$10",
    node: "$599",
    python: "~$50",
    go: "$10",
  },
] as const;

export const BENCHMARK_EXPLANATION = {
  title: "Why Performance Matters",
  description: "In crypto trading, milliseconds determine profit or loss. HydraClaw is built from the ground up for speed and efficiency.",
  points: [
    {
      title: "Rust = Zero Runtime Overhead",
      detail: "Unlike JavaScript or Python that need an interpreter, Rust compiles directly to machine code. The result: instant startup and minimal memory usage.",
    },
    {
      title: "Edge-Ready Architecture",
      detail: "Designed to run on cheap hardware like Orange Pi or Raspberry Pi. No expensive cloud servers needed — deploy at home with minimal electricity costs.",
    },
    {
      title: "Static Binary = Zero Dependencies",
      detail: "Single executable file without npm install or pip requirements. Copy file, run, done. No dependency hell or version conflicts.",
    },
  ],
} as const;

export const TOKEN_TIERS = [
  {
    name: "Bronze",
    icon: "🥉",
    requirement: "Hold 1,000 $HYDRA",
    benefits: [
      "1 active agent",
      "Basic sniper strategy",
      "Community Discord access",
      "Email support",
    ],
    description: "Entry tier to try HydraClaw. Perfect for beginners who want to test the platform with minimal capital.",
    color: "amber",
  },
  {
    name: "Silver",
    icon: "🥈",
    requirement: "Hold 10,000 $HYDRA",
    benefits: [
      "5 active agents",
      "Copy-trade feature",
      "PnL analytics dashboard",
      "Telegram alerts",
      "Priority support",
    ],
    description: "For serious traders who want to diversify strategies. Copy-trade allows mirroring top performers' wallets.",
    color: "slate",
  },
  {
    name: "Gold",
    icon: "🥇",
    requirement: "Hold 100,000 $HYDRA",
    benefits: [
      "Unlimited agents",
      "Swarm mode enabled",
      "5% protocol revenue share",
      "Strategy marketplace access",
      "Private Discord channel",
      "1-on-1 onboarding call",
    ],
    description: "Power user tier with unlimited agents and revenue sharing. Swarm mode enables coordination between agents.",
    color: "amber",
  },
  {
    name: "Diamond",
    icon: "💎",
    requirement: "Hold 1,000,000 $HYDRA",
    benefits: [
      "Everything in Gold",
      "10% protocol revenue share",
      "Governance voting power",
      "Early access to new features",
      "Custom agent development",
      "Direct line to core team",
    ],
    description: "Top tier for whales and institutions. Maximum revenue share, governance rights, and custom development support.",
    color: "violet",
  },
] as const;

export const TOKENOMICS = [
  {
    label: "Community Launch",
    percentage: 40,
    color: "web4",
    detail: "Fair launch via pump.fun (Solana) and bags.fm (Base). No presale, no VC allocation. 100% community-driven from day one."
  },
  {
    label: "Agent Rewards Pool",
    percentage: 20,
    color: "web2",
    detail: "Reserved to incentivize agent deployers and strategy creators. Distributed as rewards to top performing agents every epoch."
  },
  {
    label: "Development Fund",
    percentage: 15,
    color: "web1",
    detail: "Funding for ongoing development, security audits, infrastructure costs, and hiring. Managed by multisig with community oversight."
  },
  {
    label: "Liquidity",
    percentage: 15,
    color: "web25",
    detail: "Locked liquidity on DEX to ensure healthy trading. LP tokens burned for permanent liquidity."
  },
  {
    label: "Team",
    percentage: 10,
    color: "web3",
    detail: "Team allocation with 12-month linear vesting. Aligned incentives — team only profits if protocol succeeds long-term."
  },
] as const;

export const QUICKSTART_SOLANA = `# Install HydraClaw CLI
curl -sSf https://hydraclaw.sh/install | sh

# Initialize agent
hydraclaw init --chain solana --strategy sniper

# Configure (edit hydra.toml)
cat hydra.toml
# [agent]
# name = "alpha-hunter"
# strategy = "sentiment-sniper"
# risk_level = "medium"
# max_position = "0.5 SOL"
#
# [chain]
# network = "solana-mainnet"
# rpc = "https://rpc.helius.xyz"

# Deploy
hydraclaw deploy

# Output:
# 🐙 HydraClaw Agent deployed!
# ├── Binary: 3.4MB
# ├── Boot: 8ms
# ├── Chain: Solana Mainnet
# ├── Strategy: sentiment-sniper
# └── Status: HUNTING`;

export const QUICKSTART_BASE = `# Install HydraClaw CLI
curl -sSf https://hydraclaw.sh/install | sh

# Initialize agent
hydraclaw init --chain base --strategy copy-trade

# Configure (edit hydra.toml)
cat hydra.toml
# [agent]
# name = "mirror-alpha"
# strategy = "copy-trade"
# target_wallet = "0x..."
# risk_factor = 0.5
#
# [chain]
# network = "base-mainnet"
# rpc = "https://mainnet.base.org"

# Deploy
hydraclaw deploy

# Output:
# 🐙 HydraClaw Agent deployed!
# ├── Binary: 3.6MB
# ├── Boot: 9ms
# ├── Chain: Base Mainnet
# ├── Strategy: copy-trade
# └── Status: MIRRORING`;

export const AGENTS = [
  {
    name: "Sniper Agent",
    tagline: "First to buy. Last to sell.",
    description: "The fastest agent for memecoin sniping. Monitors new token launches and executes buy orders within <10ms after liquidity is added. Configurable take-profit and stop-loss.",
    features: [
      "Monitors PumpFun, Raydium, and Meteora for new pairs",
      "Configurable buy amount and slippage tolerance",
      "Auto take-profit at target multipliers (2x, 5x, 10x)",
      "Trailing stop-loss to lock in profits",
      "Rug-pull detection for auto-exit",
    ],
    status: "live",
    riskLevel: "High",
    minCapital: "0.1 SOL",
  },
  {
    name: "Copy-Trade Agent",
    tagline: "Mirror alpha wallets automatically.",
    description: "Follow profitable wallets automatically. AI analyzes historical performance and adjusts position size based on confidence level. Not all trades are copied — only those meeting criteria.",
    features: [
      "Track unlimited wallets with customizable priority",
      "AI confidence scoring to filter low-quality trades",
      "Proportional or fixed position sizing",
      "Delay configuration to avoid front-run detection",
      "Performance analytics per copied wallet",
    ],
    status: "live",
    riskLevel: "Medium",
    minCapital: "1 SOL",
  },
  {
    name: "Airdrop Farmer",
    tagline: "Sleep and earn. Auto-claim everything.",
    description: "Automate airdrop farming with automatic protocol interactions. Agent performs swaps, provides liquidity, bridges, and other activities that increase eligibility for upcoming protocol airdrops.",
    features: [
      "Pre-configured farming paths for top protocols",
      "Randomized transaction patterns to avoid sybil detection",
      "Auto-claim when airdrops go live",
      "Gas optimization to minimize farming costs",
      "Multi-wallet support for scaled farming",
    ],
    status: "coming",
    riskLevel: "Low",
    minCapital: "0.5 SOL",
  },
  {
    name: "DCA Agent",
    tagline: "Dollar-cost average with AI timing.",
    description: "Smarter DCA. Not just buying every X hours — AI analyzes market conditions for optimal entry timing. Accumulate positions gradually with reduced volatility impact.",
    features: [
      "Flexible intervals: hourly, daily, weekly",
      "AI timing optimization based on volatility and trend",
      "Support for multiple tokens in a single agent",
      "Auto-rebalancing to target allocation",
      "Tax-lot tracking for reporting",
    ],
    status: "coming",
    riskLevel: "Low",
    minCapital: "0.1 SOL",
  },
  {
    name: "Arbitrage Agent",
    tagline: "Cross-DEX arbitrage, automated.",
    description: "Identify and exploit price differences between DEXs. Monitors multiple pools simultaneously and executes atomic arbitrage trades when profitable opportunities arise.",
    features: [
      "Monitors 10+ DEXs on Solana and Base",
      "Sub-millisecond opportunity detection",
      "Flash loan integration for capital efficiency",
      "MEV protection via private mempools",
      "Profit threshold configuration",
    ],
    status: "coming",
    riskLevel: "Medium",
    minCapital: "5 SOL",
  },
  {
    name: "Swarm Commander",
    tagline: "Orchestrate the collective.",
    description: "Meta-agent that coordinates multiple other agents. Allocates capital, manages risk across portfolio, and enables agent-to-agent communication for collaborative strategies.",
    features: [
      "Centralized control for all agents",
      "Portfolio-level risk management",
      "Capital allocation optimization",
      "Agent-to-agent signal sharing",
      "Unified reporting dashboard",
    ],
    status: "coming",
    riskLevel: "Variable",
    minCapital: "10 SOL",
  },
] as const;

export const ROADMAP = [
  {
    quarter: "Q1 2026",
    phase: "Genesis",
    description: "Foundation phase. Launch token, release core CLI tools, and establish community.",
    items: [
      "Token launch on pump.fun (Solana) and bags.fm (Base)",
      "HydraClaw CLI v1.0 release",
      "Documentation site live",
      "Sniper and Copy-Trade agents",
      "Community Discord launch",
    ],
    status: "current",
  },
  {
    quarter: "Q2 2026",
    phase: "Expansion",
    description: "Scale user base with dashboard and easier onboarding.",
    items: [
      "Web dashboard launch",
      "Embedded wallet integration",
      "5 agent types available",
      "Mobile-responsive interface",
      "Fiat on-ramp via MoonPay",
    ],
    status: "upcoming",
  },
  {
    quarter: "Q3 2026",
    phase: "Swarm",
    description: "Enable advanced features and agent marketplace.",
    items: [
      "Agent marketplace launch",
      "Agent-to-agent mesh network",
      "Base mainnet deployment",
      "Swarm Commander release",
      "API for third-party integrations",
    ],
    status: "upcoming",
  },
  {
    quarter: "Q4 2026",
    phase: "Dominance",
    description: "Full decentralization and multi-chain expansion.",
    items: [
      "Native mobile apps (iOS & Android)",
      "20+ agent types",
      "DAO governance live",
      "Multi-chain: Arbitrum, Optimism, Polygon",
      "Institutional-grade features",
    ],
    status: "upcoming",
  },
] as const;

export const SOCIAL_LINKS = [
  { name: "Twitter", href: "https://twitter.com/hydraclaw" },
  { name: "Discord", href: "https://discord.gg/hydraclaw" },
  { name: "GitHub", href: "https://github.com/hydraclaw" },
  { name: "Telegram", href: "https://t.me/hydraclaw" },
] as const;

export const FOOTER_LINKS = {
  protocol: [
    { label: "Documentation", href: "#docs" },
    { label: "GitHub", href: "https://github.com/hydraclaw" },
    { label: "Whitepaper", href: "#whitepaper" },
    { label: "Audit", href: "#audit", badge: "Soon" },
  ],
  community: [
    { label: "Discord", href: "https://discord.gg/hydraclaw" },
    { label: "Twitter/X", href: "https://twitter.com/hydraclaw" },
    { label: "Telegram", href: "https://t.me/hydraclaw" },
  ],
  token: [
    { label: "Buy on pump.fun", href: "#pump" },
    { label: "Buy on bags.fm", href: "#bags" },
    { label: "CoinGecko", href: "#coingecko", badge: "Soon" },
    { label: "DEXScreener", href: "#dexscreener" },
  ],
  legal: [
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Disclaimer", href: "#disclaimer" },
  ],
} as const;
