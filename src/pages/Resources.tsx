import { Book, Podcast } from 'lucide-react';
import { motion } from 'motion/react';

const RESOURCES = [
  {
    category: 'Recommended Books',
    icon: Book,
      items: [
        { title: 'No Bad Parts', desc: 'Richard Schwartz — An introduction to Internal Family Systems (IFS) therapy.' },
        { title: 'The Body Keeps the Score', desc: 'Bessel van der Kolk — A seminal work on how trauma affects the body and brain.' },
        { title: 'Boundaries For Your Soul', desc: 'Alison Cook — How to navigate your emotions through the lens of IFS.' },
        { title: 'The Choice', desc: 'Edith Eva Eger — A powerful memoir on hope and healing from profound trauma.' },
        { title: 'Being Mortal', desc: 'Atul Gawande — Reflections on medicine and what matters most at the end of life.' },
        { title: 'Altogether You', desc: 'Jenna Riemersma — A compassionate guide to IFS and spiritual integration.' },
        { title: 'The Road Back to You', desc: 'Ian Cron — An accessible and practical introduction to the Enneagram.' },
        { title: 'The Betrayal Bind', desc: 'Michelle Mays — Navigating the complex landscape of betrayal trauma and recovery.' },
      ]
  },
  {
    category: 'Podcasts & Media',
    icon: Podcast,
    items: [
      { title: 'The Best of You', desc: 'Alison Cook — Exploring the intersection of faith, psychology, and personal growth.' },
      { title: 'The Happiness Lab', desc: 'Laurie Santos — Scientific insights into what actually makes us happy.' },
      { title: 'The Place We Find Ourselves', desc: 'Adam Young — Exploring how our stories shape our relationship with God and others.' },
      { title: 'Therapy and Theology', desc: 'Proverbs 31 Ministries — Navigating difficult life issues through both therapeutic and theological lenses.' },
      { title: 'Typology', desc: 'Ian Morgan Cron — Using the Enneagram to explore the human personality and path to health.' },
    ]
  }
];

export function Resources() {
  return (
    <div className="pb-32 bg-brand-cream-50">
       <section className="pt-20 pb-32 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-brand-green-900 mb-8 leading-tight">
               Tools for <span className="italic font-light text-brand-green-600">Self-Discovery.</span>
            </h1>
            <p className="text-xl text-brand-text-muted leading-relaxed font-sans">
               A curated collection of tools, education, and inspiration to support your journey between our sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-8 md:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {RESOURCES.map((group, i) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 md:p-14 rounded-[60px] bg-white border border-brand-cream-200 flex flex-col gap-10 shadow-sm hover:shadow-xl transition-all group"
                  >
                      <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-brand-green-50 flex items-center justify-center shrink-0 group-hover:bg-brand-green-100 transition-colors">
                               <group.icon className="w-5 h-5 text-brand-green-600" />
                          </div>
                          <h3 className="text-2xl font-serif text-brand-green-900">{group.category}</h3>
                      </div>
                      <div className="flex flex-col gap-8">
                          {group.items.map((item, idx) => (
                              <div key={idx} className="group cursor-default border-l-2 border-transparent hover:border-brand-green-600 pl-4 transition-all duration-300">
                                  <h4 className="text-lg font-serif text-brand-green-900 mb-1 group-hover:text-brand-green-600 transition-colors leading-tight">{item.title}</h4>
                                  <p className="text-[10px] text-brand-text-muted uppercase tracking-[0.2em] font-sans font-bold opacity-60">{item.desc}</p>
                              </div>
                          ))}
                      </div>
                  </motion.div>
              ))}
          </div>
      </section>
    </div>
  );
}
