import React from 'react';

export enum PricingTier {
  FREE = 'Free',
  PRO = 'Pro',
  ENTERPRISE = 'Enterprise'
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  name: PricingTier;
  price: string;
  features: string[];
  recommended?: boolean;
}