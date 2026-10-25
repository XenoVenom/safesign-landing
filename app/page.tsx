"use client";
import FAQ from "./FAQ";
import HexRain from "./HexRain";
import { Orbitron } from "next/font/google";
import { motion } from "framer-motion";

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"] 
});

export default function Home() {
  return (
                <main id="top" className="relative min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-8 pt-24 overflow-hidden">
                {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full bg-[#121212]/80 backdrop-blur-md border-b border-[#333] z-50">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <span className={`font-bold text-xl ${orbitron.className}`}>SafeSign</span>
          
                    <div className="flex gap-6 text-sm text-gray-400">
            <a href="#top" className="hover:text-white transition-colors">Home</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#demo" className="hover:text-white transition-colors">Demo</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
          
          <a 
            href="https://chromewebstore.google.com/detail/safesign-visualizer/fhnpgdlohkehmlgbjlmdoljbiojchfpb?authuser=0&hl=en-GB" 
            target="_blank"
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
          >
            Install
          </a>
        </div>
      </nav>
      
      {/* Background Top Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4CAF50]/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* NEW: Hex Rain Background */}
      <HexRain />

      {/* Content Wrapper to sit above background */}
      <div className="relative z-10 w-full flex flex-col items-center">
            {/* Logo with Pulsing Aura */}
      <div className="relative mb-8">
            {/* The Glowing Aura (Supernova Oval) */}
        <motion.div 
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[100px] bg-[#4CAF50] blur-[50px] rounded-full"
                    animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scaleX: [1, 1.8, 1], // Stretches out wide
            scaleY: [1, 0.9, 1]  // Squishes slightly vertically
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        {/* The Actual Logo Image */}
        <img 
          src="/logo.png" 
          alt="SafeSign Visualizer Logo" 
          className="relative z-10 w-24 h-24 rounded-3xl drop-shadow-[0_0_50px_rgba(76,175,80,0.8)]"
        />
      </div>
      <h1 className={`text-5xl md:text-6xl font-bold text-center mb-4 ${orbitron.className}`}>
        SafeSign Visualizer
      </h1>
      <p className="text-xl text-gray-400 text-center max-w-2xl mb-8">
        The Visual Security Layer for Crypto Wallets. Stop reading confusing hex codes. See the consequences before you click "Sign".
      </p>
      <div className="flex gap-4 mb-24">
        <a 
          href="https://chromewebstore.google.com/detail/safesign-visualizer/fhnpgdlohkehmlgbjlmdoljbiojchfpb?authuser=0&hl=en-GB" 
          target="_blank"
          className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors"
        >
          Install on Chrome
        </a>
        <a 
          href="https://github.com/XenoVenom/safesign-visualizer" 
          target="_blank"
          className="border border-[#333] hover:border-[#555] text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors"
        >
          View Source
        </a>
      </div>

      {/* Supported Wallets */}
      <div className="w-full max-w-4xl mb-24 text-center">
        <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest">Works seamlessly with your favorite wallets</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          
          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
            <img src="/wallets/metamask.png" alt="MetaMask" className="w-12 h-12" />
            <span className="text-sm font-bold text-gray-400">MetaMask</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
            <img src="/wallets/coinbase.png" alt="Coinbase Wallet" className="w-12 h-12" />
            <span className="text-sm font-bold text-gray-400">Coinbase</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
            <img src="/wallets/rabby.png" alt="Rabby Wallet" className="w-12 h-12" />
            <span className="text-sm font-bold text-gray-400">Rabby</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
            <img src="/wallets/brave.png" alt="Brave Wallet" className="w-12 h-12" />
            <span className="text-sm font-bold text-gray-400">Brave</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
            <img src="/wallets/trust.png" alt="Trust Wallet" className="w-12 h-12" />
            <span className="text-sm font-bold text-gray-400">Trust Wallet</span>
          </div>
          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center text-2xl font-bold text-black">+</div>
            <span className="text-sm font-bold text-[#4CAF50]">All EVM</span>
          </div>

        </div>
      </div>

      {/* Comparison Section */}
      <div className="w-full max-w-4xl mb-24">
        <h2 className={`text-3xl font-bold text-center mb-8 ${orbitron.className}`}>Stop reading Hex Codes.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-[#111] border border-[#333] rounded-2xl p-6 font-mono text-sm text-gray-500">
            <div className="text-red-500 mb-2">⚠️ Other Tools:</div>
            <p>Error: Transaction Reverted.</p>
            <p>Function: 0x095ea7b3</p>
            <p>Data: 0x000...ffffffff</p>
            <p className="mt-2 text-xs text-gray-600">User doesn't understand. Clicks "Ignore" or turns tool off.</p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-[#4CAF50] rounded-2xl p-6 text-sm text-white shadow-[0_0_25px_rgba(76,175,80,0.2)]">
            <div className="text-[#4CAF50] mb-2 font-bold">✅ SafeSign:</div>
            <p>🛡️ ATTACK BLOCKED</p>
            <p>Now: You click sign.</p>
            <p>+10 Secs: Wallet Drained.</p>
            <p className="mt-2 text-xs text-gray-400">Visual storytelling. The user knows exactly what happens next.</p>
          </div>

        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full mb-24 scroll-mt-24">
        
        <motion.div 
                              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] border border-[#333] hover:border-[#4CAF50] hover:shadow-[0_0_15px_rgba(76,175,80,0.3)] hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className={`text-lg font-bold mb-2 text-[#4CAF50] ${orbitron.className}`}>Visual Time-Travel UI</h3>
          <p className="text-sm text-gray-400">See exactly how a scam drains your wallet in a visual timeline before you click "Sign".</p>
        </motion.div>

        <motion.div 
                   initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] border border-[#333] hover:border-[#4CAF50] hover:shadow-[0_0_15px_rgba(76,175,80,0.3)] hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <div className="text-3xl mb-3">🚫</div>
          <h3 className={`text-lg font-bold mb-2 text-[#4CAF50] ${orbitron.className}`}>Unlimited Approval Block</h3>
          <p className="text-sm text-gray-400">Stops malicious ERC-20 contracts from getting infinite access to your tokens.</p>
        </motion.div>

        <motion.div 
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] border border-[#333] hover:border-[#4CAF50] hover:shadow-[0_0_15px_rgba(76,175,80,0.3)] hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <div className="text-3xl mb-3">⚡</div>
          <h3 className={`text-lg font-bold mb-2 text-[#4CAF50] ${orbitron.className}`}>Gasless Permit Block</h3>
          <p className="text-sm text-gray-400">Intercepts fake "Sign-In With Ethereum" requests that secretly drain tokens with zero gas.</p>
        </motion.div>

        <motion.div 
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] border border-[#333] hover:border-[#4CAF50] hover:shadow-[0_0_15px_rgba(76,175,80,0.3)] hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
        >
          <div className="text-3xl mb-3">🌐</div>
          <h3 className={`text-lg font-bold mb-2 text-[#4CAF50] ${orbitron.className}`}>Proactive Anti-Phishing</h3>
          <p className="text-sm text-gray-400">Blocks known scam websites entirely and forces you to safety before you can connect.</p>
        </motion.div>

      </div>

      {/* Trust / Privacy Section */}
      <div className="w-full max-w-4xl bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 md:p-12 mb-24">
        <h2 className={`text-3xl font-bold text-center mb-6 ${orbitron.className}`}>
          🔒 Privacy First. <span className="text-[#4CAF50]">Zero Data Collection.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl mb-2">🏠</div>
            <h4 className="font-bold mb-1">Local Processing</h4>
            <p className="text-sm text-gray-400">All analysis happens in your browser. Nothing is sent to external servers.</p>
          </div>
          
          <div>
            <div className="text-2xl mb-2">💻</div>
            <h4 className="font-bold mb-1">Open Source</h4>
            <p className="text-sm text-gray-400">Read every line of code on GitHub. Fully transparent and auditable.</p>
          </div>
          
          <div>
            <div className="text-2xl mb-2">🆓</div>
            <h4 className="font-bold mb-1">100% Free</h4>
            <p className="text-sm text-gray-400">No premium tiers. No ads. Just protection for the community.</p>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="w-full max-w-4xl mb-24 scroll-mt-24">
        <h2 className={`text-3xl font-bold text-center mb-8 ${orbitron.className}`}>See it in action</h2>
        <div className="relative aspect-video w-full bg-[#1a1a1a] border border-[#333] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/1zjreRl67PM?si=c4Qf_e2K66uyL9Mp"
            title="SafeSign Visualizer Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Roadmap Section */}
      <div id="roadmap" className="w-full max-w-4xl mb-24 scroll-mt-24">
        <h2 className={`text-3xl font-bold text-center mb-12 ${orbitron.className}`}>The Roadmap</h2>
        
        <div className="relative border-l-2 border-[#333] pl-8 ml-4 space-y-10">
          
          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#4CAF50] shadow-[0_0_10px_rgba(76,175,80,0.5)]"></div>
            <h3 className="text-xl font-bold text-white">Phase 1: Core Engine (Completed)</h3>
            <p className="text-sm text-gray-400 mt-1">Token & NFT drain protection. Visual Time-Travel UI. Community Blacklist.</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#4CAF50] shadow-[0_0_10px_rgba(76,175,80,0.5)]"></div>
            <h3 className="text-xl font-bold text-white">Phase 2: Advanced Heuristics (Completed)</h3>
            <p className="text-sm text-gray-400 mt-1">Gasless Permit (EIP-2612) block. Proactive Anti-Phishing. SIWE Domain checks. Pause Toggle.</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            <h3 className="text-xl font-bold text-yellow-500">Phase 3: Landing Page & Community (In Progress)</h3>
            <p className="text-sm text-gray-400 mt-1">Professional landing page. Expanding scam reporting database. Growing user base.</p>
          </div>

          <div className="relative opacity-50">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-600"></div>
            <h3 className="text-xl font-bold text-gray-400">Phase 4: Multi-Chain Expansion (Planned)</h3>
            <p className="text-sm text-gray-400 mt-1">Expanding protection beyond EVM to Solana (`window.solana`).</p>
          </div>

          <div className="relative opacity-50">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gray-600"></div>
            <h3 className="text-xl font-bold text-gray-400">Phase 5: Transaction Simulation (Exploring)</h3>
            <p className="text-sm text-gray-400 mt-1">"Time-Travel" preview showing exact token balance changes before and after signing. (Research phase — exploring free, privacy-first solutions that don't rely on paid APIs.)</p>
          </div>

          

        </div>
      </div>
      {/* NEW: FAQ Section */}
      <FAQ />
              {/* About Section */}
      <div id="about" className="w-full max-w-3xl mb-32 scroll-mt-24">
        <h2 className={`text-3xl font-bold text-center mb-8 ${orbitron.className}`}>About SafeSign</h2>
        
        <div className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 md:p-12">
          <div className="space-y-6 text-gray-400">
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">The Problem</h3>
              <p className="leading-relaxed">
                Crypto users are losing millions every day to wallet drainers. The most frustrating part? Existing security tools throw confusing hex codes at users who have no idea what they mean. The result is alert fatigue—users ignore warnings and get drained anyway.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">The Mission</h3>
              <p className="leading-relaxed">
                SafeSign was built to solve the "Panic UI Problem." Instead of technical jargon, it shows you the <span className="text-[#4CAF50] font-bold">consequence</span> of your actions. A visual timeline that says "Now: You click sign → +10 Seconds: Wallet Drained" is something anyone can understand—no PhD in EVM internals required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">The Philosophy</h3>
              <p className="leading-relaxed">
                Security should be a public good, not a paywall. That's why SafeSign is 100% free, open-source, and privacy-first. No data collection. No tracking. No backend. All analysis happens locally in your browser. The code is publicly auditable on GitHub—because in crypto, the rule is "don't trust, verify."
              </p>
            </div>

            <div className="pt-4 border-t border-[#333]">
              <h3 className="text-xl font-bold text-white mb-2">The Developer</h3>
              <p className="leading-relaxed">
                SafeSign is built by <span className="text-[#4CAF50] font-bold">XenoVenom</span>, a solo Web3 developer who got tired of watching friends get scammed. What started as a side project to visualize unlimited approvals evolved into a comprehensive security engine with permit drain protection, address poisoning detection, and proactive anti-phishing.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Read the full origin story: <a href="https://dev.to/xenovenom/why-i-built-safesign-the-panic-ui-problem-in-crypto-security-4dae" target="_blank" className="text-[#4CAF50] hover:underline">Why I Built SafeSign →</a>
              </p>
            </div>

          </div>
      </div>
      <div className="w-full h-32"></div>

            {/* Final Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mb-16 text-center"
      >
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${orbitron.className}`}>Stop signing blindly.</h2>
        <p className="text-lg text-gray-400 mb-8">Protect your crypto today. It's 100% free and open source.</p>
        
        <a 
          href="https://chromewebstore.google.com/detail/safesign-visualizer/fhnpgdlohkehmlgbjlmdoljbiojchfpb?authuser=0&hl=en-GB" 
          target="_blank"
          className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-4 px-12 rounded-xl text-xl transition-colors shadow-[0_0_30px_rgba(76,175,80,0.4)] hover:shadow-[0_0_40px_rgba(76,175,80,0.6)]"
        >
          Install SafeSign Now 🛡️
        </a>
      </motion.div>

    
      </div>

             {/* Support Development (Simple & Honest) */}
      <div className="w-full max-w-2xl mb-12 text-center">
        <p className="text-sm text-gray-500 mb-3">
          SafeSign is free & open-source, built by a solo dev.
        </p>
        <p className="text-xs text-gray-600 mb-3">
          If it saved your wallet, consider supporting:
        </p>
        
        <div className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3">
          <code className="text-sm text-[#4CAF50] font-mono">
            0xD734878768152A7e687a4fFff0a138D127538659
          </code>
          <button 
            onClick={() => {
              navigator.clipboard.writeText("0xD734878768152A7e687a4fFff0a138D127538659")
              alert("Address copied!")
            }}
            className="text-xs text-gray-400 hover:text-[#4CAF50] transition-colors"
          >
            📋 Copy
          </button>
        </div>
        
        <p className="text-xs text-gray-600 mt-3">
          Send ETH or USDC on any EVM chain
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm">
        <p>Built with 🛡️ by XenoVenom</p>
        <div className="mt-2 flex gap-4 justify-center">
          <a href="https://github.com/XenoVenom/safesign-visualizer" target="_blank" className="hover:text-[#4CAF50]">GitHub</a>
          <span>|</span>
          <a href="https://x.com/Xen0Ven0m" target="_blank" className="hover:text-[#4CAF50]">Twitter</a>
        </div>
      </footer>
     </div>

    </main>
  )
}