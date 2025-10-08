import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase } from "lucide-react";

const Projects = () => {
  const experience = {
    company: "XchangeTechs Star Alliance LLP",
    location: "Bangalore, India",
    totalPeriod: "May 2022 – June 2024",
    roles: [
      {
        title: "Software Engineer",
        period: "Apr 2023 – Jun 2024",
        description: [
          "Designed and implemented responsive front-end interfaces using React.js, Next.js, TypeScript, and TailwindCSS.",
          "Built RESTful APIs and microservices using Node.js, Express.js, and FastAPI integrated with PostgreSQL and MongoDB.",
          "Deployed production-ready applications on AWS (EC2, S3, Lambda) and Docker environments with CI/CD pipelines using GitHub Actions and Jenkins.",
          "Implemented authentication and authorization with JWT and OAuth 2.0.",
          "Optimized backend performance using Prisma ORM, Redis caching, and query optimization.",
          "Collaborated in Agile sprints, performed code reviews, and wrote test cases using Jest and Mocha.",
        ],
        achievements: [
          "Delivered multiple full-stack projects with 95%+ client satisfaction.",
          "Improved system performance by ~38% through backend service refactoring, query optimization, and caching implementation.",
          "Guided a small group of 3–4 trainees on front-end best practices, Git workflows, and API integration techniques.",
        ],
      },
      {
        title: "Software Trainee",
        period: "May 2022 – Mar 2023",
        description: [
          "Completed a comprehensive full-stack web development training program covering both front-end and back-end technologies.",
          "Developed internal demo projects using React.js, Node.js, Express.js, and MySQL demonstrating end-to-end CRUD operations.",
          "Designed responsive layouts using HTML5, CSS3, JavaScript, and TailwindCSS.",
          "Learned and practiced REST API development, asynchronous programming, and version control using Git/GitHub.",
          "Collaborated with UI/UX designers in Figma and assisted with backend feature integration.",
        ],
        achievements: [
          "Recognized for exceptional performance during training and transitioned into a full-time Software Engineer role contributing to key client projects.",
          "Built and presented 3 internal demo applications showcasing complete CRUD and API workflows.",
        ],
      },
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
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
      "Git/GitHub",
      "CI/CD",
      "GraphQL",
      "Jest",
      "Mocha",
      "HTML5",
      "CSS3",
      "JavaScript",
      "MySQL",
      "Figma",
      "OAuth 2.0",
      "JWT",
    ],
  };

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

          {/* Professional Experience - Single Company Card */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold flex items-center justify-center gap-2">
                <Briefcase className="w-7 h-7 text-primary" />
                Professional Experience
              </h3>
            </div>
            
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Card className="p-6 md:p-8 bg-card border-border hover-lift transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="space-y-6">
                  {/* Company Header */}
                  <div className="space-y-2 pb-4 border-b border-border">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h4 className="text-2xl md:text-3xl font-bold text-foreground">{experience.company}</h4>
                      <Badge variant="secondary" className="text-xs md:text-sm whitespace-nowrap">
                        {experience.totalPeriod}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">📍 {experience.location}</p>
                  </div>
                  
                  {/* Roles */}
                  <div className="space-y-8">
                    {experience.roles.map((role, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h5 className="text-xl font-bold text-primary">{role.title}</h5>
                          <span className="text-sm text-muted-foreground font-medium">{role.period}</span>
                        </div>
                        
                        <ul className="space-y-2 border-l-2 border-primary/30 pl-4">
                          {role.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                              <span className="text-primary mt-1 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div>
                          <p className="text-sm font-semibold mb-2 text-foreground">🏆 Key Achievements:</p>
                          <ul className="space-y-2">
                            {role.achievements.map((achievement, i) => (
                              <li key={i} className="text-muted-foreground text-sm flex gap-2 leading-relaxed">
                                <span className="text-primary font-bold">✓</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {index < experience.roles.length - 1 && (
                          <div className="pt-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold mb-3 text-foreground">🛠️ Technologies & Tools:</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/50 hover:bg-primary/10 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
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
