import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase } from "lucide-react";

const Projects = () => {
  const experience = {
    title: "Web Development Intern",
    company: "CodeBind Technologies, Chennai",
    period: "Oct 2021 – Nov 2021",
    description: "Built a comprehensive e-commerce website using HTML, CSS, PHP, and MySQL, implementing user authentication, product management, and shopping cart functionality.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"]
  };

  const projects = [
    {
      title: "MovieMint-Project",
      description: "Modern streaming platform template with elegant UI/UX design, featuring light/dark theme support and fully responsive layout built with cutting-edge technologies.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      link: "https://github.com/NallamalaAkshay/MovieMint-Project"
    },
    {
      title: "Amazon Clone",
      description: "Full-featured e-commerce application with Firebase authentication, real-time cart system, and polished user interface mimicking Amazon's design patterns.",
      technologies: ["React", "Firebase", "CSS"],
      link: "https://github.com/NallamalaAkshay/amazon-clone-akshay"
    },
    {
      title: "Agro-Care Project",
      description:
      "A full-stack machine learning application that provides intelligent crop management insights and recommendations to optimize agricultural practices. The frontend is built with React.js and Tailwind CSS for a modern, responsive UI, while the backend uses Django APIs for real-time ML predictions and data analysis.",
      technologies: ["React.js", "Tailwind CSS", "Django", "Machine Learning", "Data Analysis"],
      link: "https://github.com/NallamalaAkshay/Agro-Care-Project-"

    },
    {
      title: "Animal Detection System",
      description: "Real-time detection system using YOLO V5 for identifying wild animal intrusions, complete with automated alert mechanisms for safety.",
      technologies: ["YOLO V5", "Python", "Computer Vision"],
      link: "https://github.com/NallamalaAkshay/Animal-Detection-and-Alert-System-using-YOLO-V5"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Experience & Projects</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
            </h3>
            <Card className="p-8 bg-card border-border hover-lift">
              <div className="space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold">{experience.title}</h4>
                    <p className="text-primary font-medium">{experience.company}</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {experience.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover-lift group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
