import { NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Fees', href: '/fees' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-brand-bg/90 backdrop-blur-md border-b border-brand-border py-5 shadow-sm'
          : 'bg-transparent py-10'
      )}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
        <NavLink to="/" className="flex flex-col group">
          <span className="text-4xl md:text-5xl font-serif tracking-tight text-brand-heading leading-none">Jennifer Depler</span>
          <span className="text-sm md:text-base uppercase tracking-[0.2em] font-medium opacity-70 mt-1">Counseling</span>
        </NavLink>
 
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'font-sans text-sm font-medium transition-colors hover:text-brand-primary hover:border-brand-sage pb-1 border-b-2 transition-all',
                  isActive ? 'text-brand-primary border-brand-primary' : 'text-brand-body/70 border-transparent'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="px-6 py-2.5 bg-brand-primary text-brand-btn-text rounded-full text-xs font-medium shadow-sm hover:opacity-90 transition-all"
          >
            Schedule Consultation
          </NavLink>
        </div>
 
        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-heading"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
 
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-b border-brand-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'font-sans text-lg tracking-wide',
                      isActive ? 'text-brand-primary font-medium' : 'text-brand-body/70'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-brand-primary text-brand-btn-text text-center py-4 rounded-xl font-sans text-sm uppercase tracking-widest font-medium"
              >
                Schedule Free Consultation
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
