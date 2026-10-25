"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"] 
});

const faqs = [
  {
    q: "Will SafeSign slow down my browser?",
    a: "No. SafeSign runs locally in your browser and adds 0ms to your browsing experience. All transaction analysis happens instantly before crypto wallet opens. It uses minimal memory and zero CPU when idle."
  },
  {
    q: "Does SafeSign work on all blockchains?",
    a: "Yes! SafeSign works on all EVM-compatible chains: Ethereum, Polygon, Base, Arbitrum, Optimism, BSC, and more. Solana support is coming in v2.0."
  },
  {
    q: "Can SafeSign access my private keys or seed phrase?",
    a: "Absolutely not. SafeSign cannot access your private keys, seed phrase, or wallet password. It only intercepts transaction requests after they've been approved by your wallet. Your keys never leave your wallet."
  },
    
 {
    q: "Is it really 100% free?",
    a: "Yes. All core security features—unlimited approval blocks, NFT drain protection, gasless permit blocks, address poisoning detection, and the visual warning UI—are free forever. No ads, no data collection, no selling your information. The code is publicly auditable on GitHub.\n\nIn the future, we may introduce optional 'Pro' features for power users (like advanced simulation or multi-chain alerts). But the core protection that keeps your wallet safe will never be paywalled. Security should be a public good."
  },
   {
    q: "What if SafeSign blocks a legitimate transaction?",
    a: "You can use the Start/Pause toggle in the extension popup to temporarily disable SafeSign for advanced DeFi interactions (like interacting with custom smart contracts).\n\nWhen paused, the extension icon changes visually so you know protection is off. Additionally, if you're a developer testing on localhost, SafeSign auto-pauses itself and shows a blue 'DEV' badge—so you can build dApps without interference. We recommend keeping protection active on mainnet sites."
  },
  {
    q: "How does the Address Poisoning Detector work?",
    a: "SafeSign locally tracks addresses you've previously interacted with. If you try to send funds to a new address that looks almost identical to one you've used before (same first 6 and last 4 characters), it throws a red warning. This data is stored locally and never leaves your browser."
  },
  {
    q: "Is the code open source?",
    a: "Yes! The entire codebase is available on GitHub. You can read every line of code, verify there's no malicious behavior, and even contribute improvements. Transparency is the foundation of trust."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="w-full max-w-3xl mx-auto mb-24 px-4 scroll-mt-24">
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${orbitron.className}`}>
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-[#1a1a1a] border border-[#333] rounded-xl overflow-hidden hover:border-[#4CAF50]/50 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left"
            >
              <span className="font-bold text-white text-lg">{faq.q}</span>
              <span className={`text-[#4CAF50] text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-4 text-gray-400 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}