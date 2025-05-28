import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does tabl work?",
    answer: "Simply describe what you want to create in plain English, and tabl's AI generates a complete 3D CAD model with smart parameters. You can then tweak features, adjust dimensions, and iterate on your design in real-time without starting from scratch."
  },
  {
    question: "What file formats does tabl support?",
    answer: "tabl exports production-ready STEP and STL files that are compatible with all major CAD software and 3D printers. This ensures seamless integration with your existing workflow and manufacturing processes."
  },
  {
    question: "Do I need CAD experience to use tabl?",
    answer: "While tabl dramatically simplifies the CAD process, it's designed for engineers and designers who understand the fundamentals of mechanical design. Our AI handles the complex modeling while you focus on the creative and functional aspects of your design."
  },
  {
    question: "How is tabl different from traditional CAD software?",
    answer: "Traditional CAD requires manual creation of every feature, dimension, and constraint. tabl uses AI to generate complete, parameterized models from simple descriptions, cutting design time from hours or days down to seconds while maintaining full editability."
  },
  {
    question: "What kind of designs can I create with tabl?",
    answer: "tabl excels at creating mechanical parts, enclosures, housings, brackets, and other engineering components. Whether you're prototyping a PCB housing, designing a custom bracket, or creating complex mechanical assemblies, tabl can help accelerate your workflow."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-10 bg-black relative overflow-hidden scroll-mt-80">
      {/* Gradient spots moved away from edges */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary/25 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-1/6 w-56 h-56 bg-primary/25 rounded-full blur-2xl animate-float-throb" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/2 right-1/5 w-64 h-64 bg-primary-500/15 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to know about tabl and how it revolutionizes the CAD design process.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-gray-800 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-gray-800/50 text-base md:text-lg font-semibold">
                  <span className="text-left">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-6 text-gray-300 text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
