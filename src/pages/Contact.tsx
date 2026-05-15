import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-32 bg-brand-cream-50 min-h-screen">
       <section className="pt-20 pb-32 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green-900 mb-8 leading-tight">
               Let's Take the <br /><span className="italic font-light text-brand-green-600">Next Step Together.</span>
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed max-w-2xl font-sans">
               Whether you have a specific question about my approach or you’re ready to schedule your free consultation, I’d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Form Side */}
              <div>
                  {submitted ? (
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-brand-green-100/50 p-16 rounded-[80px] text-center border border-brand-green-100 shadow-xl backdrop-blur-sm"
                     >
                        <div className="w-20 h-20 rounded-full bg-brand-green-600 flex items-center justify-center mx-auto mb-8 text-white shadow-lg border-[6px] border-white">
                           <Send className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-serif text-brand-green-900 mb-4">Message Sent</h3>
                        <p className="text-brand-text-muted leading-relaxed font-sans text-lg">
                           Thank you for reaching out, Jennifer. I will review your message and get back to you within 24-48 business hours.
                        </p>
                        <button
                           onClick={() => setSubmitted(false)}
                           className="mt-10 text-xs font-sans font-bold uppercase tracking-[0.2em] text-brand-green-700 hover:text-brand-green-900 transition-colors"
                        >
                           Send another message
                        </button>
                     </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-12 md:p-16 rounded-[80px] border border-brand-cream-200 shadow-sm relative">
                        <div className="absolute -top-10 -right-6 w-32 h-32 bg-brand-green-100 rounded-full -z-10 blur-3xl opacity-40" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-brand-green-200 font-bold ml-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-brand-cream-50 border border-brand-cream-100 rounded-3xl px-6 py-4 focus:ring-2 focus:ring-brand-green-600/20 outline-none transition-all font-sans"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-brand-green-200 font-bold ml-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full bg-brand-cream-50 border border-brand-cream-100 rounded-3xl px-6 py-4 focus:ring-2 focus:ring-brand-green-600/20 outline-none transition-all font-sans"
                                    placeholder="jennifer@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-brand-green-200 font-bold ml-1">Interested In</label>
                            <select className="w-full bg-brand-cream-50 border border-brand-cream-100 rounded-3xl px-6 py-4 focus:ring-2 focus:ring-brand-green-600/20 outline-none transition-all text-brand-text-dark font-sans appearance-none">
                                <option>Free Consultation Call</option>
                                <option>Individual Therapy Inquiry</option>
                                <option>Professional Consultation</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-brand-green-200 font-bold ml-1">A Brief Glimpse</label>
                            <textarea
                                required
                                rows={5}
                                className="w-full bg-brand-cream-50 border border-brand-cream-100 rounded-[32px] px-6 py-4 focus:ring-2 focus:ring-brand-green-600/20 outline-none transition-all resize-none font-sans"
                                placeholder="Without going into detail, please share a brief glimpse of what you're hoping for support with."
                            />
                        </div>
                        <div className="p-8 bg-brand-cream-100/30 rounded-[40px] flex items-start gap-5 border border-brand-cream-100">
                           <Clock className="w-6 h-6 text-brand-green-600 shrink-0 mt-0.5" />
                           <p className="text-xs text-brand-text-muted leading-relaxed italic font-serif">
                               Note: Every message is read within 1-2 business days. If you are experiencing a mental health emergency, please call 988 or go to your nearest emergency room.
                           </p>
                        </div>
                        <button
                            type="submit"
                            className="bg-brand-green-600 text-white px-12 py-5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.2em] hover:bg-brand-green-700 transition-all shadow-xl shadow-brand-green-600/20 w-full"
                        >
                            Send Message
                        </button>
                    </form>
                  )}
              </div>

              {/* Info Side */}
              <div className="space-y-14">
                  <div className="bg-brand-green-900 text-brand-cream-50 p-12 md:p-16 rounded-[80px] shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -m-16 group-hover:scale-150 transition-transform duration-700 border border-white/10" />
                      <h3 className="text-4xl font-serif mb-12 flex items-center gap-4 text-white">
                        <MapPin className="w-8 h-8 text-brand-green-600" />
                        Practice Details
                      </h3>
                      
                      <div className="space-y-12">
                          <div className="flex gap-8">
                              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                  <MapPin className="w-6 h-6 text-brand-green-600" />
                              </div>
                              <div>
                                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green-200 mb-2">Office Location</h4>
                                  <p className="text-xl font-serif">1401 S Taft Avenue, Unit 206, Loveland, Colorado 80537</p>
                                  <p className="text-sm text-brand-green-200 mt-2 italic">Proudly serving Loveland, Fort Collins, Berthoud, Longmont, and Northern Colorado.</p>
                              </div>
                          </div>

                          <div className="flex gap-8">
                              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                  <Mail className="w-6 h-6 text-brand-green-600" />
                              </div>
                              <div>
                                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green-200 mb-2">Direct Email</h4>
                                  <p className="text-xl font-serif">JenniferDeplerCounseling@Proton.Me</p>
                              </div>
                          </div>

                          <div className="flex gap-8">
                              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                  <Phone className="w-6 h-6 text-brand-green-600" />
                              </div>
                              <div>
                                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green-200 mb-2">Phone Number</h4>
                                  <p className="text-xl font-serif">303-709-7170</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="p-12 md:p-16 rounded-[80px] border border-brand-cream-200 bg-white shadow-sm relative overflow-hidden group">
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-green-50 rounded-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                      <MessageCircle className="w-12 h-12 text-brand-green-600 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                      <h4 className="text-3xl font-serif text-brand-green-900 mb-6 leading-tight">A Reassuring Thought</h4>
                      <p className="text-brand-text-muted text-xl leading-relaxed italic font-serif">
                        If you've read this far, a part of you is longing for support and healing. If you choose to reach out, be assured that my intention is to make this first step as gentle and safe as possible for you.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
