import { motion, useScroll, useSpring } from 'motion/react';
import { LayoutGroup } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';
import { useEffect, ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-cream-50 selection:bg-brand-green-100 selection:text-brand-green-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-green-600 z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow pt-20 md:pt-28">
        <LayoutGroup>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </LayoutGroup>
      </main>
      <Footer />

      {/* Floating Action Button */}
      <motion.a
        href="/contact"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 bg-white text-black px-7 py-4 rounded-full shadow-2xl flex items-center gap-3 backdrop-blur-md border border-brand-green-100 group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-600 animate-pulse" />
        <span className="font-sans text-xs capitalize tracking-wider font-bold text-black text-nowrap">Request a free phone call</span>
      </motion.a>
    </div>
  );
}
