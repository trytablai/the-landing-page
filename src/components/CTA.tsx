import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';

const CTA = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: name,
            email: email
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation (duplicate email)
          toast({
            title: "Already on the waitlist!",
            description: `${email} is already signed up for our waitlist.`,
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success!",
          description: `Thanks ${name}! You've been added to our waitlist.`,
        });
        setName('');
        setEmail('');
      }
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 bg-black relative overflow-hidden scroll-mt-80" id="waitlist">
      {/* Enhanced gradient spots for this section - moved away from edges */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/6 left-1/2 w-30 h-30 bg-primary/30 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/25 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-2xl animate-float-throb" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-56 h-56 bg-primary-500/12 rounded-full blur-3xl animate-float-throb" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r rounded-2xl overflow-hidden shadow-xl">
          <div className="p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our <span className="text-primary">Waitlist</span>
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of engineers getting early access to the fastest way to design with AI.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="bg-white/10 text-white border-white/20 placeholder:text-white/60"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/10 text-white border-white/20 placeholder:text-white/60"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-secondary text-white rounded-full px-8 py-6 text-base hover:animate-throb hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

<style>{`
  @keyframes throb {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .hover:animate-throb:hover {
    animation: throb 1s ease-in-out infinite;
  }
`}</style>
