import { Shield, Wind, Heart, Anchor, Sparkles, Brain, Leaf, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import spiritualHurtImg from '../assets/images/regenerated_image_1778714658027.jpg';
import relationshipDifficultyImg from '../assets/images/regenerated_image_1779041207306.jpg';

const SERVICES = [
  {
    title: 'Trauma & PTSD',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    icon: Shield,
    description: 'Specialized support for reclaiming safety after overwhelming events. We work at your pace to process memories, reduce triggers, and improve emotional stability.',
    tags: ['Trauma-Informed', 'Gentle Processing']
  },
  {
    title: 'Anxiety & Depression',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
    icon: Wind,
    description: 'Finding calm in the chaos. We work to understand the roots of your distress and develop self-compassion and grounding.',
    tags: ['Regulation', 'Hope-Oriented']
  },
  {
    title: 'Grief & Loss',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800',
    icon: Heart,
    description: 'A compassionate space to respect your loss. I offer guidance and support to help you navigate this journey.',
    tags: ['Bereavement', 'Respecting Story']
  },
  {
    title: 'Spiritual Hurt',
    image: spiritualHurtImg,
    icon: Sparkles,
    description: 'A non-judgmental space to explore your beliefs and values. A gentle environment to heal from spiritual trauma or wounds within faith communities.',
    tags: ['Faith Integration', 'Spiritual Safety']
  },
  {
    title: 'Relationship Difficulty',
    image: relationshipDifficultyImg,
    icon: Anchor,
    description: 'Navigating attachment wounds, betrayal trauma, or changes in relationship status. Rebuilding trust and understanding your patterns.',
    tags: ['Relational', 'Attachment-Informed']
  },
  {
    title: 'Life Transitions',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    icon: Leaf,
    description: 'Navigating the complexities of shifting seasons—from the transitions of young adulthood and parenthood to the empty nest, retirement, and the unique challenges of aging. I offer a steady space to help you find your footing and rediscover purpose during times of change.',
    tags: ['Lifespan Transitions', 'Resilience']
  }
];

export function Services() {
  return (
    <div className="pb-32 bg-brand-bg">
       {/* Hero */}
       <section className="pt-20 pb-32 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-brand-heading mb-8 leading-tight">
               A Holistic Approach to <br className="hidden md:block" /> <span className="font-light">Mental and Emotional Wellness</span>
            </h1>
            <p className="text-xl text-brand-body leading-relaxed max-w-2xl font-sans">
               I combine evidence-based methods with a collaborative relational style to help you process deep struggles and move toward a more balanced and authentic life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-8 md:px-12 relative">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {SERVICES.map((s, i) => (
                        <motion.div
                          key={s.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="bg-white rounded-[60px] border border-brand-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(64,69,68,0.08)] transition-all duration-500 group relative overflow-hidden flex flex-col"
                        >
                           {/* Card Header Image */}
                           <div className="h-64 relative overflow-hidden">
                              <img 
                                src={s.image} 
                                alt={s.title} 
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
                           </div>

                           <div className="p-10 md:p-14 relative z-10 flex-grow">
                              <div className="flex flex-wrap gap-2 mb-6">
                                  {s.tags.map(tag => (
                                      <span key={tag} className="text-[10px] uppercase tracking-widest bg-brand-sage/40 text-brand-secondary font-bold px-4 py-1.5 rounded-full">
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                              <h3 className="text-3xl md:text-4xl font-serif text-brand-heading mb-6 leading-tight">{s.title}</h3>
                              <p className="text-brand-body leading-relaxed font-sans text-lg">
                                  {s.description}
                              </p>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Modalities */}
      <section className="py-40 px-8 md:px-12 bg-white mt-32 border-y border-brand-border">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif text-brand-heading mb-12 leading-tight">
                    Therapeutic <br /> <span className="font-light">Approaches</span>
                </h2>
                <div className="space-y-12">
                   {[
                     { title: 'DBT Skills', desc: 'Mindfulness, distress tolerance, and emotional regulation skills to help you manage overwhelming emotions and improve relationships.' },
                     { title: 'Internal Family Systems', desc: 'A compassionate and non-pathologizing approach that helps you explore and heal the different "parts" of your internal system, fostering inner clarity and self-leadership.' },
                     { title: 'Brainspotting', desc: 'A neurobiological method that uses your visual field to access and process trauma held in the deeper parts of the brain, allowing for profound emotional and physiological healing.' },
                     { title: 'Somatic Integration', desc: 'A body-based approach that prioritizes the connection between the brain and physical sensations to release stored tension, regulate the nervous system, deepen your awareness of the body\'s wisdom, and facilitate your innate movement toward healing.' }
                   ].map((approach, index) => (
                     <motion.div 
                       key={approach.title}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6, delay: index * 0.15 }}
                       className="relative pl-10 border-l-2 border-brand-sage/40 py-1"
                     >
                        <div className="absolute left-[-5px] top-4 w-2 h-2 rounded-full bg-brand-primary"></div>
                        <h4 className="text-2xl font-serif text-brand-heading mb-3">{approach.title}</h4>
                        <p className="text-brand-body text-lg leading-relaxed font-sans">{approach.desc}</p>
                     </motion.div>
                   ))}
                </div>
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-48 px-8 md:px-12 flex flex-col items-center text-center bg-brand-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(194,165,107,0.08),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(141,155,147,0.1),transparent_50%)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-brand-heading mb-8 leading-tight">
                  Move toward <br /><span className="font-light">Calm and Steady Strength</span>.
              </h2>
              <p className="text-brand-body mb-12 max-w-2xl mx-auto leading-relaxed text-xl md:text-2xl font-serif">
                 Healing is a reclamation of your own peace. If you're ready to explore what's next in a space of safety and understanding, I invite you to reach out.
              </p>
              <div className="flex justify-center">
                    <NavLink
                      to="/contact"
                      className="group bg-brand-sage text-brand-heading px-12 py-5 rounded-full text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-brand-sage/20 flex items-center gap-4"
                    >
                        Schedule Your Free Consultation
                        <Wind className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </NavLink>
              </div>
            </motion.div>
          </div>
      </section>
    </div>
  );
}
