import { Tag, ShieldCheck, AlertCircle, Info, ArrowRight, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Fees() {
  const [showGFE, setShowGFE] = useState(false);
  const [showNSA, setShowNSA] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);

  return (
    <div className="pb-32 bg-brand-bg">
       <section className="pt-20 pb-32 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-brand-heading mb-8 leading-tight">
              Investing in Healing, Growth, and the Relationships That Matter Most
            </h1>
            <p className="text-xl text-brand-body leading-relaxed font-sans mb-4">
               Counseling is a significant investment of your time, energy, and resources. I believe in transparent billing and helping you understand exactly what to expect from our financial arrangement.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-12 md:p-16 rounded-[60px] border border-brand-border shadow-sm"
              >
                  <Tag className="w-10 h-10 text-brand-primary mb-8" />
                  <h3 className="text-3xl md:text-4xl font-serif text-brand-heading mb-10">Private Pay Rates</h3>
                  <div className="space-y-10">
                      <div className="flex justify-between items-center pb-8 border-b border-brand-bg">
                          <div>
                              <h4 className="text-2xl font-serif text-brand-heading mb-1">Individual Session</h4>
                              <p className="text-xs text-brand-body uppercase tracking-widest font-sans font-bold opacity-60">50 Minutes</p>
                          </div>
                          <span className="text-3xl font-serif text-brand-primary">$120</span>
                      </div>
                      <div className="flex justify-between items-center pb-8 border-b border-brand-bg">
                          <div>
                              <h4 className="text-2xl font-serif text-brand-heading mb-1">Consultation</h4>
                              <p className="text-xs text-brand-body uppercase tracking-widest font-sans font-bold opacity-60">20-Minute Initial Fit Call</p>
                          </div>
                          <span className="text-3xl font-serif text-brand-primary">Free</span>
                      </div>
                  </div>
                  <div className="mt-12 p-10 bg-brand-sage/20 rounded-[40px] border border-brand-border flex items-start gap-6">
                      <ShieldCheck className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                      <p className="text-base text-brand-heading leading-relaxed font-serif">
                        I reserve a limited number of sliding scale spots for those experiencing financial hardship. Please inquire if you would like to apply.
                      </p>
                  </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                  <div className="p-12 md:p-16 rounded-[60px] bg-brand-card border border-brand-border shadow-sm">
                      <h3 className="text-3xl font-serif text-brand-heading mb-8 flex items-center gap-4">
                         <Info className="w-8 h-8 text-brand-primary" />
                         Insurance
                      </h3>
                      <p className="text-brand-body leading-relaxed mb-10 font-sans text-lg">
                         I am an out-of-network provider. This means you pay for sessions at the time of service, and I provide a monthly superbill that you can submit to your insurance company for potential reimbursement or application to your out-of-network deductible.
                      </p>
                      <div className="bg-brand-sage/10 p-8 rounded-[32px] border border-brand-sage/20 space-y-4">
                          <p className="text-xs text-brand-secondary font-sans uppercase tracking-widest font-bold">
                             Tip: Please check with your provider about Out-of-Network Behavioral Health benefits.
                          </p>
                          <p className="text-xs text-brand-secondary font-sans uppercase tracking-widest font-bold border-t border-brand-sage/20 pt-4">
                             Note: Many HSA, HRA, and FSA plans consider counseling a covered medical expense. You may be able to use your health account funds for payment.
                          </p>
                      </div>
                  </div>

                  <div className="p-12 rounded-[40px] bg-brand-card border border-brand-border shadow-sm">
                      <h3 className="text-2xl font-serif text-brand-heading mb-6 flex items-center gap-4">
                         <AlertCircle className="w-6 h-6 text-brand-primary" />
                         Cancellation
                      </h3>
                      <p className="text-brand-body leading-relaxed font-sans text-lg">
                         I require 24-hour notice for cancellations or rescheduling. Sessions cancelled with less than 24 hours notice will be charged the full session fee.
                      </p>
                  </div>

                  <button 
                    onClick={() => setShowGFE(!showGFE)}
                    className="w-full text-left p-10 rounded-[40px] bg-brand-sage/20 border border-brand-border group hover:bg-brand-sage/30 transition-colors cursor-pointer"
                  >
                      <h3 className="text-xl font-serif text-brand-heading mb-4 flex items-center justify-between">
                        <span>Good Faith Estimate</span>
                        <div className="w-8 h-8 rounded-full border border-brand-sage flex items-center justify-center group-hover:border-brand-primary transition-colors">
                          {showGFE ? (
                            <Minus className="w-4 h-4 text-brand-primary" />
                          ) : (
                            <Plus className="w-4 h-4 text-brand-heading group-hover:text-brand-primary" />
                          )}
                        </div>
                      </h3>
                      <p className="text-sm text-brand-body leading-relaxed font-sans mb-4">
                         Under the No Surprises Act, you have the right to receive a Good Faith Estimate explaining how much your care will cost.
                      </p>
                      
                      <AnimatePresence>
                        {showGFE && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-brand-bg space-y-4 text-sm text-brand-body font-sans">
                              <p>
                                You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.
                              </p>
                              <p>
                                Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service.
                              </p>
                              <p>
                                If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.
                              </p>
                              <p>
                                For questions or more information about your right to a Good Faith Estimate, visit www.cms.gov/nosurprises or call 1-800-985-3059.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                  </button>

                  <button 
                    onClick={() => setShowNSA(!showNSA)}
                    className="w-full text-left p-10 rounded-[40px] bg-brand-sage/20 border border-brand-border group hover:bg-brand-sage/30 transition-colors cursor-pointer"
                  >
                      <h3 className="text-xl font-serif text-brand-heading mb-4 flex items-center justify-between">
                        <span>Out-of-Network Billing</span>
                        <div className="w-8 h-8 rounded-full border border-brand-sage flex items-center justify-center group-hover:border-brand-primary transition-colors">
                          {showNSA ? (
                            <Minus className="w-4 h-4 text-brand-primary" />
                          ) : (
                            <Plus className="w-4 h-4 text-brand-heading group-hover:text-brand-primary" />
                          )}
                        </div>
                      </h3>
                      <p className="text-sm text-brand-body leading-relaxed font-sans mb-4">
                         I operate as a private pay practice to ensure transparent, predictable billing without surprise costs.
                      </p>
                      
                      <AnimatePresence>
                        {showNSA && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-brand-bg space-y-4 text-sm text-brand-body font-sans">
                              <p>
                                I do not accept insurance and am considered an out-of-network provider for all clients. This model allows for maximum privacy and clinical autonomy in our work together.
                              </p>
                              <p>
                                Because I do not contract with insurance carriers, you will never receive a surprise bill or a balance bill through my practice. By receiving treatment, you have consented to the specific fee per service you schedule.
                              </p>
                              <p>
                                The No Surprises Act protects patients from unexpected bills in emergency settings. Since I operate as a private pay practice, you will always be informed of your costs before service.
                              </p>
                              <p>
                                For more information on your rights under the No Surprises Act, visit www.cms.gov/nosurprises.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                  </button>

                  <button 
                    onClick={() => setShowEmergency(!showEmergency)}
                    className="w-full text-left p-10 rounded-[40px] bg-brand-sage/20 border border-brand-border group hover:bg-brand-sage/30 transition-colors cursor-pointer"
                  >
                      <h3 className="text-xl font-serif text-brand-heading mb-4 flex items-center justify-between">
                        <span>Emergency Services Notice</span>
                        <div className="w-8 h-8 rounded-full border border-brand-sage flex items-center justify-center group-hover:border-brand-primary transition-colors">
                          {showEmergency ? (
                            <Minus className="w-4 h-4 text-brand-primary" />
                          ) : (
                            <Plus className="w-4 h-4 text-brand-heading group-hover:text-brand-primary" />
                          )}
                        </div>
                      </h3>
                      <p className="text-sm text-brand-body leading-relaxed font-sans mb-4">
                         Jennifer Depler Counseling provides scheduled outpatient services and is not an emergency provider.
                      </p>
                      
                      <AnimatePresence>
                        {showEmergency && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-brand-bg space-y-4 text-sm text-brand-body font-sans">
                              <p>
                                I am not an emergency services provider. My practice is designed for ongoing, scheduled therapeutic work and does not have the capacity to manage acute crises or provide 24/7 emergency psychotherapy support.
                              </p>
                              <p>
                                If you are experiencing a life-threatening emergency or a severe mental health crisis, please do not wait for a return call. 
                              </p>
                              <div className="bg-brand-secondary/10 p-6 rounded-3xl border border-brand-border">
                                <p className="font-bold text-brand-heading mb-2">Immediate Resources:</p>
                                <p className="text-red-600 font-bold mb-3 text-xs uppercase tracking-wider">Warning: Do NOT rely on an AI system for help in an emergency.</p>
                                <ul className="list-disc list-inside space-y-1">
                                  <li>Call or text <span className="font-bold">988</span> (Suicide & Crisis Lifeline)</li>
                                  <li>Call <span className="font-bold">911</span></li>
                                  <li>Go to the nearest hospital emergency room</li>
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                  </button>
              </motion.div>
          </div>
      </section>
    </div>
  );
}
