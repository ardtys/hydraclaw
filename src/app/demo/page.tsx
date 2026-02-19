"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { SectionWrapper } from "@/components/shared";
import { Badge, Button } from "@/components/ui";

// Simulated data generators
const generatePrice = () => (Math.random() * 0.0001 + 0.00001).toFixed(8);
const generateMcap = () => Math.floor(Math.random() * 50000 + 5000);
const generateLiquidity = () => Math.floor(Math.random() * 20000 + 2000);
const generateHolders = () => Math.floor(Math.random() * 500 + 50);

const TOKEN_NAMES = [
  "PEPE2.0", "DOGE420", "MOON", "WOJAK", "CHAD", "NGMI", "WAGMI", "APE", "BONK", "SHIB2",
  "LAMBO", "HODL", "FOMO", "REKT", "BULLISH", "DIAMOND", "ROCKET", "ALPHA", "SIGMA", "BASED"
];

const WALLET_PREFIXES = ["0x7a", "0x3d", "0x9f", "0x1c", "0x8b", "0x2e", "0x5a", "0x4f"];

const ACTIONS = ["BUY", "SELL", "SNIPE", "COPY"];

interface Trade {
  id: string;
  timestamp: Date;
  action: string;
  token: string;
  amount: string;
  price: string;
  profit?: string;
  status: "success" | "pending" | "analyzing";
}

interface TokenAlert {
  id: string;
  token: string;
  type: "new_pair" | "liquidity_add" | "whale_buy" | "trending";
  mcap: number;
  liquidity: number;
  holders: number;
  timestamp: Date;
}

interface AgentStatus {
  name: string;
  status: "active" | "paused" | "analyzing";
  trades: number;
  pnl: string;
  uptime: string;
}

export default function DemoPage() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [alerts, setAlerts] = useState<TokenAlert[]>([]);
  const [agents, setAgents] = useState<AgentStatus[]>([
    { name: "Alpha Hunter", status: "active", trades: 47, pnl: "+$1,234.56", uptime: "4h 23m" },
    { name: "Copy Master", status: "active", trades: 23, pnl: "+$567.89", uptime: "2h 15m" },
    { name: "DCA Bot", status: "paused", trades: 12, pnl: "+$89.12", uptime: "1h 45m" },
  ]);
  const [totalPnL, setTotalPnL] = useState(1891.57);
  const [totalTrades, setTotalTrades] = useState(82);
  const [winRate, setWinRate] = useState(73.2);

  // Generate random trade
  const generateTrade = useCallback((): Trade => {
    const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
    const token = TOKEN_NAMES[Math.floor(Math.random() * TOKEN_NAMES.length)];
    const amount = (Math.random() * 100 + 10).toFixed(2);
    const profit = Math.random() > 0.3 ? `+$${(Math.random() * 50 + 5).toFixed(2)}` : `-$${(Math.random() * 20 + 2).toFixed(2)}`;

    return {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      action,
      token,
      amount: `$${amount}`,
      price: generatePrice(),
      profit,
      status: Math.random() > 0.8 ? "pending" : "success",
    };
  }, []);

  // Generate random alert
  const generateAlert = useCallback((): TokenAlert => {
    const types: TokenAlert["type"][] = ["new_pair", "liquidity_add", "whale_buy", "trending"];
    return {
      id: Math.random().toString(36).substr(2, 9),
      token: TOKEN_NAMES[Math.floor(Math.random() * TOKEN_NAMES.length)],
      type: types[Math.floor(Math.random() * types.length)],
      mcap: generateMcap(),
      liquidity: generateLiquidity(),
      holders: generateHolders(),
      timestamp: new Date(),
    };
  }, []);

  // Simulate live updates
  useEffect(() => {
    // Add initial trades
    const initialTrades = Array.from({ length: 5 }, generateTrade);
    setTrades(initialTrades);

    // Add initial alerts
    const initialAlerts = Array.from({ length: 3 }, generateAlert);
    setAlerts(initialAlerts);

    // Live trade updates
    const tradeInterval = setInterval(() => {
      setTrades(prev => {
        const newTrade = generateTrade();
        const updated = [newTrade, ...prev.slice(0, 9)];
        return updated;
      });

      // Update stats
      setTotalTrades(prev => prev + 1);
      setTotalPnL(prev => prev + (Math.random() * 30 - 10));
      setWinRate(prev => Math.max(60, Math.min(85, prev + (Math.random() * 2 - 1))));
    }, 3000);

    // Live alert updates
    const alertInterval = setInterval(() => {
      setAlerts(prev => {
        const newAlert = generateAlert();
        return [newAlert, ...prev.slice(0, 4)];
      });
    }, 5000);

    // Update agent stats
    const agentInterval = setInterval(() => {
      setAgents(prev => prev.map(agent => ({
        ...agent,
        trades: agent.status === "active" ? agent.trades + (Math.random() > 0.7 ? 1 : 0) : agent.trades,
        status: Math.random() > 0.95 ? (agent.status === "active" ? "analyzing" : "active") : agent.status,
      })));
    }, 2000);

    return () => {
      clearInterval(tradeInterval);
      clearInterval(alertInterval);
      clearInterval(agentInterval);
    };
  }, [generateTrade, generateAlert]);

  const getAlertIcon = (type: TokenAlert["type"]) => {
    switch (type) {
      case "new_pair": return "🆕";
      case "liquidity_add": return "💧";
      case "whale_buy": return "🐋";
      case "trending": return "🔥";
    }
  };

  const getAlertLabel = (type: TokenAlert["type"]) => {
    switch (type) {
      case "new_pair": return "New Pair";
      case "liquidity_add": return "Liquidity Added";
      case "whale_buy": return "Whale Buy";
      case "trending": return "Trending";
    }
  };

  return (
    <main className="min-h-screen bg-hydra-bg relative overflow-hidden">
      <div className="noise" />
      <div className="grid-pattern" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-web4/30 bg-web4/10 text-web4 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-web4 animate-pulse" />
              Live Demo
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-6">
              HydraClaw <span className="text-web4">in Action</span>
            </h1>
            <p className="text-xl text-hydra-text-muted leading-relaxed">
              Watch AI agents hunt in real-time. This is a simulation of what your swarm could look like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Stats Bar */}
      <SectionWrapper className="!py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="rounded-xl border border-hydra-border bg-hydra-bg-card/50 p-4 text-center">
            <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-1">Total P&L</p>
            <p className={`text-2xl font-bold font-mono ${totalPnL >= 0 ? "text-web4" : "text-red-400"}`}>
              {totalPnL >= 0 ? "+" : ""}{totalPnL.toFixed(2)} USD
            </p>
          </div>
          <div className="rounded-xl border border-hydra-border bg-hydra-bg-card/50 p-4 text-center">
            <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-1">Total Trades</p>
            <p className="text-2xl font-bold font-mono text-hydra-text">{totalTrades}</p>
          </div>
          <div className="rounded-xl border border-hydra-border bg-hydra-bg-card/50 p-4 text-center">
            <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-1">Win Rate</p>
            <p className="text-2xl font-bold font-mono text-web3">{winRate.toFixed(1)}%</p>
          </div>
          <div className="rounded-xl border border-hydra-border bg-hydra-bg-card/50 p-4 text-center">
            <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-1">Active Agents</p>
            <p className="text-2xl font-bold font-mono text-web2">
              {agents.filter(a => a.status === "active").length}/{agents.length}
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Main Dashboard */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Trade Feed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 rounded-2xl border border-hydra-border bg-hydra-bg-card/50 overflow-hidden"
          >
            <div className="p-4 border-b border-hydra-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-web4 animate-pulse" />
                <h3 className="font-semibold text-hydra-text">Live Trade Feed</h3>
              </div>
              <Badge variant="default">Auto-refresh</Badge>
            </div>
            <div className="divide-y divide-hydra-border/50 max-h-[400px] overflow-y-auto">
              <AnimatePresence mode="popLayout">
                {trades.map((trade) => (
                  <motion.div
                    key={trade.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 hover:bg-hydra-bg-elevated/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={trade.action === "BUY" || trade.action === "SNIPE" ? "web4" : trade.action === "SELL" ? "web1" : "web2"}
                        >
                          {trade.action}
                        </Badge>
                        <span className="font-mono text-hydra-text font-medium">${trade.token}</span>
                      </div>
                      <span className="text-xs text-hydra-text-dim">
                        {trade.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-hydra-text-muted">Amount: <span className="text-hydra-text">{trade.amount}</span></span>
                        <span className="text-hydra-text-muted">Price: <span className="font-mono text-hydra-text">{trade.price}</span></span>
                      </div>
                      {trade.profit && (
                        <span className={`font-mono font-medium ${trade.profit.startsWith("+") ? "text-web4" : "text-red-400"}`}>
                          {trade.profit}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Token Alerts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl border border-web3/30 bg-hydra-bg-card/50 overflow-hidden"
          >
            <div className="p-4 border-b border-web3/30 bg-web3/5">
              <div className="flex items-center gap-3">
                <span className="text-lg">🎯</span>
                <h3 className="font-semibold text-hydra-text">Token Scanner</h3>
              </div>
            </div>
            <div className="divide-y divide-hydra-border/50 max-h-[400px] overflow-y-auto">
              <AnimatePresence mode="popLayout">
                {alerts.map((alert) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 hover:bg-hydra-bg-elevated/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span>{getAlertIcon(alert.type)}</span>
                        <span className="font-mono text-hydra-text font-medium">${alert.token}</span>
                      </div>
                      <Badge variant="default" className="text-xs">{getAlertLabel(alert.type)}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-hydra-text-dim block">MCap</span>
                        <span className="text-hydra-text font-mono">${alert.mcap.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-hydra-text-dim block">Liq</span>
                        <span className="text-hydra-text font-mono">${alert.liquidity.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-hydra-text-dim block">Holders</span>
                        <span className="text-hydra-text font-mono">{alert.holders}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Agent Status */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-2">
            Agent Swarm Status
          </h2>
          <p className="text-hydra-text-muted">
            Monitor your deployed agents in real-time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-xl border p-6 transition-all duration-300 ${
                agent.status === "active"
                  ? "border-web4/30 bg-hydra-bg-card/50 hover:border-web4/50"
                  : agent.status === "analyzing"
                  ? "border-web3/30 bg-hydra-bg-card/50 hover:border-web3/50"
                  : "border-hydra-border bg-hydra-bg-card/30"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-hydra-text">{agent.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    agent.status === "active" ? "bg-web4 animate-pulse" :
                    agent.status === "analyzing" ? "bg-web3 animate-pulse" : "bg-hydra-text-dim"
                  }`} />
                  <span className={`text-xs capitalize ${
                    agent.status === "active" ? "text-web4" :
                    agent.status === "analyzing" ? "text-web3" : "text-hydra-text-dim"
                  }`}>
                    {agent.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-hydra-text-dim mb-1">Trades</p>
                  <p className="font-mono font-medium text-hydra-text">{agent.trades}</p>
                </div>
                <div>
                  <p className="text-xs text-hydra-text-dim mb-1">P&L</p>
                  <p className={`font-mono font-medium ${agent.pnl.startsWith("+") ? "text-web4" : "text-red-400"}`}>
                    {agent.pnl}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-hydra-text-dim mb-1">Uptime</p>
                  <p className="font-mono font-medium text-hydra-text">{agent.uptime}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Terminal Simulation */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-hydra-border bg-hydra-bg-elevated overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-hydra-border bg-hydra-bg-card">
            <span className="w-3 h-3 rounded-full bg-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <span className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 text-sm text-hydra-text-muted font-mono">hydraclaw-terminal</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <TerminalLines />
          </div>
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-web4/30 bg-gradient-to-br from-web4/10 to-transparent p-8 lg:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Ready to Deploy Your Swarm?
          </h2>
          <p className="text-lg text-hydra-text-muted mb-8 max-w-2xl mx-auto">
            This demo shows simulated data. Deploy your own agents and start hunting for real.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#token">
              <Button variant="amber" size="lg" glow>
                Get $HYDRA
              </Button>
            </a>
            <a href="/docs">
              <Button variant="outline" size="lg">
                Read Docs
              </Button>
            </a>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}

// Terminal simulation component
function TerminalLines() {
  const [lines, setLines] = useState<string[]>([]);

  const terminalCommands = [
    "$ hydraclaw status",
    "[INFO] Swarm Status: ACTIVE",
    "[INFO] 3 agents deployed, 2 active, 1 paused",
    "$ hydraclaw logs alpha-hunter --tail 5",
    "[23:45:12] Scanning mempool for new pairs...",
    "[23:45:13] Found: $MOON (MCap: $12.4k, Liq: $8.2k)",
    "[23:45:13] Analysis: BULLISH - Strong buy signal detected",
    "[23:45:14] Executing snipe: 0.05 ETH @ 0.00002341",
    "[23:45:14] TX confirmed: 0x7a3d...8f2c",
    "[23:45:15] Position opened successfully",
    "[23:46:01] Price update: +12.4% (trailing stop adjusted)",
    "[23:47:33] Take profit triggered: +45.2%",
    "[23:47:34] Sold 100% position @ 0.00003398",
    "[23:47:34] Realized P&L: +$23.45",
    "$ hydraclaw wallet balance",
    "[INFO] Main Wallet: $1,234.56",
    "[INFO] Trading Wallet: $567.89",
    "[INFO] Reserved: $200.00",
    "$ _",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < terminalCommands.length) {
        setLines(prev => [...prev, terminalCommands[index]]);
        index++;
      } else {
        // Reset after completion
        setTimeout(() => {
          setLines([]);
          index = 0;
        }, 3000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-1 min-h-[300px]">
      {lines.map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${
            line.startsWith("$") ? "text-web4" :
            line.startsWith("[INFO]") ? "text-web3" :
            line.includes("ERROR") ? "text-red-400" :
            line.includes("+$") || line.includes("+%") ? "text-web4" :
            "text-hydra-text-muted"
          }`}
        >
          {line}
        </motion.div>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-4 bg-web4"
      />
    </div>
  );
}
