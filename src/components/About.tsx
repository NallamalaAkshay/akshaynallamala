import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground animate-fade-in">
            <p>
              I'm a passionate full-stack developer driven by curiosity and creativity. I thrive on solving 
              end-to-end problems, from crafting intuitive user interfaces to building robust backend systems. 
              My approach combines technical excellence with a deep understanding of user needs.
            </p>
            <p>
              With expertise spanning modern web technologies and AI integration, I specialize in creating 
              seamless, intelligent applications that make a real impact. Whether it's building responsive 
              frontends with React or implementing machine learning models, I'm committed to turning complex 
              challenges into elegant solutions.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">M.S. in Information Science</h4>
                    <p className="text-sm text-muted-foreground">
                      AI & Data Analytics
                    </p>
                    <p className="text-sm font-medium text-primary">
                      University at Albany, SUNY
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Expected 2026 | CGPA: 3.3/4.0
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">B.E. Computer Science & Engineering</h4>
                    <p className="text-sm font-medium text-primary">
                      Dr. N.G.P Institute of Technology
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2023 | CGPA: 7.9/10
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
