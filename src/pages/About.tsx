import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Heart, Compass, Shield, Anchor, ChevronLeft, ChevronRight, Quote, Wind } from 'lucide-react';
import carouselPhoto from '../assets/images/regenerated_image_1778612838657.jpg';
import mainProfilePhoto from '../assets/images/regenerated_image_1778692320413.jpg';

const BELIEFS = [
  "I believe that we are each created in the image of God, uniquely designed with an inner longing to enjoy a life of meaning, purpose, and healthy relational connection with ourselves, our community, and our God. Counseling can help clarify our needs, values and mission.",
  "I believe that we suffer the consequences of living in broken bodies in a broken world. Nevertheless, we are created with the ability to grow and heal when there is an environment of safety and compassion. Counseling offers a place where messiness is welcome, and vulnerability and authenticity are paths to healing.",
  "I believe you are the expert in your own life. You know at your core what you need but you may be feeling stuck, discouraged or stalled out. Counseling helps facilitate insight and empowers us to risk trying new approaches to meet our challenges.",
  "I believe that true well-being encompasses the mind, body, and spirit. My holistic approach to counseling supports the combination of these facets that make you uniquely you.",
  "I believe in the power of integrating evidence-based therapeutic techniques with spiritual and emotional exploration, fostering a sense of balance and harmony in one's life. My neuroscience informed style of counseling is a combination of practical tools to get you feeling better, blended with skilled therapeutic support as you search your story to better understand and heal your sore spots."
];

export function About() {
  const [currentBelief, setCurrentBelief] = useState(0);

  const nextBelief = () => {
    setCurrentBelief((prev) => (prev + 1) % BELIEFS.length);
  };

  const prevBelief = () => {
    setCurrentBelief((prev) => (prev - 1 + BELIEFS.length) % BELIEFS.length);
  };

  return (
    <div className="pb-32 bg-brand-bg">
      {/* Header */}
      <section className="pt-20 pb-20 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-brand-heading mb-8 leading-tight">
              Exhale. <br className="hidden md:block" /> <span className="font-light">You Are Safe Here</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-body leading-relaxed font-sans">
              I'm Jennifer, a trauma-informed therapist dedicated to supporting and guiding you when life feels overwhelming.
            </p>
          </div>
        </div>
      </section>

      {/* Storytelling Content */}
      <section className="px-8 md:px-12 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white/50 bg-white">
              <img
                src={mainProfilePhoto}
                alt="Jennifer Depler, LPCC"
                className="w-full h-full object-cover object-right-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:right-4 bg-brand-sage p-6 md:p-8 rounded-[32px] text-brand-heading shadow-xl hidden md:block border-[6px] border-white/50 z-10">
               <div className="relative">
                 <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2 opacity-60 font-sans">Credentials</p>
                 <p className="font-serif text-xl md:text-2xl leading-tight">Jennifer Depler <br/><span className="text-sm font-sans font-normal opacity-90">MA, LPCC</span></p>
               </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="prose prose-lg text-brand-body leading-relaxed font-sans max-w-none">
              <p className="mb-6 text-lg">
                I earned my Master of Arts in Clinical Mental Health Counseling from Colorado Christian University and a Bachelor of Arts in Human Relations from Milligan University.
              </p>
              <p className="mb-6 text-lg">
                The focus of my post-graduate training is in Brainspotting, Internal Family Systems (IFS), and the treatment of complex trauma.
              </p>
              <p className="mb-6 text-lg">
                I journey with clients who want to reduce suffering, increase wellness, and relate with themselves and others in a healthier way. As a compassionate and dedicated therapist, who is also a follower of the teachings of Jesus, I delight in assisting those facing the challenges of adulthood across the lifespan.
              </p>
              <p className="mb-6 text-lg">
                Whether you identify with a specific religious tradition, follow a spiritual path, or are exploring your own beliefs, I am here to be an empathetic and non-judgmental companion on your journey. Together, we can grow in understanding of the deeper dimensions of your experience of life, enhancing wellness, clarity, meaning, purpose, and connection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
               <div className="p-8 rounded-[40px] bg-white border border-brand-border shadow-sm">
                  <Compass className="w-8 h-8 text-brand-primary mb-6" />
                  <h4 className="font-serif text-2xl mb-3 text-brand-heading">Relational Style</h4>
                  <p className="text-sm text-brand-body leading-relaxed">I value real, honest connection infused with warmth and humor. Our relationship is the foundation for your healing journey.</p>
               </div>
               <div className="p-8 rounded-[40px] bg-white border border-brand-border shadow-sm">
                  <Shield className="w-8 h-8 text-brand-primary mb-6" />
                  <h4 className="font-serif text-2xl mb-3 text-brand-heading">Trauma-Informed</h4>
                  <p className="text-sm text-brand-body leading-relaxed">Safety is the priority. We move at a pace that respects the needs of your nervous system, while integrating practical tools for emotion regulation to expand its capacity.</p>
               </div>
            </div>

            <div className="pt-12 border-t border-brand-border">
              <h2 className="text-3xl md:text-4xl font-serif text-brand-heading mb-6">
                I believe...
              </h2>
              <div className="mb-16 relative bg-white p-10 md:p-14 rounded-[60px] border border-brand-border shadow-sm overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-24 h-24 text-brand-primary" />
                </div>
                <div className="relative z-10 min-h-[180px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentBelief}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full"
                    >
                      <p className="text-lg md:text-xl font-serif text-brand-heading leading-relaxed">
                        {BELIEFS[currentBelief]}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <div className="flex gap-2">
                    {BELIEFS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentBelief(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentBelief === idx ? 'w-8 bg-brand-primary' : 'w-2 bg-brand-sage/40'
                        }`}
                        aria-label={`Go to belief ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={prevBelief}
                      className="p-3 rounded-full border border-brand-border text-brand-primary hover:bg-brand-bg transition-colors"
                      aria-label="Previous belief"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextBelief}
                      className="p-3 rounded-full bg-brand-sage text-brand-heading shadow-md hover:opacity-90 transition-colors"
                      aria-label="Next belief"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Office - Full Width Section */}
      <section className="px-8 md:px-12 py-20 border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-heading mb-12 relative inline-block">
            Beyond the Office
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-sage/40 rounded-full"></span>
          </h2>
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="w-full lg:w-96 shrink-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-sage/20 rounded-[50px] rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-700" />
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.12)] border-8 border-white/50 transform lg:-rotate-1 hover:rotate-0 transition-transform duration-500 bg-brand-card">
                  <img
                    src={carouselPhoto}
                    alt="Jennifer Depler on a carousel goose"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 prose prose-lg text-brand-body leading-relaxed font-sans max-w-none">
              <p className="mb-4 text-lg">
                When I'm not in the therapy room, I'm settled into the heart of my life in Northern Colorado. I am a wife and a mother to two grown children and their spouses, and I deeply cherish the time spent with my large extended family nearby.
              </p>
              <p className="text-lg mb-6">
                Outside the office, I enjoy long walks with friends, getting lost in a good book, checking in on the local honeybees, and spending time with my feathered and furry friends, especially my backyard chickens, who have far more opinions than you'd expect.
              </p>
              <p className="text-lg mb-6">
                I'm fueled by a slightly concerning amount of coffee and love being covered in paint or sawdust from a DIY project. I am energized by renovation of both hearts and homes.
              </p>
              <p className="text-lg mb-6">
                I treasure grounding moments of connection with humans, hens, hounds, and honeybees alike. And yes, if my carousel photo tells you anything, it's that I don't mind embracing a little whimsy along the way.
              </p>
              <p className="text-lg">
                Life can feel like a carousel sometimes: a little dizzying, occasionally chaotic, but still worth holding on and enjoying the ride.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-12 bg-brand-card mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-sage/10 -skew-x-12" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-serif mb-10 leading-[1.1] tracking-tight"
                >
                  <span className="font-light">My Commitments to You</span>
                </motion.h2>
                <div className="space-y-8 text-brand-body leading-relaxed font-sans">
                   <p className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-brand-sage flex items-center justify-center shrink-0 mt-1 shadow-md"><Heart className="w-4 h-4 text-brand-heading" /></span>
                      <span className="text-lg">To offer a combination of clinical skill, kindness, and curiosity.</span>
                   </p>
                   <p className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-brand-sage flex items-center justify-center shrink-0 mt-1 shadow-md"><Compass className="w-4 h-4 text-brand-heading" /></span>
                      <span className="text-lg">To respect your unique story and internal landscape.</span>
                   </p>
                   <p className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-brand-sage flex items-center justify-center shrink-0 mt-1 shadow-md"><Shield className="w-4 h-4 text-brand-heading" /></span>
                      <span className="text-lg">To honor the deep wisdom of your lived experience while addressing the unique transitions of later life.</span>
                   </p>
                   <p className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-brand-sage flex items-center justify-center shrink-0 mt-1 shadow-md"><Anchor className="w-4 h-4 text-brand-heading" /></span>
                      <span className="text-lg">To remain a steady, grounded presence as you navigate deep work.</span>
                   </p>
                   <p className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-brand-sage flex items-center justify-center shrink-0 mt-1 shadow-md"><Wind className="w-4 h-4 text-brand-heading" /></span>
                      <span className="text-lg">To create a space where you can breathe again.</span>
                   </p>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="bg-brand-sage/20 backdrop-blur-md p-12 rounded-[80px] border border-brand-border shadow-2xl transform lg:rotate-2">
                    <p className="font-serif text-3xl leading-relaxed text-brand-heading">
                      Growth is the slow, steady work of tending the landscape of your heart, soul and mind and embracing the hope that has been waiting for you all along.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="pt-40 pb-12 px-8 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-brand-heading mb-8">Ready to Connect?</h2>
              <p className="text-lg text-brand-body mb-12 leading-relaxed max-w-xl mx-auto font-sans">
                  I'd love to hear your story and see how I can support you on your path to wellness.
              </p>
              <NavLink
                to="/contact"
                className="inline-block bg-brand-sage text-brand-heading px-12 py-5 rounded-full text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-brand-sage/20"
              >
                Schedule Consultation
              </NavLink>
          </div>
      </section>
    </div>
  );
}
