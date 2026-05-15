import { ArrowRight, Leaf, Shield, Sparkles, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SERVICES_PREVIEW = [
  { title: 'Trauma Recovery', icon: Shield, text: 'Gently processing deep wounds and reclaiming your sense of safety.' },
  { title: 'Anxiety & Depression', icon: Wind, text: 'Finding grounded presence and hope amidst the storms of life.' },
];

function Wind(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.8 19.6c1.6 0 3.1-1.2 3.1-2.8s-1.5-2.8-3.1-2.8H4c-2.2 0-4 1.8-4 4s1.8 4 4 4h2" /><path d="M17.5 4.4c0-1.6-1.3-2.8-2.9-2.8-1.7 0-3 1.3-3 3s1.3 2.9 3 2.9h9.4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-2" /><path d="M10.9 9.9c0-1.6-1.2-2.8-2.8-2.8-1.6 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8h3.4" /></svg>
  );
}

const TESTIMONIALS = [
  {
    quote: "Jennifer is the kind of deeply empathic therapist one hopes they will find when starting their counseling journey. Her calm presence and reassuring demeanor provide you with an environment that allows you to flourish and leaves you feeling safe and secure.",
    author: "Shanae Graff",
    context: "MA, LPC-A (Counselor)"
  },
  {
    quote: "Jennifer is a gifted and compassionate therapist. Warm and insightful, Jennifer meets her clients where they are cultivating an environment poised for growth!",
    author: "Aundrea deJonge",
    context: "MA, LCMHC-A (Counselor)"
  },
  {
    quote: "Jennifer's empathetic approach allows her to connect deeply with each person, meeting them exactly where they are in their journey. Her therapeutic techniques are tailored to individual needs. She is a beautiful combination of brilliant and empathy.",
    author: "Grace M Halliday",
    context: "PLPC, NCC (Counselor)"
  }
];

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative overflow-hidden bg-brand-cream-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-8 md:px-12 pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Content Col */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 flex flex-col gap-8 md:pr-12"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-green-100 text-brand-green-700 text-[11px] font-bold uppercase tracking-wider rounded-md self-start">
              In-Person Therapy in Loveland • Serving Fort Collins, Berthoud, Longmont & Online across Colorado
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-brand-green-900 leading-[1.05] text-balance">
              Nurturing <span className="italic font-light">Healing</span>,<br />
              Cultivating <span className="italic font-light">Health</span>,<br />
              Inspiring <span className="italic font-light">Hope</span>.
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-brand-text-muted max-w-lg">
              A warm, grounded, and trauma-informed space for adults in every season of life—from late adolescence through the senior years—to navigate challenges with authentic connection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <NavLink
                to="/about"
                className="px-8 py-5 bg-brand-green-600 text-white rounded-full text-sm font-medium shadow-lg hover:bg-brand-green-700 transition-all text-center"
              >
                Learn More About My Style
              </NavLink>
              <NavLink
                to="/services"
                className="px-8 py-5 border border-brand-green-600 text-brand-green-700 rounded-full text-sm font-medium hover:bg-brand-green-50 transition-all text-center"
              >
                View Services
              </NavLink>
            </div>
          </motion.div>

          {/* Image Col */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 relative hidden md:flex items-center justify-center py-12"
          >
            <div className="w-full aspect-[4/5] bg-brand-cream-200 rounded-[160px] relative overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="/jennifer-scale.png"
                alt="Jennifer Depler, LPCC"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-12 left-0 right-0 flex flex-col justify-center items-center text-center px-8">
                <p className="font-serif italic text-xl lg:text-2xl text-white drop-shadow-md">Exhale. You are safe here.</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-green-100 rounded-full -z-10 opacity-60"></div>
            <div className="absolute bottom-20 -left-10 w-48 h-48 border border-brand-green-600 rounded-full -z-10 opacity-20"></div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlight Bar */}
      <section className="px-8 md:px-12 py-12 bg-white/50 backdrop-blur-sm border-y border-brand-cream-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            <div>
              <h3 className="text-[10px] uppercase font-bold text-brand-green-200/80 mb-3 tracking-[0.2em]">Specializations</h3>
              <p className="text-base font-serif text-brand-green-700">Depression, Anxiety, Trauma Recovery, Grief & Loss, Life Transitions</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase font-bold text-brand-green-200/80 mb-3 tracking-[0.2em]">Approaches</h3>
              <p className="text-base font-serif text-brand-green-700">Brain Spotting, IFS Informed, DBT, Neuro Informed, Enneagram</p>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end w-full lg:w-auto pt-8 lg:pt-0 border-t lg:border-t-0 border-brand-cream-200">
            <span className="text-xs text-brand-text-muted mb-1 font-sans uppercase tracking-widest opacity-60">Contact Jennifer</span>
            <span className="text-2xl font-serif text-brand-green-700">303-709-7170</span>
          </div>
        </div>
      </section>

      {/* Dynamic Testimonials Section */}
      <section className="py-32 px-8 md:px-12 bg-brand-cream-100/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-green-900 mb-6">Testimonials</h2>
            <div className="w-12 h-1 bg-brand-green-600/20 mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4">
            <div className="relative min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full bg-white p-12 md:p-16 rounded-[64px] shadow-sm border border-brand-cream-200"
                >
                  <MessageCircle className="w-12 h-12 text-brand-green-600 mb-10 opacity-10" />
                  <p className="text-xl md:text-2xl text-brand-text-muted italic leading-relaxed mb-12 font-serif text-balance">
                    {TESTIMONIALS[currentIndex].quote}
                  </p>
                  <div className="pt-10 border-t border-brand-cream-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] text-brand-green-700 mb-1">
                        {TESTIMONIALS[currentIndex].author}
                      </div>
                      <div className="font-sans text-[11px] uppercase tracking-widest text-brand-text-muted opacity-60">
                        {TESTIMONIALS[currentIndex].context}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      {TESTIMONIALS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentIndex === i 
                              ? 'bg-brand-green-600 w-8' 
                              : 'bg-brand-green-200 hover:bg-brand-green-300'
                          }`}
                          aria-label={`Go to testimonial ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-brand-cream-100 text-brand-green-700 hover:bg-brand-cream-50 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-brand-cream-100 text-brand-green-700 hover:bg-brand-cream-50 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-8 md:px-12">
        <div className="max-w-7xl mx-auto bg-brand-cream-100 rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden group shadow-sm border border-brand-cream-200">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(125,140,125,0.05),transparent_50%)]"></div>
          
          <h2 className="text-4xl md:text-6xl text-brand-green-700 mb-12 relative z-10 leading-tight">
            Let's start your <br /> <span className="italic font-light">healing journey</span> together.
          </h2>
          <NavLink
            to="/contact"
            className="inline-block bg-brand-green-600 text-white px-12 py-5 rounded-full text-xs font-bold font-sans uppercase tracking-[0.2em] hover:bg-brand-green-700 transition-all relative z-10 shadow-xl"
          >
            Schedule Your Free Consultation
          </NavLink>
        </div>
      </section>
    </div>
  );
}
