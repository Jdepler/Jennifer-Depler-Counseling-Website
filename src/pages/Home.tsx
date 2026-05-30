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
    <div className="relative overflow-hidden bg-brand-bg min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/healing_banner_1778983657538.png"
            alt="Healing Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Overlay - lightened for dark text contrast */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
        </div>

        {/* Text Overlay */}
        <div className="relative h-full flex items-start pt-24 md:pt-32">
            <div className="max-w-7xl mx-auto px-8 md:px-12 w-full mt-12 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl flex flex-col gap-8"
                >
                    <div className="inline-block px-4 py-1.5 bg-brand-heading/10 backdrop-blur-md text-brand-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] rounded-md self-start border border-brand-heading/10">
                      In-Person Therapy in Loveland • Serving Fort Collins, Berthoud, Longmont & Online across Colorado
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-heading leading-[1.1]">
                      Nurturing <span className="font-light">Healing</span>,<br />
                      Cultivating <span className="font-light">Health</span>,<br />
                      Inspiring <span className="font-light">Hope</span>.
                    </h1>
                    
                    <div className="flex flex-col sm:flex-row gap-5">
                      <NavLink
                        to="/about"
                        className="px-10 py-5 bg-white text-brand-heading rounded-full text-xs font-bold font-sans uppercase tracking-[0.2em] shadow-2xl hover:bg-brand-sage transition-all text-center"
                      >
                        Learn More
                      </NavLink>
                      <NavLink
                        to="/contact"
                        className="px-10 py-5 bg-brand-sage text-brand-heading rounded-full text-xs font-bold font-sans uppercase tracking-[0.2em] shadow-2xl hover:opacity-90 transition-all text-center"
                      >
                        Request Consultation
                      </NavLink>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Intro Description Section */}
      <section className="px-8 md:px-12 py-24 md:py-32 bg-brand-bg relative overflow-hidden">
        {/* Background Visual Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-sage/10 to-transparent -z-0" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-brand-sage/20 rounded-full blur-3xl -z-0"
        />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0"
        />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Vertical Label (Editorial touch) */}
          <div className="hidden lg:flex flex-col justify-center">
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.5em] text-brand-secondary/40 whitespace-nowrap font-bold h-fit select-none">
              Compassionate Care
            </span>
          </div>

          <div className="flex-1">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.3 }
                }
              }}
              className="max-w-4xl relative"
            >
              {/* Left accent line for desktop */}
              <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-sage to-transparent hidden lg:block opacity-50" />
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 rounded-full bg-white/50 text-brand-primary shadow-sm border border-brand-border/30">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div className="h-px px-12 bg-brand-border/50"></div>
                </div>

                <p className="text-3xl md:text-5xl text-brand-heading leading-[1.2] font-serif mb-10 tracking-tight text-balance">
                  A Warm, Grounded Space to Navigate Life's Challenges
                </p>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                <p className="text-2xl md:text-4xl text-brand-heading/80 leading-tight font-serif mb-12 font-light text-balance">
                  Welcoming clients from late adolescence through the senior years.
                </p>
                
                <div className="w-20 h-0.5 bg-brand-primary rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlight Bar */}
      <section className="px-8 md:px-12 py-12 bg-brand-card/30 backdrop-blur-sm border-y border-brand-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            <div>
              <h3 className="text-[10px] uppercase font-medium text-brand-secondary mb-3 tracking-[0.2em]">Specializations</h3>
              <p className="text-base font-serif text-brand-heading">Depression, Anxiety, Trauma Recovery, Grief & Loss, Life Transitions</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase font-medium text-brand-secondary mb-3 tracking-[0.2em]">Approaches</h3>
              <p className="text-base font-serif text-brand-heading">Brainspotting, IFS Informed, DBT, Neuro Informed, Enneagram</p>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end w-full lg:w-auto pt-8 lg:pt-0 border-t lg:border-t-0 border-brand-border">
            <span className="text-xs text-brand-body/60 mb-1 font-sans uppercase tracking-widest">Contact Jennifer</span>
            <span className="text-2xl font-serif text-brand-heading">303-709-7170</span>
          </div>
        </div>
      </section>

      {/* Dynamic Testimonials Section */}
      <section className="py-32 px-8 md:px-12 bg-brand-card overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-heading mb-6">Testimonials</h2>
            <div className="w-12 h-1 bg-brand-primary/20 mx-auto rounded-full"></div>
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
                  className="w-full bg-white/80 p-12 md:p-16 rounded-[64px] shadow-sm border border-brand-border"
                >
                  <MessageCircle className="w-12 h-12 text-brand-primary mb-10 opacity-10" />
                  <p className="text-xl md:text-2xl text-brand-body leading-relaxed mb-12 font-serif text-balance">
                    {TESTIMONIALS[currentIndex].quote}
                  </p>
                  <div className="pt-10 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-sans font-bold text-[12px] uppercase tracking-[0.2em] text-brand-secondary mb-1">
                        {TESTIMONIALS[currentIndex].author}
                      </div>
                      <div className="font-sans text-[11px] uppercase tracking-widest text-brand-body/60">
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
                              ? 'bg-brand-primary w-8' 
                              : 'bg-brand-sage/60 hover:bg-brand-sage'
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
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-brand-border text-brand-heading hover:bg-brand-bg transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-brand-border text-brand-heading hover:bg-brand-bg transition-all"
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
        <div className="max-w-7xl mx-auto bg-brand-card rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden group shadow-sm border border-brand-border">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(190,199,196,0.2),transparent_50%)]"></div>
          
          <h2 className="text-4xl md:text-6xl text-brand-heading mb-12 relative z-10 leading-tight">
            Let's start your <br /> <span className="font-light">healing journey</span> together.
          </h2>
          <NavLink
            to="/contact"
            className="inline-block bg-brand-sage text-brand-heading px-12 py-5 rounded-full text-xs font-medium font-sans uppercase tracking-[0.2em] hover:opacity-90 transition-all relative z-10 shadow-xl shadow-brand-sage/20"
          >
            Schedule Your Free Consultation
          </NavLink>
        </div>
      </section>
    </div>
  );
}
