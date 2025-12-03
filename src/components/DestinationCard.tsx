import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
  index: number;
}

const DestinationCard = ({ image, title, location, description, index }: DestinationCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden cursor-pointer opacity-0 animate-fade-up"
      )}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="text-xs tracking-wide-custom uppercase text-primary mb-2">
          {location}
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
          {title}
        </h3>
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all duration-300">
          <span className="text-sm tracking-wide-custom uppercase">Explore</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
