
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    description: "For individuals and small projects",
    price: "0",
    features: [
      "Up to 1,000 records",
      "Basic analytics",
      "1 user",
      "Community support",
      "1 GB storage"
    ],
    isPopular: false
  },
  {
    name: "Pro",
    description: "For growing businesses",
    price: "49",
    features: [
      "Up to 100,000 records",
      "Advanced analytics",
      "5 users",
      "Priority support",
      "10 GB storage",
      "API access"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    description: "For organizations with complex needs",
    price: "Custom",
    features: [
      "Unlimited records",
      "AI-powered insights",
      "Unlimited users",
      "24/7 dedicated support",
      "Unlimited storage",
      "Custom integrations",
      "SSO & advanced security"
    ],
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-card rounded-xl shadow-md overflow-hidden ${
                plan.isPopular ? 'border border-primary' : 'border border-gray-800'
              } scale-hover`}
            >
              {plan.isPopular && (
                <div className="bg-primary text-white py-2 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full rounded-full ${plan.isPopular ? 'bg-primary hover:bg-secondary' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
