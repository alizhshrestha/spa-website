export interface Service {
    id: string;
    name: string;
    description: string;
    benefits: string[];
    duration: number;
    price: number;
    category: 'massage' | 'facial' | 'body' | 'specialty';
    featured: boolean;
    image: string;
    popular?: boolean;
  }
  
  export const services: Service[] = [
    {
      id: 'hot-stone-massage',
      name: 'Hot Stone Massage',
      description: 'A deeply relaxing massage using smooth, heated stones to melt away tension and improve circulation. The warmth of the stones penetrates deep into muscles for ultimate relaxation.',
      benefits: [
        'Relieves chronic muscle tension',
        'Improves blood circulation',
        'Reduces stress and anxiety',
        'Promotes deeper relaxation'
      ],
      duration: 90,
      price: 120,
      category: 'massage',
      featured: true,
      popular: true,
      image: '/images/hot-stone.jpg'
    },
    {
      id: 'deep-tissue',
      name: 'Deep Tissue Massage',
      description: 'A therapeutic massage focusing on the deeper layers of muscle and connective tissue. Ideal for chronic aches and pains or rehabilitation from injuries.',
      benefits: [
        'Breaks down scar tissue',
        'Relieves muscle tension',
        'Improves range of motion',
        'Helps with chronic pain'
      ],
      duration: 60,
      price: 85,
      category: 'massage',
      featured: true,
      image: '/images/deep-tissue.jpg'
    },
    {
      id: 'signature-facial',
      name: 'Signature Rejuvenating Facial',
      description: 'Our most popular facial treatment combining cleansing, exfoliation, extraction, hydration, and massage with premium skincare products tailored to your skin type.',
      benefits: [
        'Deeply cleanses pores',
        'Improves skin texture',
        'Boosts collagen production',
        'Hydrates and nourishes skin'
      ],
      duration: 75,
      price: 95,
      category: 'facial',
      featured: true,
      popular: true,
      image: '/images/signature-facial.jpg'
    },
    {
      id: 'detox-body-wrap',
      name: 'Detoxifying Body Wrap',
      description: 'A full-body treatment that combines exfoliation with a mineral-rich mask to detoxify, hydrate, and firm the skin while promoting relaxation.',
      benefits: [
        'Draws out toxins',
        'Improves skin elasticity',
        'Reduces appearance of cellulite',
        'Promotes lymphatic drainage'
      ],
      duration: 60,
      price: 110,
      category: 'body',
      featured: true,
      image: '/images/body-wrap.jpg'
    },
    {
      id: 'couples-massage',
      name: 'Couples Massage',
      description: 'Enjoy side-by-side massages in our private couples suite. Choose from Swedish, Deep Tissue, or Hot Stone techniques for a shared relaxing experience.',
      benefits: [
        'Shared relaxation experience',
        'Customizable pressure and style',
        'Private treatment room',
        'Promotes bonding and connection'
      ],
      duration: 60,
      price: 180,
      category: 'specialty',
      featured: true,
      image: '/images/couples-massage.jpg'
    },
    {
      id: 'aromatherapy',
      name: 'Aromatherapy Massage',
      description: 'A Swedish massage enhanced with essential oils selected for your specific needs (relaxation, energy, immune support, etc.). Combines physical and emotional benefits.',
      benefits: [
        'Enhances mood and emotional well-being',
        'Customizable oil blends',
        'Reduces stress and fatigue',
        'Boosts immune function'
      ],
      duration: 50,
      price: 75,
      category: 'massage',
      featured: true,
      image: '/images/aromatherapy.jpg'
    }
  ];
  
  // Helper array for featured services
  export const featuredServices = services.filter(service => service.featured);