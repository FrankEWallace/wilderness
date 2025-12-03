import { Compass, TreePine, Users, Camera } from "lucide-react";

const experiences = [
  {
    icon: Compass,
    title: "Game Drives",
    description: "Expert-led safaris through diverse ecosystems, tracking the Big Five and discovering hidden wildlife treasures.",
  },
  {
    icon: TreePine,
    title: "Walking Safaris",
    description: "Immerse yourself in the wilderness on foot, guided by experienced trackers who share ancient knowledge.",
  },
  {
    icon: Users,
    title: "Cultural Encounters",
    description: "Connect with local communities and learn about traditions that have shaped this land for generations.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capture extraordinary moments with dedicated photography vehicles and expert guidance.",
  },
];

const Experience = () => {
  return (
    <section id="experiences" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm tracking-wide-custom uppercase text-primary mb-4">
            Experiences
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Unforgettable Moments
          </h2>
          <p className="text-lg text-foreground/70 font-light leading-relaxed">
            Every day brings new discoveries. Our expert guides ensure each experience 
            is as profound as it is memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="group p-8 bg-card hover:bg-card/80 border border-border transition-all duration-500 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <experience.icon 
                className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" 
              />
              <h3 className="font-display text-xl text-foreground mb-3">
                {experience.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
