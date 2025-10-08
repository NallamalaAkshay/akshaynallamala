import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase } from "lucide-react";

const Projects = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "XchangeTechs Star Alliance LLP",
      location: "Bangalore, India",
      period: "April 2023 – June 2024",
      description: [
        "Designed and implemented dynamic front-end interfaces using React.js, Next.js, TypeScript, and TailwindCSS.",
        "Built RESTful APIs and microservices using Node.js, Express.js, and FastAPI integrated with PostgreSQL and MongoDB.",
        "Implemented authentication and authorization workflows using JWT and OAuth 2.0.",
        "Deployed applications on AWS (EC2, S3, Lambda) and Dockerized environments with CI/CD pipelines through GitHub Actions and Jenkins.",
        "Optimized backend performance using Prisma ORM and Redis caching, improving response times by 40%.",
        "Participated in Agile sprints, handled version control via Git/GitHub, and maintained production-level code quality.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Redis",
        "TailwindCSS",
        "AWS",
        "Docker",
        "Git",
        "CI/CD",
        "GraphQL",
        "Jest",
      ],
      achievements: [
        "Delivered multiple full-stack web solutions with 95%+ client satisfaction.",
        "Increased system efficiency through backend refactoring and optimized queries.",
        "Mentored junior trainees and improved team workflows.",
      ],
    },
    {
      title: "Software Trainee",
      company: "XchangeTechs Star Alliance LLP",
      location: "Bangalore, India",
      period: "May 2022 – March 2023",
      description: [
        "Completed an intensive full-stack web development training covering modern JavaScript frameworks and backend fundamentals.",
        "Developed internal mini-projects using React.js, Node.js, Express.js, and MySQL for practical learning.",
        "Built responsive interfaces and improved UI/UX using HTML5, CSS3, JavaScript, and Figma prototypes.",
        "Learned REST API integration, JSON data handling, and basic Docker and AWS deployments.",
        "Collaborated in Agile project cycles and gained experience in Git, GitHub, and peer code reviews.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Git",
        "GitHub",
        "Figma",
        "Docker (Basics)",
        "AWS (Basics)",
        "Jest",
      ],
      achievements: [
        "Promoted to Software Engineer within 11 months after completing full-stack training.",
        "Built and presented 3 internal applications demonstrating complete CRUD and API workflows.",
      ],
    },
  ];

  const projects = [
    {
      title: "MovieMint-Project",
      description:
        "Modern streaming platform template with elegant UI/UX design, featuring light/dark theme support and fully responsive layout built with cutting-edge technologies.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      link: "https://github.com/NallamalaAkshay/MovieMint-Project",
    },
    {
      title: "Amazon Clone",
      description:
        "Full-featured e-commerce application with Firebase authentication, real-time cart system, and polished user interface mimicking Amazon's design patterns.",
      technologies: ["React", "Firebase", "CSS"],
      link: "https://github.com/NallamalaAkshay/amazon-clone-akshay",
    },
    {
      title: "Agro-Care Project",
      description:
        "A full-stack machine learning application that provides intelligent crop management insights and recommendations to optimize agricultural practices. The frontend is built with React.js and Tailwind CSS for a modern, responsive UI, while the backend uses Django APIs for real-time ML predictions and data analysis.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Django",
        "Machine Learning",
        "Data Analysis",
      ],
      link: "https://github.com/NallamalaAkshay/Agro-Care-Project-",
    },
    {
      title: "Animal Detection System",
      description:
        "Real-time detection system using YOLO V5 for identifying wild animal intrusions, complete with automated alert mechanisms for safety.",
      technologies: ["YOLO V5", "Python", "Computer Vision"],
      link: "https://github.com/NallamalaAkshay/Animal-Detection-and-Alert-System-using-YOLO-V5",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Experience & Projects</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          {/* Professional Experience - Timeline */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold flex items-center justify-center gap-2">
                <Briefcase className="w-7 h-7 text-primary" />
                Professional Experience
              </h3>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-background z-10">
                      <Briefcase className="w-7 h-7 text-primary-foreground" />
                    </div>
                    
                    {/* Content card - alternating sides on desktop */}
                    <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                      <Card className="p-6 md:p-8 bg-card border-border hover-lift transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <h4 className="text-xl md:text-2xl font-bold text-foreground">{exp.title}</h4>
                              <Badge variant="secondary" className="text-xs md:text-sm whitespace-nowrap">
                                {exp.period}
                              </Badge>
                            </div>
                            <p className="text-primary font-semibold text-lg">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">📍 {exp.location}</p>
                          </div>
                          
                          <ul className="space-y-2 border-l-2 border-primary/30 pl-4">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                                <span className="text-primary mt-1 font-bold">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="pt-2">
                            <p className="text-sm font-semibold mb-3 text-foreground">🛠️ Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-primary/50 hover:bg-primary/10 transition-colors">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pt-2">
                            <p className="text-sm font-semibold mb-3 text-foreground">🏆 Key Achievements:</p>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex gap-2 leading-relaxed">
                                  <span className="text-primary font-bold">✓</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="p-6 bg-card border-border hover-lift transition-transform duration-200 group-hover:scale-[1.02]">
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
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
