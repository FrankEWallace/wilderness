import heroImage from "@/assets/hero-savanna.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="African savanna at sunset with acacia trees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p 
          className="text-sm tracking-wilderness uppercase text-foreground/80 mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to
        </p>
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wilderness text-foreground mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          WILDERNESS
        </h1>
        <p 
          className="max-w-2xl text-lg md:text-xl text-foreground/80 font-light leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Journey through some of the world's most iconic wild destinations.
          Experience unparalleled luxury in the heart of untamed Africa.
        </p>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-8 h-14 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>

        {/* Coordinates */}
        <div 
          className="absolute bottom-12 right-8 hidden md:block opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-xs tracking-wide text-foreground/50 font-mono">
            19.2228° S, 22.7779° E
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
