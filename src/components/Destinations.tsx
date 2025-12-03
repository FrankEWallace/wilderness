import DestinationCard from "./DestinationCard";
import lionImage from "@/assets/destination-lion.jpg";
import elephantImage from "@/assets/destination-elephant.jpg";
import lodgeImage from "@/assets/destination-lodge.jpg";

const destinations = [
  {
    image: lionImage,
    title: "Botswana",
    location: "Okavango Delta",
    description: "Explore the pristine waterways and encounter Africa's most magnificent wildlife in their natural habitat.",
  },
  {
    image: elephantImage,
    title: "Zimbabwe",
    location: "Hwange National Park",
    description: "Witness vast elephant herds and experience the raw beauty of one of Africa's largest national parks.",
  },
  {
    image: lodgeImage,
    title: "Namibia",
    location: "Skeleton Coast",
    description: "Discover dramatic desert landscapes and exclusive camps under the most spectacular night skies.",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-wide-custom uppercase text-primary mb-4">
            Our Destinations
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Iconic Wild Places
          </h2>
          <p className="text-lg text-foreground/70 font-light leading-relaxed">
            From the waterways of the Okavango to the dunes of Namibia, discover extraordinary 
            wilderness areas that remain unchanged for millennia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
