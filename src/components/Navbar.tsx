
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "backdrop-blur-lg bg-dark/90 py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-gradient">DevX</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
          <a href="#contact">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity">
              Book a Call
            </Button>
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-dark/95 backdrop-blur-lg">
          <div className="flex flex-col items-center py-5 space-y-4">
            <a 
              href="#services" 
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#projects" 
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity">
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
