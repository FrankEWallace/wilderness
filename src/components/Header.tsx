import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    label: "Destinations",
    href: "#destinations",
    subItems: [
      "Botswana",
      "Kenya",
      "Namibia",
      "Rwanda",
      "South Africa",
      "Tanzania",
      "Zambia",
      "Zimbabwe",
    ],
  },
  { label: "Camps", href: "#camps" },
  { label: "Regions", href: "#regions" },
  { label: "Experiences", href: "#experiences" },
  { label: "Journeys", href: "#journeys" },
  { label: "Exclusive Offers", href: "#offers" },
  { label: "Impact", href: "#conservation" },
  { label: "Journal", href: "#journal" },
  { label: "About Wilderness", href: "#about" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>("Destinations");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const activeItem = menuItems.find((item) => item.label === activeMenuItem);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || isMenuOpen
            ? "bg-background/98 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left: Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-foreground/40 flex items-center justify-center transition-colors group-hover:border-primary">
              {isMenuOpen ? (
                <X size={18} className="text-foreground" />
              ) : (
                <Menu size={18} className="text-foreground" />
              )}
            </div>
            <span className="text-sm tracking-wide-custom uppercase text-foreground">
              Menu
            </span>
          </button>

          {/* Center: Logo */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
          >
            <svg
              viewBox="0 0 40 40"
              className="w-8 h-8 text-foreground"
              fill="currentColor"
            >
              <path d="M20 2c1 0 2 8 2 18s-1 18-2 18-2-8-2-18 1-18 2-18zM12 4c.8.4 4 7 6 16s2 16 1 16-4-7-6-16-2-15-1-16zM28 4c-.8.4-4 7-6 16s-2 16-1 16 4-7 6-16 2-15 1-16zM6 8c.6.6 5 6 8 14s4 14 3 14-5-6-8-14-4-13-3-14zM34 8c-.6.6-5 6-8 14s-4 14-3 14 5-6 8-14 4-13 3-14z" />
            </svg>
            <span className="font-display text-xl tracking-wilderness text-foreground">
              WILDERNESS
            </span>
          </a>

          {/* Right: Search & Enquire */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-foreground/80 hover:text-foreground transition-colors">
              <Search size={20} />
            </button>
            <a
              href="#enquire"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-wide-custom uppercase font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </header>

      {/* Full-screen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-500",
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
        style={{ paddingTop: "80px" }}
      >
        <div className="container mx-auto px-6 py-12 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column: Main Menu */}
            <nav className="space-y-0">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.subItems) {
                      e.preventDefault();
                      setActiveMenuItem(item.label);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                  onMouseEnter={() => item.subItems && setActiveMenuItem(item.label)}
                  className={cn(
                    "group flex items-center justify-between py-4 border-b transition-all duration-300",
                    activeMenuItem === item.label
                      ? "border-primary"
                      : "border-foreground/10 hover:border-foreground/30"
                  )}
                >
                  <span
                    className={cn(
                      "text-sm tracking-wide-custom uppercase transition-colors duration-300",
                      activeMenuItem === item.label
                        ? "text-primary"
                        : "text-foreground/70 group-hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                  {item.subItems && (
                    <ChevronRight
                      size={16}
                      className={cn(
                        "transition-all duration-300",
                        activeMenuItem === item.label
                          ? "text-primary translate-x-1"
                          : "text-foreground/40 group-hover:text-foreground/70"
                      )}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Right Column: Sub Menu */}
            <div className="hidden lg:block">
              {activeItem?.subItems && (
                <div className="space-y-0 animate-fade-in">
                  {activeItem.subItems.map((subItem) => (
                    <a
                      key={subItem}
                      href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-4 border-b border-foreground/10 text-sm tracking-wide-custom uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
                    >
                      {subItem}
                    </a>
                  ))}
                  <div className="pt-8">
                    <a
                      href="#destinations"
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary text-sm tracking-wide-custom uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Explore Destinations
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
