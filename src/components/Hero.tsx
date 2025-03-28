
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Ship Your Business</span>
            <br />
            <span className="text-white">In Days, Not Months</span>
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            I build MVPs at warp speed. From landing pages to complex web apps, 
            I turn your vision into reality while you focus on what matters: your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects">
              <Button className="px-8 py-6 bg-gradient-to-r from-neon-purple to-neon-pink text-lg hover:opacity-90 transition-opacity">
                See my work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="ghost" className="px-8 py-6 text-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all">
                Book a free call <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
          </div>
          
          <div className="mt-16 max-w-sm mx-auto glass-card p-4 rounded-lg animate-float">
            <p className="text-white text-sm">
              Average time to market: <span className="text-neon-blue font-bold">7 days</span>
            </p>
            <div className="w-full bg-white/10 h-2 rounded-full mt-2">
              <div className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full w-[70%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
