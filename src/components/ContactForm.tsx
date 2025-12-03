import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Received",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    setFormData({ name: "", email: "", destination: "", message: "" });
  };

  return (
    <section id="enquire" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-wide-custom uppercase text-primary mb-4">
              Start Your Journey
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Plan Your Safari
            </h2>
            <p className="text-lg text-foreground/70 font-light">
              Let us craft your perfect wilderness experience.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-foreground/70 mb-2 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/70 mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-foreground/70 mb-2 uppercase tracking-wide">
                Preferred Destination
              </label>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select a destination</option>
                <option value="botswana">Botswana - Okavango Delta</option>
                <option value="zimbabwe">Zimbabwe - Hwange</option>
                <option value="namibia">Namibia - Skeleton Coast</option>
                <option value="rwanda">Rwanda - Volcanoes</option>
                <option value="kenya">Kenya - Masai Mara</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-foreground/70 mb-2 uppercase tracking-wide">
                Your Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your dream safari..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-sm tracking-wide-custom uppercase hover:bg-primary/90 transition-all duration-300"
              >
                Send Enquiry
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
