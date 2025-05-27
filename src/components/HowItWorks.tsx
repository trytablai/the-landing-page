
import { Circle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description: "Easily connect to your existing data sources with our simple integration tools. We support databases, APIs, files, and more."
  },
  {
    number: "02",
    title: "Configure Processing",
    description: "Set up automated data processing workflows with our intuitive visual editor. No coding required."
  },
  {
    number: "03",
    title: "Analyze & Visualize",
    description: "Use our powerful analytics tools to explore your data and create stunning visualizations."
  },
  {
    number: "04",
    title: "Share & Collaborate",
    description: "Share insights with your team and collaborate in real-time to make data-driven decisions."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our streamlined process makes data management simple and efficient.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-12 items-start md:items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
              </div>
              
              <div className="md:ml-8 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 max-w-2xl">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex md:ml-8 items-center justify-center">
                  <ArrowRight className="text-gray-400 w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
