import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Target, 
  Cpu, 
  BarChart3, 
  Users, 
  Video, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook,
  Mail, 
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const privacyPolicy = `
# Privacy Policy for SMASH-FEAT

**Effective Date:** 03/04/2026

Welcome to **SMASH-FEAT**. Your privacy is important to me. This Privacy Policy explains how I handle information when you visit my website.

---

## 1. Information I Collect

SMASH-FEAT is designed to respect your privacy.

I **do not directly collect or store**:

* Personal information such as your name, email address, or phone number
* Location data
* Payment or sensitive personal details

---

## 2. Voluntary Contact

I provide options for you to connect with me through:

* Instagram
* LinkedIn
* Direct email

If you choose to contact me through these platforms, **any information you share will be handled according to those platforms' privacy policies**, not stored on my website.

I do **not collect, store, or process this data on my servers**.

---

## 3. Third-Party Platforms

When you click on external links (such as Instagram or LinkedIn), you are redirected to third-party platforms.

I am **not responsible for the privacy practices** of these external sites. I recommend reviewing their privacy policies before sharing any personal information.

---

## 4. Cookies and Tracking

Currently, SMASH-FEAT:

* Does **not use cookies for tracking personal data**
* Does **not track user behavior for advertising purposes**

If this changes in the future (e.g., analytics tools or ads are added), this policy will be updated accordingly.

---

## 5. Data Security

Since I do not collect or store user data directly, the risk of data misuse from my side is minimal.

However, I still aim to maintain a secure and safe browsing experience.

---

## 6. Changes to This Policy

I may update this Privacy Policy from time to time to reflect:

* Changes in website functionality
* Legal requirements
* New tools or integrations

Updates will be posted on this page with a revised effective date.

---

## 7. Contact Me

If you have any questions about this Privacy Policy, you can contact me through:

* Instagram
* LinkedIn
* Direct email

---

## 8. Consent

By using my website, you agree to this Privacy Policy.

---

**SMASH-FEAT — AI Marketing & Digital Solutions**
`;

const termsOfService = `
# Terms & Conditions for SMASH-FEAT

**Effective Date:** 03/04/2026

Welcome to SMASH-FEAT. By accessing or using my website, you agree to comply with and be bound by the following Terms & Conditions.

## 1. Use of Website

This website is intended for informational and business purposes related to AI marketing and digital solutions.

You agree not to:

* Use the website for any unlawful purpose
* Attempt to gain unauthorized access to the website
* Copy, reproduce, or distribute content without permission

## 2. Intellectual Property

All content on this website, including:

* Text
* Branding
* Graphics
* Design elements

is the property of SMASH-FEAT unless otherwise stated.

Unauthorized use of any materials may violate copyright and trademark laws.

## 3. External Links

My website may contain links to third-party platforms such as Instagram and LinkedIn.

I do not control or take responsibility for:

* Content on external websites
* Their privacy policies
* Their terms of use

Accessing third-party links is at your own risk.

## 4. No Guarantees

I strive to provide accurate and up-to-date information. However:

* I do not guarantee completeness or accuracy
* Content may change at any time without notice

Your use of the website is at your own discretion.

## 5. Limitation of Liability

SMASH-FEAT will not be held liable for:

* Any direct or indirect damages
* Loss of data or business opportunities
* Issues arising from use of third-party platforms

## 6. User Responsibility

By using this website, you agree that:

* You are responsible for how you use the information provided
* You will not misuse or exploit the platform

## 7. Modifications to Terms

I may update these Terms & Conditions at any time.

Changes will be effective immediately upon posting on this page.

## 8. Governing Law

These Terms & Conditions are governed by and interpreted in accordance with the laws of India.

## 9. Contact

For any questions regarding these Terms, you can reach me via:

* Instagram
* LinkedIn
* Direct email
`;

// --- Components ---

const RocketLogo = ({ src, alt, className }: { src: string, alt: string, className: string }) => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  const rocketAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    await controls.start({
      y: [0, -20, -1000, 1000, 0],
      scale: [1, 1.1, 0.5, 0.5, 1],
      opacity: [1, 1, 0, 0, 1],
      rotate: [0, -5, 0, 0, 0],
      transition: { 
        duration: 3, 
        times: [0, 0.1, 0.4, 0.7, 1],
        ease: "easeInOut" 
      }
    });
    
    setIsAnimating(false);
  };

  useEffect(() => {
    rocketAnimation();
  }, []);

  return (
    <div className="relative inline-block">
      <motion.div
        animate={controls}
        className="relative z-10"
      >
        <img
          src={src}
          alt={alt}
          className={`${className} cursor-pointer drop-shadow-glow relative z-10`}
          onClick={rocketAnimation}
          onMouseEnter={rocketAnimation}
          referrerPolicy="no-referrer"
        />
        
        {/* Rocket Flame Effect */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0, 0, 1, 1, 0],
                scale: [0, 1.5, 1.5, 0, 0, 1.5, 1.5, 0],
                y: [0, 10, 10, 0, 0, 10, 10, 0]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 3, 
                times: [0, 0.05, 0.35, 0.4, 0.7, 0.75, 0.95, 1],
                ease: "easeInOut"
              }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-12 md:w-6 md:h-20 pointer-events-none"
            >
              {/* Core Flame */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-neon-yellow to-white blur-sm rounded-full animate-pulse" />
              {/* Outer Flame */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-500 to-neon-yellow blur-md rounded-full opacity-80 scale-125" />
              {/* Sparkles/Particles */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-8 bg-neon-yellow/40 blur-xl rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Navbar = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <RocketLogo 
            src="https://i.ibb.co/PZ5YrGZG/Firefly-1.png" 
            alt="SMASH-FEAT Logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="text-lg md:text-xl font-display font-bold tracking-tighter whitespace-nowrap">SMASH-FEAT</span>
        </div>
        
        <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
            onClick={onOpenContact}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 15px rgba(250, 204, 21, 0.4)", "0 0 0px rgba(250, 204, 21, 0)"] 
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="px-4 py-2 md:px-3 lg:px-6 md:py-2.5 bg-white text-black text-[10px] md:text-xs lg:text-sm font-bold rounded-full hover:bg-neon-yellow hover:text-white transition-all duration-300 cursor-pointer"
          >
            Start Project
          </motion.button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white cursor-pointer"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Services</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Pricing</a>
              <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Work</a>
              <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Process</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Contact</a>
              <motion.button 
                onClick={() => {
                  onOpenContact();
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ 
                  boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 20px rgba(250, 204, 21, 0.3)", "0 0 0px rgba(250, 204, 21, 0)"] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full py-4 bg-white text-black font-bold rounded-xl mt-4"
              >
                Start Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-20">
      {/* Background Sphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-yellow/15 rounded-full blur-[80px] opacity-40 z-0" />
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-neon-yellow via-neon-amber to-blue-500 rounded-full blur-[40px] opacity-25 z-0"
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto mb-16"
        >
          {/* Premium Image Frame */}
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-neon-yellow/30 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 glass p-1.5 md:p-3 shadow-2xl shadow-black/50">
              {/* Corner Accents */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-neon-yellow rounded-tl-lg z-20 opacity-50" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-neon-yellow rounded-tr-lg z-20 opacity-50" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-neon-yellow rounded-bl-lg z-20 opacity-50" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-neon-yellow rounded-br-lg z-20 opacity-50" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-[1.5rem] overflow-hidden"
              >
                <img 
                  src="https://i.ibb.co/B5TGFTyP/Gemini-Generated-Image-vzndvbvzndvbvznd.png" 
                  alt="SMASH-FEAT Professional" 
                  className="w-full h-auto rounded-[1.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>
          </div>
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 md:right-10 glass p-4 rounded-2xl hidden md:block z-20 border border-neon-yellow/30 shadow-[0_0_20px_rgba(250, 204, 21, 0.2)]"
          >
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-neon-yellow/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-neon-yellow" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-bold text-neon-yellow mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-neon-yellow rounded-full animate-pulse" />
            Next-Gen Marketing
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold leading-[0.9] mb-8 uppercase">
            AI Driven<br />
            <span className="text-gradient">Marketing</span><br />
            That Converts
          </h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button 
              onClick={onOpenContact}
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 0 30px rgba(250, 204, 21, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0 0 10px rgba(250, 204, 21, 0.3)", "0 0 25px rgba(250, 204, 21, 0.6)", "0 0 10px rgba(250, 204, 21, 0.3)"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="px-8 py-4 bg-neon-yellow-deep text-white font-bold rounded-full neon-glow-yellow flex items-center gap-2 cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-4xl px-6 mt-20 z-10"
      >
        <div className="glass rounded-2xl py-8 px-6 md:px-10 flex items-center justify-center">
          <span className="text-sm md:text-base font-bold text-white/60 uppercase tracking-[0.4em] text-center">
            TRUSTED BY 15+ BRANDS AND 100+ SHOPS
          </span>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-yellow/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 uppercase tracking-tight">About <span className="text-gradient">SMASH-FEAT</span></h2>
          <div className="w-20 h-1 bg-neon-yellow mx-auto rounded-full mb-10" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed glass p-8 rounded-[2rem] border border-white/10">
            Welcome to <span className="text-neon-yellow font-bold">SMASH-FEAT</span> — where creativity meets strategy and brands transform into powerful digital identities.
            <br /><br />
            I am a modern AI-driven marketing expert focused on helping businesses grow, scale, and stand out in today’s competitive online world. My mission is simple: build your brand from the ground up and turn your online presence into a growth engine.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: What I Do & Approach */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 relative group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <RocketLogo 
                  src="https://i.ibb.co/PZ5YrGZG/Firefly-1.png" 
                  alt="SMASH-FEAT Logo" 
                  className="w-24 h-24" 
                />
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🚀</span> What I Do
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                At SMASH-FEAT, I provide comprehensive social media management tailored for startups, creators, and growing businesses. I don’t just post content — I build your brand strategically.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "AI Content Creation", desc: "High-quality, trend-driven content powered by modern tools." },
                  { title: "Social Media Marketing", desc: "End-to-end management to grow audience and visibility." },
                  { title: "Video Editing & UGC", desc: "Scroll-stopping videos designed to convert viewers." },
                  { title: "Brand Strategy", desc: "Clear positioning to make your brand memorable." }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-yellow/30 transition-colors">
                    <div className="font-bold text-neon-yellow mb-1 text-sm">{item.title}</div>
                    <div className="text-xs text-white/40 leading-tight">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎯</span> My Approach
              </h3>
              <p className="text-white/60 mb-6 italic">"I work closely with brands to develop a strong content strategy."</p>
              <ul className="space-y-4">
                {[
                  "Develop a strong content strategy",
                  "Create eye-catching ads and visuals",
                  "Write compelling captions that connect",
                  "Guide you step-by-step in building a digital footprint"
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 bg-neon-yellow rounded-full" />
                    {step}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-white/50 border-t border-white/5 pt-6">
                Whether you’re starting from zero or looking to scale, I provide the direction and execution you need.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Why Me, Vision, Future */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-neon-yellow/5 to-transparent"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-3xl">💡</span> Why SMASH-FEAT?
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Creativity + Data", icon: Zap },
                  { label: "AI + Human Strategy", icon: Cpu },
                  { label: "Aesthetics + Performance", icon: Target }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-neon-yellow/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-neon-yellow" />
                    </div>
                    <div className="font-bold text-lg">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-neon-yellow font-bold uppercase tracking-widest text-xs">
                Results that matter: Growth, Engagement, Authority.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🌐</span> My Vision
              </h3>
              <p className="text-white/60 leading-relaxed">
                To empower brands with modern marketing tools and strategies, helping them thrive in the digital era.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-neon-yellow text-black text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <h3 className="text-2xl font-black mb-4 uppercase italic">✨ Experience the Future of Growth</h3>
              <p className="font-bold opacity-80 leading-tight">
                With SMASH-FEAT, you’re not just building a presence — you’re building a brand that stands out, connects, and grows.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: Cpu, title: "AI Content Creation", desc: "High-quality, AI-generated visuals and copy tailored to your brand voice." },
    { icon: Instagram, title: "Social Media Marketing", desc: "Data-driven strategies to dominate social platforms and build community." },
    { icon: Video, title: "Video Editing & UGC", desc: "Short-form content that stops the scroll and tells your story effectively." },
    { icon: Zap, title: "Brand Strategy", desc: "Comprehensive roadmaps to position your brand as a leader in the AI era." },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 uppercase">My <span className="text-gradient">Capabilities</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Leveraging cutting-edge AI technology to deliver marketing results that were previously impossible.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-neon-yellow hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-yellow group-hover:glow-yellow transition-all duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const packages = [
    {
      name: "Basic",
      price: "3500",
      features: ["10 Posts", "2 UGC Videos", "Growth Strategy"],
      badge: null,
    },
    {
      name: "Decent",
      price: "6500",
      features: ["20 Posts", "5 UGC Videos", "Content Calendar", "Strategy", "Proper Scaling"],
      badge: "Recommended Pack",
    },
    {
      name: "Advanced",
      price: "13000",
      features: ["30 Posts", "20 UGC Videos", "Content Calendar", "Strategy", "Growth Concept", "Proper Scaling"],
      badge: "Most Popular",
    },
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl uppercase mb-6">Growth <span className="text-gradient">Packages</span></h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Choose the perfect engine for your brand's growth. Transparent pricing with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass p-8 md:p-10 rounded-[2.5rem] border relative flex flex-col ${
                pkg.badge ? 'border-neon-yellow/50 shadow-[0_0_40px_rgba(250,204,21,0.1)]' : 'border-white/10'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-yellow text-black text-[10px] font-black uppercase tracking-widest rounded-full whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-neon-yellow">₹{pkg.price}</span>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">/ Month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 bg-neon-yellow rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenContact}
                className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                  pkg.badge 
                  ? 'bg-neon-yellow text-black hover:glow-yellow' 
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-[2rem] border border-white/10 text-center max-w-3xl mx-auto"
        >
          <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Need something custom?</h4>
          <p className="text-white/50 text-sm mb-6">
            I understand that every brand is unique. If my standard packages don't fit your needs, I can build a custom growth plan just for you.
          </p>
          <button 
            onClick={onOpenContact}
            className="text-neon-yellow font-bold uppercase tracking-widest text-xs hover:underline"
          >
            Contact for Custom Pack →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { label: "2+ Years of AI Innovation", desc: "Pioneering the future of digital growth with cutting-edge technology." },
    { label: "Data-Driven Strategy", desc: "Decisions backed by billions of data points." },
    { label: "Solo AI Expert", desc: "Specialist in neural networks and creative AI." },
    { label: "Direct Expert Access", desc: "Work directly with me for personalized results." },
  ];

  return (
    <section className="py-32 bg-neon-yellow/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 md:p-8 rounded-2xl md:rounded-3xl glass border-white/5 hover:border-neon-yellow/30 transition-colors">
              <div className="text-neon-yellow font-display font-bold text-3xl mb-4">0{idx + 1}</div>
              <h4 className="text-lg mb-2">{f.label}</h4>
              <p className="text-xs text-white/40">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    { name: "All", sub: [] },
    { name: "Marketing Ad Posts", sub: ["Jewelry", "Food", "Tech"] },
    { name: "UGC Content", sub: [] }
  ];

  const cases = [
    { 
      image: "https://i.ibb.co/fh92tM1/JEWLERY-1.png", 
      title: "Royal Gold Collection", 
      category: "Marketing Ad Posts", 
      subCategory: "Jewelry",
      size: "tall"
    },
    { 
      image: "https://i.ibb.co/XxMFRsNC/jewelry-3.png", 
      title: "Diamond Elegance", 
      category: "Marketing Ad Posts", 
      subCategory: "Jewelry",
      size: "square"
    },
    { 
      image: "https://i.ibb.co/ycHSM7k5/jewelry-2.png", 
      title: "Emerald Statement", 
      category: "Marketing Ad Posts", 
      subCategory: "Jewelry",
      size: "square"
    },
    { 
      image: "https://i.ibb.co/Zz8H58MM/jewlery-4.png", 
      title: "Sapphire Dreams", 
      category: "Marketing Ad Posts", 
      subCategory: "Jewelry",
      size: "tall"
    },
    { 
      image: "https://i.ibb.co/KpjKWHdr/jewlery-5.jpg", 
      title: "Artisan Silver Craft", 
      category: "Marketing Ad Posts", 
      subCategory: "Jewelry",
      size: "square"
    },
    { 
      image: "https://i.ibb.co/bMtcpMrW/ULTRA-3.jpg", 
      title: "Gourmet Fusion Campaign", 
      category: "Marketing Ad Posts", 
      subCategory: "Food",
      size: "tall"
    },
    { 
      image: "https://i.ibb.co/d4YV7Fcb/Gemini-Generated-Image-pl7jpbpl7jpbpl7j.png", 
      title: "Gourmet AI Experience", 
      category: "Marketing Ad Posts", 
      subCategory: "Food",
      size: "tall"
    },
    { 
      image: "https://i.ibb.co/yBRPfdYg/ULTRA-2.jpg", 
      title: "Ultra Gourmet Campaign", 
      category: "Marketing Ad Posts", 
      subCategory: "Food",
      size: "square"
    },
  ];

  const filteredCases = cases.filter(c => {
    if (activeCategory === "All") return true;
    if (c.category !== activeCategory) return false;
    if (activeSubCategory === "All") return true;
    return c.subCategory === activeSubCategory;
  });

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredCases.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev < filteredCases.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredCases.length]);

  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight mb-6">
              Selected <span className="text-gradient">Work</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              A curated collection of my most impactful AI-driven marketing campaigns and content strategies.
            </p>
          </motion.div>

          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Main Categories */}
            <div className="flex flex-wrap justify-center gap-3 p-1.5 glass rounded-full border border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setActiveSubCategory("All");
                  }}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 cursor-pointer ${
                    activeCategory === cat.name 
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "text-white/40 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            {/* Sub Categories */}
            <AnimatePresence mode="wait">
              {activeCategory === "Marketing Ad Posts" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-wrap justify-center gap-2"
                >
                  <button
                    onClick={() => setActiveSubCategory("All")}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      activeSubCategory === "All" 
                      ? "bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/30" 
                      : "text-white/30 border border-white/5 hover:border-white/20"
                    }`}
                  >
                    All Industries
                  </button>
                  {categories.find(c => c.name === "Marketing Ad Posts")?.sub.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setActiveSubCategory(sub)}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                        activeSubCategory === sub 
                        ? "bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/30" 
                        : "text-white/30 border border-white/5 hover:border-white/20"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {filteredCases.map((c, idx) => (
            <motion.div 
              layout
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedIndex(idx)}
              className="group relative break-inside-avoid rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gentle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neon-yellow mb-2">
                      {c.subCategory || c.category}
                    </div>
                    <h4 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                      {c.title}
                    </h4>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://www.instagram.com/smashfeat.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neon-yellow hover:text-black transition-all duration-300 group"
          >
            For more work demos checkout my instagram
            <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Refined Image Popup Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-2xl cursor-zoom-out"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-[210]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-[210] cursor-pointer group"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-[210] cursor-pointer group"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-full max-h-full flex flex-col items-center gap-6"
            >
              <img 
                src={filteredCases[selectedIndex].image} 
                alt="Full preview" 
                className="max-w-[90vw] max-h-[75vh] object-contain rounded-3xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-neon-yellow mb-2">
                  {filteredCases[selectedIndex].subCategory || filteredCases[selectedIndex].category}
                </div>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tight">
                  {filteredCases[selectedIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Process = () => {
  const steps = ["Strategy", "Content Creation", "AI Optimization", "Scaling"];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl text-center uppercase mb-24">The <span className="text-gradient">Process</span></h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-charcoal border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-neon-yellow group-hover:glow-yellow transition-all duration-500 relative bg-white/5">
                  <span className="text-xl font-bold">{idx + 1}</span>
                </div>
                <h4 className="text-xl mb-4 font-display uppercase tracking-tight">{step}</h4>
                <p className="text-sm text-white/40">Phase {idx + 1} of my proprietary AI-driven growth framework.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Metrics = () => {
  const stats = [
    { value: "5L+", label: "Views Generated" },
    { value: "3X", label: "Average ROI" },
    { value: "100+", label: "Indian Clients" },
  ];

  return (
    <section className="py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-display font-extrabold text-gradient mb-4"
            >
              {stat.value}
            </motion.div>
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl uppercase leading-tight mb-8">
          Let's Grow Your <br />
          <span className="text-gradient">Brand With AI</span> 🚀
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-2xl mx-auto">
          Ready to transform your digital presence? I am standing by to build your custom growth engine. 
          Connect with me directly through any of these platforms.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {[
            { Icon: Mail, label: "Email Me", value: "hello.smashfeat@gmail.com", href: "mailto:hello.smashfeat@gmail.com" },
            { Icon: Linkedin, label: "LinkedIn", value: "SMASH-FEAT", href: "https://www.linkedin.com/in/smash-feat/" },
            { Icon: Instagram, label: "Instagram", value: "@smashfeat.in", href: "https://www.instagram.com/smashfeat.in/" },
            { Icon: Facebook, label: "Facebook", value: "SMASH-FEAT", href: "#" },
            { Icon: Twitter, label: "X (Twitter)", value: "SMASH-FEAT", href: "#" }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center gap-4 hover:border-neon-yellow/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-neon-yellow/10 flex items-center justify-center group-hover:bg-neon-yellow group-hover:text-black transition-all">
                <item.Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">{item.label}</div>
                <div className="text-sm font-bold">{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenLegal }: { onOpenLegal: (type: 'privacy' | 'terms') => void }) => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="flex items-center gap-3">
            <RocketLogo 
              src="https://i.ibb.co/PZ5YrGZG/Firefly-1.png" 
              alt="SMASH-FEAT Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-display font-bold tracking-tighter uppercase">SMASH-FEAT</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-white/40">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>

          <div className="flex gap-4">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/smashfeat.in/" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/smash-feat/" }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-neon-yellow hover:text-white transition-all">
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center text-xs text-white/20 font-bold uppercase tracking-[0.4em]">
          © 2026 SMASH-FEAT MEDIA GROUP. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

const RoamingRobot = () => {
  const controls = useAnimation();

  const startRoaming = () => {
    controls.start({
      x: ["10vw", "10vw", "85vw", "85vw", "10vw", "85vw", "45vw", "10vw"],
      y: ["15vh", "85vh", "85vh", "15vh", "15vh", "85vh", "50vh", "15vh"],
      rotate: [0, 5, -5, 10, -10, 5, 0],
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: "linear",
      }
    });
  };

  useEffect(() => {
    startRoaming();
  }, []);

  return (
    <motion.div
      drag
      onDragStart={() => controls.stop()}
      onDragEnd={() => startRoaming()}
      whileHover={{ scale: 1.2, cursor: "grab" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      className="fixed z-[60] pointer-events-auto"
      animate={controls}
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Robot Drone Body */}
        <div className="w-14 h-14 bg-neon-yellow/90 backdrop-blur-md rounded-2xl glow-yellow flex flex-col items-center justify-center relative border border-white/20">
          {/* Eyes/Visor */}
          <div className="w-10 h-4 bg-charcoal/80 rounded-full flex items-center justify-around px-2 mb-1">
            <motion.div 
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.1] }}
              className="w-2 h-2 bg-neon-yellow rounded-full shadow-[0_0_8px_#facc15]" 
            />
            <motion.div 
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.05, 0.1] }}
              className="w-2 h-2 bg-neon-yellow rounded-full shadow-[0_0_8px_#facc15]" 
            />
          </div>
          {/* Antenna */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-gradient-to-t from-neon-yellow to-white/50">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff] animate-pulse" />
          </div>
          {/* Side Fins */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-6 bg-neon-yellow rounded-l-full border-l border-white/20" />
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-6 bg-neon-yellow rounded-r-full border-r border-white/20" />
        </div>
        {/* Dynamic Thruster Light */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-12 bg-neon-yellow/30 blur-xl rounded-full animate-pulse" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-6 bg-white/20 blur-md rounded-full" />
      </motion.div>
    </motion.div>
  );
};

const RoamingRobotSilver = () => {
  const controls = useAnimation();

  const startRoaming = () => {
    controls.start({
      x: ["85vw", "5vw", "5vw", "85vw", "85vw", "5vw", "45vw", "85vw"],
      y: ["5vh", "5vh", "85vh", "85vh", "5vh", "85vh", "45vh", "5vh"],
      rotate: [0, -5, 5, -10, 10, -5, 0],
      transition: {
        duration: 70,
        repeat: Infinity,
        ease: "linear",
      }
    });
  };

  useEffect(() => {
    startRoaming();
  }, []);

  return (
    <motion.div
      drag
      onDragStart={() => controls.stop()}
      onDragEnd={() => startRoaming()}
      whileHover={{ scale: 1.1, cursor: "grab" }}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      className="fixed z-[55] pointer-events-auto"
      animate={controls}
    >
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Silver Reflective Body */}
        <div className="w-24 h-24 bg-gradient-to-br from-slate-100 via-white to-slate-400 rounded-[2rem] shadow-[0_0_30px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center relative border border-white/40 overflow-hidden">
          {/* Reflection Shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          
          {/* Visor */}
          <div className="w-16 h-6 bg-charcoal/90 rounded-full flex items-center justify-center gap-3 border border-white/10">
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-neon-yellow rounded-full shadow-[0_0_12px_#facc15]" 
            />
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-3 h-3 bg-neon-yellow rounded-full shadow-[0_0_12px_#facc15]" 
            />
          </div>

          {/* Yellow Accents */}
          <div className="absolute top-2 right-4 w-2 h-2 bg-neon-yellow rounded-full blur-[2px]" />
          <div className="absolute bottom-4 left-6 w-10 h-1 bg-neon-yellow/40 rounded-full" />
          
          {/* Side Thrusters */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-10 bg-slate-300 rounded-l-xl border-l border-white/30" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-10 bg-slate-300 rounded-r-xl border-r border-white/30" />
        </div>
        
        {/* Large Thruster Glow */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-20 bg-neon-yellow/20 blur-2xl rounded-full animate-pulse" />
      </motion.div>
    </motion.div>
  );
};

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePos = (x: number, y: number) => {
      setPos({ x, y });
      setIsVisible(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePos(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: `radial-gradient(350px at ${pos.x}px ${pos.y}px, rgba(250, 204, 21, 0.12), transparent 70%)`
      }}
    />
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="glass w-full max-w-md p-8 rounded-[32px] border border-white/10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-display font-bold uppercase mb-2">Start Your Project</h3>
            <p className="text-white/50 text-sm mb-8">Choose your preferred way to connect and let's build something amazing.</p>

            <div className="space-y-4">
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/smash-feat/', '_blank')}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-neon-yellow hover:text-black transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black/10">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50">Professional</div>
                  <div className="font-bold">Connect on LinkedIn</div>
                </div>
              </button>

              <button 
                onClick={() => window.open('https://www.instagram.com/smashfeat.in/', '_blank')}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-neon-yellow hover:text-black transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black/10">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50">Social</div>
                  <div className="font-bold">Follow on Instagram (@smashfeat.in)</div>
                </div>
              </button>

              <button 
                onClick={() => window.location.href = 'mailto:hello.smashfeat@gmail.com'}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-neon-yellow hover:text-black transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-50">Direct</div>
                  <div className="font-bold">hello.smashfeat@gmail.com</div>
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LegalModal = ({ isOpen, onClose, type }: { isOpen: boolean, onClose: () => void, type: 'privacy' | 'terms' | null }) => {
  if (!type) return null;
  const content = type === 'privacy' ? privacyPolicy : termsOfService;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="glass w-full max-w-3xl max-h-[85vh] p-8 md:p-12 rounded-[40px] border border-white/10 relative overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean, type: 'privacy' | 'terms' | null }>({
    isOpen: false,
    type: null
  });

  const openLegal = (type: 'privacy' | 'terms') => {
    setLegalModal({ isOpen: true, type });
  };

  return (
    <div className="relative">
      <div className="noise-overlay fixed inset-0 z-[100]" />
      <RoamingRobot />
      <RoamingRobotSilver />
      <CursorGlow />
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
      <main>
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <About />
        <Services />
        <Pricing onOpenContact={() => setIsContactModalOpen(true)} />
        <WhyChooseUs />
        <CaseStudies />
        <Process />
        <Metrics />
        <Contact />
      </main>
      <Footer onOpenLegal={openLegal} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <LegalModal 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
      />
    </div>
  );
}
