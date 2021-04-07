export interface PricingPlan {
  name: string;
  price: string;
  interval: string;
  tagline: string;
  description: string;

};

const Plans: PricingPlan[] =[
  {
    name: 'FREE',
    price: '0.00',
    interval: null,
    description: 'Basic Plan',
    tagline: 'Try out limited services for free!'
  },
  {
    name: 'Monthly',
    price: '9.99',
    interval: 'month',
    description: 'Gold Member',
    tagline: 'Access to MWD and its services for a low monthly price'
  },
  {
    name: 'Annual',
    price: '99.99',
    interval: 'year',
    description: 'Platinum Member',
    tagline: 'Best value! Access to all MWD services and customer support for our annual members'
  }
]

export default Plans
