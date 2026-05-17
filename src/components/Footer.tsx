import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-card text-brand-body pt-24 pb-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 lg:mb-12">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-serif tracking-tight text-brand-heading leading-none">Jennifer Depler</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-secondary mt-1">Counseling</span>
            </div>
            <p className="text-brand-body/60 text-sm leading-relaxed mb-8 font-sans">
              Nurturing Healing | Cultivating Health | Inspiring Hope
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-8 text-brand-secondary font-bold">Practice</h4>
            <div className="flex flex-col gap-4 font-sans text-sm text-brand-body/80">
              <NavLink to="/about" className="hover:text-brand-primary transition-colors">About Jennifer</NavLink>
              <NavLink to="/services" className="hover:text-brand-primary transition-colors">Therapy Services</NavLink>
              <NavLink to="/faq" className="hover:text-brand-primary transition-colors">FAQ</NavLink>
              <NavLink to="/fees" className="hover:text-brand-primary transition-colors">Fees</NavLink>
              <NavLink to="/resources" className="hover:text-brand-primary transition-colors">Resources</NavLink>
              <NavLink to="/contact" className="hover:text-brand-primary transition-colors">Contact</NavLink>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] mb-8 text-brand-secondary font-bold">Scheduling</h4>
            <p className="text-sm text-brand-body/60 mb-8 leading-relaxed max-w-xs">
              Meeting with clients in person in Loveland and throughout Colorado via online sessions.
            </p>
            <NavLink
              to="/contact"
              className="inline-block bg-brand-sage text-brand-heading px-8 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-brand-sage/10 font-sans"
            >
              Consultation
            </NavLink>
          </div>
        </div>

        <div className="mb-20 pt-12 border-t border-brand-border">
          <h4 className="text-[10px] uppercase tracking-[0.2em] mb-8 text-brand-secondary font-bold">Details</h4>
          <div className="flex flex-col md:flex-row gap-x-16 gap-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span className="text-brand-body/70 leading-relaxed text-xs">
                1401 S Taft Avenue, Unit 206, Loveland, Colorado 80537<br className="hidden md:block" />
                (In-person & Telehealth)
              </span>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span className="text-brand-body/70 text-xs whitespace-nowrap">
                JenniferDeplerCounseling@Proton.Me
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-brand-secondary tracking-widest uppercase font-medium">
          <span>© {new Date().getFullYear()} Jennifer Depler Counseling</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-heading transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-heading transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
