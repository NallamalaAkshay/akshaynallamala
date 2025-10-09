import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.avif";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Dark Background with Warm Pink/Red Accents */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Warm Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-warm-glow"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full blur-3xl bg-neon-pink/20 animate-glow-pulse"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full blur-3xl bg-neon-red/15 animate-float" style={{ animationDelay: "1.5s" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT COLUMN - Profile Photo */}
            <div className="flex flex-col items-center lg:items-start space-y-8 animate-fade-in">
              {/* Profile Photo with Neon Glow Border */}
              <div className="relative group">
                {/* Outer Neon Glow */}
                <div className="absolute -inset-4 bg-gradient-photo-border rounded-full blur-2xl opacity-60 group-hover:opacity-80 animate-glow-pulse transition-opacity duration-500"></div>
                
                {/* Photo Container */}
                <div className="relative">
                  <div className="p-1 rounded-full bg-gradient-photo-border shadow-photo">
                    <div className="p-2 rounded-full bg-background/80 backdrop-blur-sm">
                      <img 
                        src={profilePhoto} 
                        alt="Akshay Nallamala - Full-Stack Developer"
                        className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-neon-cyan" />
                <span className="text-base font-medium">Albany, NY</span>
              </div>

              {/* Social Icons - Clean Outlined Style */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/NallamalaAkshay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border-2 border-muted text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/akshaynallamala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border-2 border-muted text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:akshaynallamala03@gmail.com"
                  className="p-3 rounded-xl border-2 border-muted text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - Content */}
            <div className="flex flex-col space-y-8 text-center lg:text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
              
              {/* Available Badge - Bright and Prominent */}
              <div className="inline-flex items-center gap-2 self-center lg:self-start">
                <Badge className="bg-neon-green hover:bg-neon-green/90 text-white px-5 py-2.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Available for Opportunities
                </Badge>
              </div>

              {/* Name - Bold White */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                  Akshay Nallamala
                </h1>
                
                {/* Title - Bright Blue + Light Gray */}
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="text-neon-cyan">Software Engineer</span>
                  </h2>
                  <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                    Full-Stack, AI & Data Analytics Enthusiast
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-xl">
                Building <span className="text-neon-cyan font-semibold">scalable</span>, <span className="text-neon-blue font-semibold">intelligent</span>, and <span className="text-neon-pink font-semibold">user-focused</span> digital solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                {/* Primary Button - Bright Cyan with Glow */}
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-neon-cyan hover:bg-neon-cyan/90 text-background shadow-glow-cyan group relative overflow-hidden h-14 px-10 text-lg font-bold rounded-full transition-all hover:scale-105 hover:shadow-glow-cyan"
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
                
                {/* Secondary Button - Dark with Subtle Border */}
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="bg-card/50 border-2 border-muted hover:border-neon-cyan/50 hover:bg-card text-foreground h-14 px-10 text-lg font-semibold rounded-full backdrop-blur-sm transition-all hover:scale-105"
                >
                  Get in Touch
                </Button>
              </div>

              {/* Education Info */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center lg:justify-start pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"></div>
                  <span>M.S. in Information Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <span>University at Albany, SUNY</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan/40 rounded-full mx-auto relative backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-neon-cyan rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
