"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = "bash", showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  const highlightLine = (line: string) => {
    // Comments
    if (line.trim().startsWith("#")) {
      return <span className="text-hydra-text-dim">{line}</span>;
    }
    // Success output
    if (line.includes("✓") || line.includes("🐙")) {
      return <span className="text-web4">{line}</span>;
    }
    // Commands
    if (line.startsWith("$") || line.startsWith("curl") || line.startsWith("cat") || line.startsWith("hydraclaw")) {
      const parts = line.split(" ");
      return (
        <>
          <span className="text-web2">{parts[0]}</span>
          <span className="text-hydra-text">{" " + parts.slice(1).join(" ")}</span>
        </>
      );
    }
    // Tree output
    if (line.startsWith("# ├") || line.startsWith("# └") || line.includes("├──") || line.includes("└──")) {
      return <span className="text-hydra-text-muted">{line}</span>;
    }
    // TOML config
    if (line.includes("=") && !line.startsWith("#")) {
      const [key, ...value] = line.split("=");
      return (
        <>
          <span className="text-web1">{key}</span>
          <span className="text-hydra-text-muted">=</span>
          <span className="text-web3">{value.join("=")}</span>
        </>
      );
    }
    // Section headers in TOML
    if (line.trim().startsWith("# [")) {
      return <span className="text-web25">{line}</span>;
    }
    return <span className="text-hydra-text">{line}</span>;
  };

  return (
    <div className="relative group rounded-lg border border-hydra-border bg-hydra-bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-hydra-border bg-hydra-bg-elevated/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs text-hydra-text-muted font-mono ml-2">{language}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="p-1.5 rounded-md text-hydra-text-muted hover:text-hydra-text hover:bg-hydra-bg-light transition-colors"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? <Check className="w-4 h-4 text-web4" /> : <Copy className="w-4 h-4" />}
        </motion.button>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="select-none text-hydra-text-dim mr-4 w-6 text-right">
                  {index + 1}
                </span>
              )}
              <code>{highlightLine(line)}</code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
