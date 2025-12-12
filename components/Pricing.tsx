import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border ${
                plan.recommended 
                  ? 'border-indigo-500 bg-slate-900 shadow-2xl shadow-indigo-500/10 scale-105 z-10' 
                  : 'border-slate-800 bg-slate-900/50'
              } p-8 shadow-sm transition-all hover:border-indigo-500/50`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="ml-1 text-xl text-slate-400">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-indigo-400" />
                    </div>
                    <p className="ml-3 text-base text-slate-300">{feature}</p>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.recommended
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;