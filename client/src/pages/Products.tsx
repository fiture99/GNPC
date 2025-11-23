import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Fuel,
  Droplet,
  Wrench,
  Car,
  Wind,
  Gauge,
} from "lucide-react";

export default function Products() {
  const fuelProducts = [
    {
      icon: Fuel,
      name: "Premium Petrol",
      description: "High-quality unleaded petrol meeting international standards for optimal engine performance and fuel efficiency.",
      specs: ["Octane Rating: 91+", "Unleaded", "Clean combustion", "Engine protection"],
    },
    {
      icon: Gauge,
      name: "Diesel (Gasoil)",
      description: "Premium diesel fuel for commercial vehicles, generators, and heavy machinery with superior lubrication properties.",
      specs: ["Low sulfur content", "High cetane rating", "Reduced emissions", "Extended engine life"],
    },
    {
      icon: Droplet,
      name: "Kerosene",
      description: "Clean-burning kerosene suitable for heating, lighting, and various industrial applications.",
      specs: ["Low smoke emission", "Consistent quality", "Multiple applications", "Safe storage"],
    },
  ];

  const lubricants = [
    {
      icon: Droplet,
      name: "Engine Oils",
      description: "Premium motor oils for all vehicle types, providing superior engine protection and performance.",
      types: ["Synthetic oils", "Semi-synthetic oils", "Mineral oils", "Multi-grade options"],
    },
    {
      icon: Wrench,
      name: "Automotive Lubricants",
      description: "Specialized lubricants for transmission, brake systems, and general automotive maintenance.",
      types: ["Transmission fluid", "Brake fluid", "Coolants", "Grease products"],
    },
  ];

  const services = [
    {
      icon: Car,
      title: "Car Washing & Detailing",
      description: "Professional car wash and detailed cleaning services to keep your vehicle looking pristine.",
      features: ["Exterior washing", "Interior cleaning", "Detailing service", "Quick service"],
    },
    {
      icon: Wrench,
      title: "Auto Spare Parts",
      description: "Quality automotive parts and accessories for vehicle maintenance and repairs.",
      items: ["Tires (all sizes)", "Batteries", "Windscreen wipers", "Foot mats", "Filters"],
    },
    {
      icon: Droplet,
      title: "Lube Draining Bay",
      description: "Professional oil change and lubrication services with proper disposal of used oils.",
      features: ["Quick oil changes", "Filter replacement", "Environmental compliance", "Expert technicians"],
    },
    {
      icon: Wind,
      title: "Tire Inflation",
      description: "Complimentary tire pressure checking and inflation service at all our stations.",
      features: ["Free service", "Pressure checking", "All vehicle types", "Available 24/7"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-products-hero-headline">
              Products & Services
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed" data-testid="text-products-hero-subtext">
              Quality petroleum products and comprehensive automotive services for all your vehicle needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
                Fuel Products
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-fuel-headline">
                Premium Petroleum Fuels
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                High-quality fuels meeting international standards for optimal performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {fuelProducts.map((product, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-fuel-${index}`}>
                  <CardContent className="p-8 space-y-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <product.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{product.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-sm text-foreground">Specifications:</h4>
                      <ul className="space-y-1.5">
                        {product.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
                Lubricants
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-lubricants-headline">
                Automotive Lubricants
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Premium oils and lubricants for superior engine protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {lubricants.map((product, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-lubricant-${index}`}>
                  <CardContent className="p-8 space-y-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <product.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{product.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-sm text-foreground">Available Types:</h4>
                      <ul className="space-y-1.5">
                        {product.types.map((type, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
              Additional Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-services-headline">
              Automotive Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services to keep your vehicle in top condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">
                      {service.features ? "Features:" : "Available Items:"}
                    </h4>
                    <ul className="space-y-1.5">
                      {(service.features || service.items || []).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Visit Our Stations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Find GNPC service stations across The Gambia offering all our products and services
          </p>
          <a href="/stations">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover-elevate active-elevate-2 h-10 px-8" data-testid="button-find-stations">
              Find a Station
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
