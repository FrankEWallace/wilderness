import { Award, Leaf, Heart } from "lucide-react";
import elephantImage from "@/assets/destination-elephant.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={elephantImage}
                alt="Elephants at sunset"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden md:block">
              <p className="font-display text-4xl text-primary-foreground">40+</p>
              <p className="text-sm text-primary-foreground/80 uppercase tracking-wide">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-wide-custom uppercase text-primary mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Pioneering Conservation Tourism
            </h2>
            <p className="text-lg text-foreground/70 font-light leading-relaxed mb-8">
              For over four decades, we have been at the forefront of sustainable luxury travel. 
              Our commitment to conservation and community empowerment has set the standard 
              for responsible tourism across Africa.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Award-Winning Excellence</h4>
                  <p className="text-sm text-foreground/60">Recognized globally for our commitment to hospitality and conservation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Sustainable Practices</h4>
                  <p className="text-sm text-foreground/60">Carbon-neutral operations with minimal environmental footprint.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Community Impact</h4>
                  <p className="text-sm text-foreground/60">Supporting local communities through education and employment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
