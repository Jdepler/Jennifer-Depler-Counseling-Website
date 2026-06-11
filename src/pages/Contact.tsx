import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <div className="pb-32 bg-brand-bg min-h-screen">
      <section className="pt-20 pb-32 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-brand-heading mb-8 leading-tight">
              Let's Take the <br /><span className="font-light">Next Step Together.</span>
            </h1>
            <p className="text-xl text-brand-body leading-relaxed max-w-2xl font-sans">
              Whether you have a specific question about my approach or you're ready to schedule your free consultation, I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      <section className="px-8 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="bg-white p-12 md:p-16 rounded-[80px] border border-brand-border shadow-sm flex flex-col items-center justify-center text-center gap-8">
            <Mail className="w-16 h-16 text-brand-primary opacity-20" />
            <h3 className="text-3xl font-serif text-brand-heading">Ready to Take the Next Step?</h3>
            <p className="text-brand-body font-sans text-lg leading-relaxed max-w-md">
              Reaching out for support is one of the most courageous things you can do. There is no pressure, no commitment, and no wrong way to start.
            </p>
            <p className="text-brand-body font-sans text-lg leading-relaxed max-w-md">
              Simply send me an email at your own pace. I personally read every message and will respond within 1-2 business days.
            </p>
            <div className="w-full border-t border-brand-border pt-8 flex flex-col gap-3">
              <p className="text-brand-body font-sans text-sm leading-relaxed max-w-md italic">
                For your privacy and security, I use a HIPAA-compliant email so your message stays confidential from the very first word.
              </p>
              <p className="text-xl font-serif text-brand-heading">JenniferDeplerCounseling@proton.me</p>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-brand-secondary/80 font-sans">
              If you are experiencing a mental health emergency, please call 988 or go to your nearest emergency room.
            </p>
          </div>
          <div className="space-y-14">
            <div className="bg-brand-card p-12 md:p-16 rounded-[80px] shadow-sm border border-brand-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sage/10 rounded-full -m-16 group-hover:scale-150 transition-transform duration-700 border border-brand-sage/20" />
              <h3 className="text-4xl font-serif mb-12 flex items-center gap-4 text-brand-heading">
                <MapPin className="w-8 h-8 text-brand-primary" />
                Practice Details
              </h3>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-sage/10 border border-brand-sage/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-secondary mb-2">Office Location</h4>
                    <p className="text-xl font-serif text-brand-heading">1401 S Taft Avenue, Unit 206, Loveland, Colorado 80537</p>
                    <p className="text-sm text-brand-body mt-2">Proudly serving Loveland, Fort Collins, Berthoud, Longmont, and Northern Colorado.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-sage/10 border border-brand-sage/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-secondary mb-2">Direct Email</h4>
                    <p className="text-xl font-serif text-brand-heading">JenniferDeplerCounseling@Proton.Me</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-brand-sage/10 border border-brand-sage/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand-secondary mb-2">Phone Number</h4>
                    <p className="text-xl font-serif text-brand-heading">303-709-7170</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 md:p-16 rounded-[80px] border border-brand-border bg-brand-sage shadow-sm relative overflow-hidden group">
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full -z-10 group-hover:scale-150 transition-transform duration-700" />
              <MessageCircle className="w-12 h-12 text-brand-heading mb-8 opacity-20 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-3xl font-serif text-brand-heading mb-6 leading-tight">A Reassuring Thought</h4>
              <p className="text-brand-heading text-xl leading-relaxed font-serif">
                If you've read this far, a part of you is longing for support and healing. If you choose to reach out, be assured that my intention is to make this first step as gentle and safe as possible for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
