"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Copy, Check, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  
  // Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("lottlamohit2703@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(e.currentTarget);
    // 🔑 ADD YOUR KEY HERE (Or better, use process.env.NEXT_PUBLIC_WEB3FORMS_KEY)
    formData.append("access_key", "3149cafa-d8b8-4f79-9efd-c789b28eb1f7"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResult("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setIsSuccess(false);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* === LEFT COLUMN: CONTACT INFO === */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="text-blue-500">Connect</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am currently looking for internships and freelance opportunities. 
              Whether you have an internship offer, a project idea, or just want to connect with me, fill up the form and send me an email.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-gray-900/40 border border-gray-800 rounded-2xl flex items-center justify-between group hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400 text-sm">lottlamohit2703@gmail.com</p>
                </div>
              </div>
              <button onClick={copyEmail} className="p-2 text-gray-500 hover:text-white transition-colors">
                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              </button>
            </div>

            <div className="p-6 bg-gray-900/40 border border-gray-800 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400 text-sm">Jamshedpur, India (Open to Remote)</p>
              </div>
            </div>
          </div>

          {/* <div>
             <h3 className="text-white font-semibold mb-4">Find me on</h3>
             <div className="flex gap-4">
               <SocialBtn href="https://linkedin.com/in/yourid" icon={<Linkedin size={20} />} />
               <SocialBtn href="https://github.com/yourid" icon={<Github size={20} />} />
               <SocialBtn href="https://twitter.com/yourid" icon={<Twitter size={20} />} />
             </div>
          </div> */}
        </motion.div>


        {/* === RIGHT COLUMN: MESSAGE FORM === */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
              <input 
                required
                name="name"
                type="text" 
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-600 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
              <input 
                required
                name="email"
                type="email" 
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-600 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                required
                name="message"
                rows={5}
                placeholder="Hey Mohit, I'd like to discuss..."
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-gray-600 transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : isSuccess ? (
                <>
                  <Check size={18} /> Sent!
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
            
            {/* Feedback Message */}
            {result && (
              <p className={`text-center text-sm mt-4 ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                {result}
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </main>
  );
}

// Helper Component for Social Buttons
function SocialBtn({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
    >
      {icon}
    </a>
  );
}