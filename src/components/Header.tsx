import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubItem {
  name: string;
  location?: string;
}

interface MenuCategory {
  title: string;
  items: SubItem[];
}

interface MenuItem {
  label: string;
  href: string;
  subItems?: string[];
  categories?: MenuCategory[];
  ctaLabel?: string;
  ctaHref?: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Destinations",
    href: "#destinations",
    subItems: ["Botswana", "Kenya", "Namibia", "Rwanda", "South Africa", "Tanzania", "Zambia", "Zimbabwe"],
    ctaLabel: "Explore Destinations",
    ctaHref: "#destinations",
  },
  {
    label: "Camps",
    href: "#camps",
    categories: [
      {
        title: "Popular Camps",
        items: [
          { name: "Wilderness Bisate Lodge", location: "Volcanoes, Rwanda" },
          { name: "Wilderness Mombo", location: "Okavango Delta, Botswana" },
          { name: "Magashi Peninsula", location: "Akagera, Rwanda" },
          { name: "Usawa Serengeti", location: "Serengeti, Tanzania" },
          { name: "Little Kulala", location: "Sossusvlei, Namibia" },
          { name: "DumaTau Camp", location: "Linyanti, Botswana" },
          { name: "Linkwasha", location: "Hwange, Zimbabwe" },
        ],
      },
    ],
    ctaLabel: "Explore Camps",
    ctaHref: "#camps",
  },
  {
    label: "Regions",
    href: "#regions",
    categories: [
      {
        title: "Botswana",
        items: [{ name: "Linyanti" }, { name: "Mababe" }, { name: "Okavango Delta" }],
      },
      {
        title: "Kenya",
        items: [{ name: "Masai Mara" }],
      },
      {
        title: "Namibia",
        items: [{ name: "Damaraland" }, { name: "Kunene" }, { name: "Sossusvlei" }],
      },
      {
        title: "Rwanda",
        items: [{ name: "Akagera" }, { name: "Volcanoes" }],
      },
      {
        title: "South Africa",
        items: [{ name: "Cape Peninsula" }, { name: "Culture & food" }, { name: "The Cape Winelands" }],
      },
      {
        title: "Tanzania",
        items: [{ name: "Serengeti" }],
      },
      {
        title: "Zambia",
        items: [{ name: "Kafue" }, { name: "Mosi-oa-Tunya" }],
      },
      {
        title: "Zimbabwe",
        items: [{ name: "Hwange" }, { name: "Mana Pools" }],
      },
    ],
  },
  {
    label: "Experiences",
    href: "#experiences",
    categories: [
      {
        title: "Safari",
        items: [
          { name: "Gorilla Trekking" },
          { name: "Game Drives" },
          { name: "Guided Quad Biking" },
          { name: "Rhino Tracking" },
          { name: "Helicopter Safari" },
          { name: "Star Beds" },
          { name: "Night Game Drives" },
          { name: "Boat Safari" },
        ],
      },
      {
        title: "Wellness",
        items: [{ name: "Guided Walking Safaris" }, { name: "Nature Walks" }, { name: "Desert E-biking" }],
      },
      {
        title: "Culture & Impact",
        items: [{ name: "Local Culture" }, { name: "Conservation Experience" }],
      },
    ],
    ctaLabel: "See All Experiences",
    ctaHref: "#experiences",
  },
  {
    label: "Journeys",
    href: "#journeys",
    categories: [
      {
        title: "Journey Inspiration",
        items: [
          { name: "Tailor-made Journeys" },
          { name: "Family Journeys" },
          { name: "Group Journeys" },
          { name: "Solo Journeys" },
          { name: "Couples Journeys" },
          { name: "Journey planning" },
          { name: "Our Services" },
        ],
      },
    ],
    ctaLabel: "See Inspirational Journeys",
    ctaHref: "#journeys",
  },
  { label: "Exclusive Offers", href: "#offers" },
  {
    label: "Impact",
    href: "#impact",
    categories: [
      {
        title: "Stories of Change",
        items: [{ name: "Stories of Change" }],
      },
      {
        title: "Impact Pillars",
        items: [{ name: "Educate" }, { name: "Empower" }, { name: "Protect" }],
      },
    ],
    ctaLabel: "Wilderness Impact",
    ctaHref: "#impact",
  },
  { label: "Journal", href: "#journal" },
  {
    label: "About Wilderness",
    href: "#about",
    categories: [
      {
        title: "About Wilderness",
        items: [
          { name: "Our awards" },
          { name: "Our story" },
          { name: "Our partnerships" },
          { name: "The Wilderness Family" },
          { name: "Press room" },
        ],
      },
    ],
    ctaLabel: "About Wilderness",
    ctaHref: "#about",
  },
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
  const hasSubMenu = activeItem?.subItems || activeItem?.categories;

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
              {menuItems.map((item) => {
                const itemHasSubmenu = item.subItems || item.categories;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (itemHasSubmenu) {
                        e.preventDefault();
                        setActiveMenuItem(item.label);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                    onMouseEnter={() => itemHasSubmenu && setActiveMenuItem(item.label)}
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
                    {itemHasSubmenu && (
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
                );
              })}
            </nav>

            {/* Right Column: Sub Menu */}
            <div className="hidden lg:block">
              {hasSubMenu && (
                <div className="animate-fade-in">
                  {/* Simple subItems (Destinations) */}
                  {activeItem?.subItems && (
                    <div className="space-y-0">
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
                    </div>
                  )}

                  {/* Categories layout */}
                  {activeItem?.categories && (
                    <div className={cn(
                      "grid gap-12",
                      activeItem.categories.length === 1 ? "grid-cols-1" :
                      activeItem.categories.length === 2 ? "grid-cols-2" :
                      activeItem.categories.length <= 4 ? "grid-cols-2" : "grid-cols-2"
                    )}>
                      {activeItem.categories.map((category) => (
                        <div key={category.title}>
                          <h4 className="text-xs tracking-widest uppercase text-foreground/50 mb-4">
                            {category.title}
                          </h4>
                          <div className="space-y-0">
                            {category.items.map((item) => (
                              <a
                                key={item.name}
                                href={`#${item.name.toLowerCase().replace(/ /g, "-")}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-3 text-foreground/80 hover:text-foreground transition-colors duration-300"
                              >
                                <span className="block">{item.name}</span>
                                {item.location && (
                                  <span className="block text-xs text-foreground/50 mt-0.5">
                                    {item.location}
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  {activeItem?.ctaLabel && (
                    <div className="pt-8">
                      <a
                        href={activeItem.ctaHref}
                        onClick={() => setIsMenuOpen(false)}
                        className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary text-sm tracking-wide-custom uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {activeItem.ctaLabel}
                        <ChevronRight size={16} />
                      </a>
                    </div>
                  )}
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
