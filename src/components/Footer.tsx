import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-green-900 text-brand-cream-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 lg:mb-12">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-serif tracking-tight text-white leading-none">Jennifer Depler</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50 mt-1">Counseling</span>
            </div>
            <p className="text-brand-cream-100/60 text-sm leading-relaxed mb-8 font-sans">
              “Nurturing Healing | Cultivating Health | Inspiring Hope”
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-8 text-brand-cream-100/30 font-bold">Practice</h4>
            <div className="flex flex-col gap-4 font-sans text-sm text-brand-cream-100/70">
              <NavLink to="/about" className="hover:text-brand-green-200 transition-colors">About Jennifer</NavLink>
              <NavLink to="/services" className="hover:text-brand-green-200 transition-colors">Therapy Services</NavLink>
              <NavLink to="/faq" className="hover:text-brand-green-200 transition-colors">FAQ</NavLink>
              <NavLink to="/fees" className="hover:text-brand-green-200 transition-colors">Fees</NavLink>
              <NavLink to="/resources" className="hover:text-brand-green-200 transition-colors">Resources</NavLink>
              <NavLink to="/contact" className="hover:text-brand-green-200 transition-colors">Contact</NavLink>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-8 text-brand-cream-100/30 font-bold">Scheduling</h4>
            <p className="text-sm text-brand-cream-100/60 mb-8 leading-relaxed max-w-xs">
              Meeting with clients in person in Loveland and throughout Colorado via online sessions.
            </p>
            <NavLink
              to="/contact"
              className="inline-block bg-brand-green-600 text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-brand-green-700 transition-all shadow-lg"
            >
              Consultation
            </NavLink>
          </div>
        </div>

        <div className="mb-20 pt-12 border-t border-white/5">
          <h4 className="text-[10px] uppercase tracking-[0.2em] mb-8 text-brand-cream-100/30 font-bold">Details</h4>
          <div className="flex flex-col md:flex-row gap-x-16 gap-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
              <span className="text-brand-cream-100/70 leading-relaxed text-xs">
                1401 S Taft Avenue, Unit 206, Loveland, Colorado 80537<br className="hidden md:block" />
                (In-person & Telehealth)
              </span>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
              <span className="text-brand-cream-100/70 text-xs whitespace-nowrap">
                JenniferDeplerCounseling@Proton.Me
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-brand-cream-100/20 tracking-widest uppercase">
          <span>© {new Date().getFullYear()} Jennifer Depler Counseling</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-cream-100 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-cream-100 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
