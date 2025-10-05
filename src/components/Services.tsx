import { Card } from "@/components/ui/card";
import { Code, Palette, Database, Brain, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development with modern frontend frameworks and robust backend systems."
    },
    {
      icon: Palette,
      title: "Frontend Engineering (UI/UX)",
      description: "Clean, responsive, and accessible design implementations that deliver exceptional user experiences."
    },
    {
      icon: Database,
      title: "Database Design & Integration",
      description: "Scalable database solutions using MySQL and PostgreSQL with optimized query performance."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Implementing ML and AI-powered features to bring intelligent capabilities to real-world applications."
    },
    {
      icon: Users,
      title: "Agile Team Collaboration",
      description: "Experienced in working with cross-functional teams using agile methodologies for efficient project delivery."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Services</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover-lift group"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
