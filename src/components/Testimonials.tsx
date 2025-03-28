
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, HealthTrack",
    quote: "Working with DevX was a game-changer for our startup. He built our entire MVP in just 10 days, allowing us to secure funding much faster than expected.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, InvestorMatch",
    quote: "I was impressed by the speed and quality of work. Our platform was delivered ahead of schedule with all the features we requested and then some.",
    rating: 5
  },
  {
    name: "Alicia Rodriguez",
    role: "Marketing Director, EcoShop",
    quote: "Our conversion rates tripled after launching the new landing page. The attention to detail and focus on user experience really paid off.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Product Manager, TaskFlow",
    quote: "The internal tools built for our team have saved us countless hours of manual work. The ROI was immediate and substantial.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Client Success Stories</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} fill="#00f3ff" color="#00f3ff" size={18} />
                ))}
              </div>
              <blockquote className="text-lg mb-6 text-white/90 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
