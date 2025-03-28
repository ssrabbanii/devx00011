
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 rounded-2xl border border-white/10 animate-glow">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Ready to Build Your MVP?</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              I'm currently available for new projects and looking to work with innovative businesses. 
              Book a free 30-minute consultation to discuss your project.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <a 
              href="https://calendly.com/xcanetechnologies/devx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-neon-blue to-neon-purple text-lg group">
                <span className="mr-2">Schedule a Call</span>
                <Calendar className="inline-block group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/50">
              <p>
                Email me at{" "}
                <a href="mailto:xcanetechnologies@gmail.com" className="text-neon-blue hover:underline">
                  xcanetechnologies@gmail.com
                </a>
              </p>
              
              <span className="hidden sm:inline">•</span>
              
              <p>
                <a 
                  href="https://wa.me/85264728031" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-neon-blue hover:underline"
                >
                  <Phone size={14} className="mr-1" />
                  WhatsApp: +852 6472 8031
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
