import { Plus, Minus } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

interface FAQItem {
  q: string;
  a: string | React.ReactNode;
}

const FAQS: FAQItem[] = [
  {
    q: 'What is therapy like?',
    a: "Therapy with me is a relational experience. It's a structured space where you are heard, seen, and supported. We'll start by building safety and understanding your history, then move into processing and integration using tools like IFS or Brainspotting."
  },
  {
    q: 'How do I know if we’re a good fit?',
    a: "I'm glad you're curious! This is why I offer a free consultation. It's important for you to find a therapist you connect with, as our relationship is the biggest factor in a successful counseling journey. I recommend that you look for someone who helps you feel comfortable being honest and a space where you feel respected and understood. If our consultation indicates your needs match my style and training, I often suggest a 'test the fit' season—after about four sessions, we'll both know if we've got a good thing going."
  },
  {
    q: 'Do you offer Christian counseling?',
    a: "I respect the role that faith plays in your healing journey. For those who wish to integrate their spirituality, I offer a space where scripture and prayer can be incorporated into our time together. Others find value and comfort simply in working with a Christian therapist while preferring to focus their sessions on clinical, emotional, or relational goals. I follow your lead in how spiritual aspects of your identity are respected in our work."
  },
  {
    q: 'Do you offer online sessions?',
    a: "Yes. I offer both in-person sessions at my Loveland, Colorado office and secure Telehealth sessions for residents of Colorado."
  },
  {
    q: 'How long does therapy take?',
    a: "There is no set timeline. Many people appreciate therapy as a regular way to support their self-care, relational health, and overall well-being. Some people find clarity or relief in a few months, while others find long-term support helpful for deeper trauma work. We will regularly check in on your goals and progress, as life can be challenging and needs change as circumstances shift."
  },
  {
    q: 'Do you work with older adults?',
    a: "Yes, I am deeply committed to supporting adults throughout the entire lifespan. The later stages of life bring unique transitions that deserve a dedicated space for reflection. Whether you are navigating retirement, health changes, or shifting family dynamics, we can work together to process these experiences, honor your legacy, and discover continued meaning in this season of life."
  },
  {
    q: 'What is Brainspotting?',
    a: (
      <div className="space-y-4">
        <p>Brainspotting is a gentle, focused therapy approach that helps people process emotional pain, stress, trauma, and difficult life experiences. It works by identifying specific eye positions, called “brainspots,” that are connected to stored emotions and experiences in the brain and body.</p>
        <p>Sometimes we can talk through a problem and still feel stuck. That’s because certain experiences are held deeper in the nervous system, beyond words alone. Brainspotting helps access those deeper parts of the brain so healing can happen more naturally and fully.</p>
        <p>During a Brainspotting session, we work together to notice what comes up in your body, emotions, and thoughts while finding a brainspot connected to the issue you want to address. You remain in control throughout the process, and sessions move at a pace that feels safe and manageable for you.</p>
        <div>
          <p className="mb-2">People often seek Brainspotting for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Trauma and PTSD</li>
            <li>Anxiety and chronic stress</li>
            <li>Depression</li>
            <li>Grief and loss</li>
            <li>Relationship challenges</li>
            <li>Performance anxiety or creative blocks</li>
            <li>Difficult childhood experiences</li>
            <li>Feeling emotionally “stuck”</li>
          </ul>
        </div>
        <p>Brainspotting can help reduce emotional intensity, increase self-awareness, and create a greater sense of calm, clarity, and connection. Many clients find it especially helpful when traditional talk therapy has not fully resolved what they are experiencing.</p>
        <p>You do not need to have a major trauma history to benefit from Brainspotting. It can support healing from both big life events and the quieter experiences that have shaped how you feel about yourself and the world around you.</p>
      </div>
    )
  },
  {
    q: 'What is IFS therapy?',
    a: (
      <div className="space-y-4">
        <p>Internal Family Systems (IFS) therapy is a compassionate, evidence-based approach that helps people better understand themselves and heal emotional wounds. IFS is based on the idea that we all have different “parts” within us that influence how we think, feel, and respond to life experiences.</p>
        <p>You may notice parts of yourself that feel anxious, critical, overwhelmed, people-pleasing, angry, withdrawn, or protective. These parts are not bad or broken. In IFS, we view them as important pieces of your inner system that developed to help you cope, survive, and protect yourself through difficult experiences.</p>
        <p>IFS helps you build a more compassionate and connected relationship with all parts of yourself. Therapy focuses on creating greater understanding, balance, and healing rather than shame or self-judgment.</p>
        <p>During an IFS session, we gently explore the different parts of you and the roles they play in your life. You are never forced to relive painful experiences before you are ready. Instead, we move at a pace that feels safe and supportive while building greater understanding and internal balance.</p>
        <div>
          <p className="mb-2">IFS can be helpful for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Anxiety and chronic stress</li>
            <li>Depression</li>
            <li>Trauma and PTSD</li>
            <li>Relationship challenges</li>
            <li>Low self-esteem or self-criticism</li>
            <li>Perfectionism and people-pleasing</li>
            <li>Emotional overwhelm</li>
            <li>Grief and loss</li>
            <li>Life transitions and identity exploration</li>
          </ul>
        </div>
        <p>Many people find that IFS helps them develop greater self-compassion and emotional clarity. Rather than fighting against parts of yourself, IFS helps you understand them, heal the wounds beneath them, and create lasting change.</p>
      </div>
    )
  },
  {
    q: 'What is DBT therapy?',
    a: (
      <div className="space-y-4">
        <p>Dialectical Behavior Therapy (DBT) is a practical, skills-based approach designed to help people manage intense emotions, reduce self-destructive behaviors, and improve their relationships.</p>
        <p>The term "dialectical" refers to the balance of two seemingly opposite ideas: acceptance and change. DBT teaches that it is possible to accept yourself exactly as you are while simultaneously working toward meaningful change and a life worth living.</p>
        <div>
          <p className="mb-2">DBT focuses on building strength in four key areas:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Mindfulness:</strong> Learning to be fully present in the moment and observe thoughts and feelings without judgment.</li>
            <li><strong>Distress Tolerance:</strong> Developing strategies to get through difficult moments without making them worse.</li>
            <li><strong>Emotion Regulation:</strong> Understanding, identifying, and effectively managing intense emotions.</li>
            <li><strong>Interpersonal Effectiveness:</strong> Communication skills to express needs, set boundaries, and maintain healthy relationships.</li>
          </ul>
        </div>
        <p>In our work together, we can integrate DBT skills as practical tools for your "emotional toolbox." These skills provide concrete ways to handle life’s challenges when they feel overwhelming, allowing for greater stability and agency in your daily life.</p>
        <p>Many clients find these tools especially helpful when they feel "reactive" to their environment or find themselves stuck in patterns that no longer serve them.</p>
      </div>
    )
  },
  {
    q: 'What are your fees?',
    a: "Please visit the Fees & Insurance page for detailed information on rates, payment options, and potential out-of-network reimbursement or application to your deductible."
  },
  {
    q: 'Do you accept insurance?',
    a: (
      <div className="space-y-4">
        <p>I do not accept insurance directly. This allows me to focus more fully on providing thoughtful, individualized care rather than navigating the administrative demands and limitations often required by insurance companies.</p>
        <p>Working outside of insurance also gives us greater privacy and flexibility in treatment. Together, we can collaborate on your care based on your unique needs and goals, without restrictions on diagnosis, session length, or the number of sessions covered.</p>
        <p>I am a private pay provider and can provide a superbill for you to submit for out-of-network reimbursement. See my Fees page for more details.</p>
        <p><em>Please note: I am unable to accept out of pocket payment from individuals covered by Medicaid.</em></p>
      </div>
    )
  }
];

function FaqItem({ q, a }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-[40px] border border-brand-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between group"
      >
        <span className="font-serif text-xl md:text-2xl text-brand-heading leading-tight pr-8">{q}</span>
        <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-brand-sage/30 group-hover:bg-brand-sage/20 transition-all transform",
            isOpen ? "rotate-180 bg-brand-sage border-brand-sage text-brand-heading" : "text-brand-primary"
        )}>
            <Plus className={cn("w-5 h-5 transition-transform", isOpen && "rotate-45")} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-8 pb-8 text-brand-body leading-relaxed font-sans text-lg border-t border-brand-bg pt-6">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <div className="pb-32 bg-brand-bg">
      <section className="pt-20 pb-20 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-brand-heading mb-8 leading-tight">
              Helpful information, in case you're wondering
            </h1>
            <p className="text-xl text-brand-body leading-relaxed font-sans">
              Find clarity on common questions about the therapeutic process, scheduling, and what to expect in our work together.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-12">
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.q}>
              <FaqItem q={faq.q} a={faq.a} />
            </div>
          ))}
        </div>
      </section>

      <section className="pt-40 px-8 md:px-12 text-center">
          <div className="max-w-2xl mx-auto p-12 bg-white rounded-[60px] border border-brand-border shadow-sm">
            <h2 className="text-3xl font-serif text-brand-heading mb-6">Have more questions?</h2>
            <p className="text-brand-body mb-10 font-sans">I'm happy to discuss any other questions or concerns you have during our initial consultation call.</p>
            <NavLink
                to="/contact"
                className="inline-block bg-brand-sage text-brand-heading px-10 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-brand-sage/20"
            >
                Reach Out Directly
            </NavLink>
          </div>
      </section>
    </div>
  );
}
