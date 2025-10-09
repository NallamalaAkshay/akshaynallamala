import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Layers, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "HTML5 & CSS3", "Firebase"]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"]
    },
    {
      title: "Programming & Core Concepts",
      icon: Layers,
      skills: ["Java", "Python", "C", "Object-Oriented Programming (OOPs)", "Data Structures & Algorithms", "API Development", "Version Control (Git/GitHub)"]
    },
    {
      title: "AI & Analytics",
      icon: Brain,
      skills: ["YOLOv5", "Machine Learning", "AI Integration", "Data Analysis", "TensorFlow", "Scikit-learn"]
    },
    {
      title: "DevOps & Tools",
      icon: Server,
      skills: ["Docker", "AWS (EC2, S3, Lambda)", "Jenkins / GitHub Actions (CI/CD)", "Postman", "VS Code", "Figma"]
    }
  ];

  const professionalSkills = [
    "Agile Methodology",
    "UX Principles",
    "Team Collaboration",
    "Problem Solving",
    "Communication",
    "Leadership",
    "Adaptability"
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover-lift"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Professional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {professionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
