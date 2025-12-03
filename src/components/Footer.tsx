import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wilderness-dark py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl tracking-wilderness text-foreground mb-4">
              WILDERNESS
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              Pioneering positive change through conservation tourism since 1983.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wide-custom text-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Destinations", "Experiences", "Our Camps", "Conservation", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm uppercase tracking-wide-custom text-foreground mb-4">
              Destinations
            </h4>
            <ul className="space-y-3">
              {["Botswana", "Namibia", "Zimbabwe", "Rwanda", "Kenya", "South Africa"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wide-custom text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-1" />
                <span className="text-sm text-foreground/60">enquiries@wilderness.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-1" />
                <span className="text-sm text-foreground/60">+27 11 257 5000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-sm text-foreground/60">Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40">
            © 2024 Wilderness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
