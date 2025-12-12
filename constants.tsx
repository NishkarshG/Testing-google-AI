import React from 'react';
import { PricingTier, PricingPlan, Testimonial } from './types';
import { Zap, Shield, Globe, Cpu, Palette, BarChart } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Performance', href: '#stats' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

export const FEATURES = [
  {
    title: 'Generative Fill',
    description: 'Extend images or remove objects intelligently with a single click using our advanced diffusion models.',
    icon: <Palette className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: 'Real-time Collaboration',
    description: 'Work with your team in real-time. Changes sync instantly across all devices with conflict resolution.',
    icon: <Globe className="w-6 h-6 text-purple-400" />,
  },
  {
    title: 'Smart Analytics',
    description: 'Track engagement and design performance with built-in analytics dashboards powered by AI.',
    icon: <BarChart className="w-6 h-6 text-pink-400" />,
  },
  {
    title: 'Lightning Fast',
    description: 'Built on a new engine that renders 10x faster than traditional design tools.',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption for your assets. SSO, audit logs, and role-based access control included.',
    icon: <Shield className="w-6 h-6 text-green-400" />,
  },
  {
    title: 'API Access',
    description: 'Automate your design workflows with our robust API. Integrate Lumina directly into your stack.',
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: PricingTier.FREE,
    price: '$0',
    features: ['3 Projects', 'Basic AI Tools', 'Community Support', '1GB Storage'],
  },
  {
    name: PricingTier.PRO,
    price: '$29',
    recommended: true,
    features: ['Unlimited Projects', 'Advanced Generative AI', 'Priority Support', '100GB Storage', 'Team Collaboration'],
  },
  {
    name: PricingTier.ENTERPRISE,
    price: 'Custom',
    features: ['Unlimited Everything', 'Custom Models', 'Dedicated Success Manager', 'SSO & Audit Logs', 'SLA Guarantee'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Product Designer",
    company: "TechFlow",
    content: "Lumina has completely revolutionized our design workflow. The AI features are not just gimmicks; they actually save us hours every day.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Marcus Chen",
    role: "Marketing Director",
    company: "GrowthX",
    content: "The ability to generate assets on the fly for our campaigns is a game changer. High quality, fast, and incredibly intuitive.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Elena Rodriguez",
    role: "Freelance Artist",
    company: "Self-Employed",
    content: "Finally, a tool that understands creative intent. It feels less like software and more like a collaborative partner.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

export const CHART_DATA = [
  { name: 'Photoshop', speed: 40, efficiency: 50 },
  { name: 'Figma', speed: 70, efficiency: 80 },
  { name: 'Lumina', speed: 98, efficiency: 95 },
];