
import React from 'react';
import { Code, Rocket, Layout, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Layout size={32} className="text-neon-blue" />,
    title: "Landing Pages",
    description: "Convert more visitors with high-performance landing pages designed to showcase your product and capture leads.",
    timeframe: "2-3 days"
  },
  {
    icon: <Rocket size={32} className="text-neon-purple" />,
    title: "Full MVPs",
    description: "Launch your complete product with core features, user authentication, and essential functionality.",
    timeframe: "7-14 days"
  },
  {
    icon: <LineChart size={32} className="text-neon-pink" />,
    title: "Dashboards",
    description: "Get insights at a glance with custom analytics dashboards that visualize your most important metrics.",
    timeframe: "4-7 days"
  },
  {
    icon: <Code size={32} className="text-neon-blue" />,
    title: "Internal Tools",
    description: "Streamline operations with custom internal tools that automate workflows and increase team efficiency.",
    timeframe: "5-10 days"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Rapid Execution</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            I specialize in building high-quality digital products with lightning-fast turnaround times.
            Here's how I can help you launch quickly:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="mb-4 p-3 rounded-full bg-white/5 w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient">{service.title}</h3>
              <p className="text-white/70 mb-4">{service.description}</p>
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-wider bg-white/10 text-white/60 px-2 py-1 rounded-full">
                  Delivery: {service.timeframe}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
