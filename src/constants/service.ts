export interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  options: {
    duration: number; // in minutes
    price: number; // price for this option
  }[];
  category: string;
  featured: boolean;
  popular?: boolean;
  image: string;
}


export const services: Service[] = [
  {
    id: 'prenatal-therapy',
    name: 'Prenatal Therapy',
    description: 'A specialized massage designed to alleviate physical discomfort and reduce stress for expectant mothers. Helps improve circulation, relieve muscle tension, and promote overall well-being for both mother and baby.',
    benefits: [
      'Reduces stress and anxiety',
      'Eases muscle and joint pain',
      'Improves circulation',
      'Promotes better sleep and relaxation'
    ],
    options: [
      { duration: 60, price: 275 }
    ],
    category: 'specialty',
    featured: true,
    image: '/images/services/prenatal-therapy.jpg'
  },
  {
    id: 'deep-tissue-massage',
    name: 'Deep Tissue Massage',
    description: 'A targeted massage using deep pressure to release chronic muscle tension and break up scar tissue. Ideal for treating strains, sports injuries, and postural imbalances.',
    benefits: [
      'Breaks down scar tissue',
      'Relieves deep muscle tension',
      'Enhances flexibility and range of motion',
      'Promotes muscle recovery'
    ],
    options: [
      { duration: 60, price: 285 },
      { duration: 90, price: 375 }
    ],
    category: 'massage',
    featured: true,
    image: '/images/services/deep-tissue.jpg'
  },
  {
    id: 'lymphatic-drainage',
    name: 'Lymphatic Drainage Massage',
    description: 'A gentle, rhythmic massage technique that stimulates the lymphatic system, aiding in detoxification, reducing fluid retention, and boosting immune function.',
    benefits: [
      'Stimulates lymph flow and detoxification',
      'Reduces swelling and water retention',
      'Strengthens immune system',
      'Promotes relaxation and well-being'
    ],
    options: [
      { duration: 60, price: 275 },
      { duration: 90, price: 375 }
    ],
    category: 'massage',
    featured: true,
    image: '/images/services/lymphatic-drainage.jpg'
  },
  {
    id: 'swedish-massage',
    name: 'Swedish Massage',
    description: 'A classic full-body massage designed to promote relaxation, ease muscle tension, and improve circulation using long, gliding strokes.',
    benefits: [
      'Reduces stress and promotes relaxation',
      'Relieves muscle tension',
      'Improves blood circulation',
      'Boosts overall wellness'
    ],
    options: [
      { duration: 60, price: 275 },
      { duration: 90, price: 375 }
    ],
    category: 'massage',
    featured: true,
    image: '/images/services/swedish-massage.jpg'
  },
  {
    id: 'four-hands-holistic',
    name: 'Four Hands Holistic Massage',
    description: 'An indulgent massage performed by two synchronized therapists using perfectly coordinated movements to double the relaxation and stress relief.',
    benefits: [
      'Deepens relaxation experience',
      'Balances both sides of the body',
      'Eases muscle tension and inflammation',
      'Enhances sensory awareness and harmony'
    ],
    options: [
      { duration: 60, price: 499 },
      { duration: 90, price: 739 }
    ],
    category: 'specialty',
    featured: true,
    image: '/images/services/four-hands-holistic.jpg'
  },
  {
    id: 'foot-reflexology',
    name: 'Foot Reflexology',
    description: 'A therapeutic massage applying precise pressure to reflex points on the feet to stimulate organ function and promote overall health.',
    benefits: [
      'Stimulates organ function through reflex points',
      'Improves circulation',
      'Relieves foot pain and fatigue',
      'Enhances relaxation and body balance'
    ],
    options: [
      { duration: 75, price: 270 }
    ],
    category: 'massage',
    featured: true,
    image: '/images/services/foot-reflexology.jpg'
  },
  {
    id: 'cellulite-treatment',
    name: 'Cellulite Treatment',
    description: 'A specialized massage targeting problem areas to reduce cellulite, improve circulation, and eliminate water retention for smoother skin.',
    benefits: [
      'Reduces cellulite appearance',
      'Eliminates water retention',
      'Improves blood circulation',
      'Detoxifies and firms the skin'
    ],
    options: [
      { duration: 60, price: 285 },
      { duration: 90, price: 375 }
    ],
    category: 'body',
    featured: true,
    image: '/images/services/cellulite-treatment.jpg'
  },
  {
    id: 'sports-massage',
    name: 'Sports Massage',
    description: 'A performance-focused massage to enhance circulation, improve flexibility, and relieve muscle tension. Ideal for athletes and active individuals.',
    benefits: [
      'Enhances circulation',
      'Improves muscle flexibility',
      'Reduces muscle tension and soreness',
      'Helps prevent injuries'
    ],
    options: [
      { duration: 60, price: 285 },
      { duration: 90, price: 369 }
    ],
    category: 'massage',
    featured: true,
    image: '/images/services/sports-massage.jpg'
  }
];
