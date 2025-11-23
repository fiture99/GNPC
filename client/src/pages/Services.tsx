import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Handshake,
  FileText,
  GraduationCap,
  Lightbulb,
  Globe,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Exploration & Production",
      description: "We conduct comprehensive seismic surveys and systematic exploration programs to identify and develop hydrocarbon resources across The Gambia. Our exploration activities are guided by international best practices and advanced geological assessment techniques.",
      features: [
        "Seismic data acquisition and analysis",
        "Geological and geophysical surveys",
        "Drilling operations management",
        "Reservoir characterization and assessment",
      ],
    },
    {
      icon: Handshake,
      title: "Partnership Management",
      description: "GNPC actively collaborates with international oil companies, investors, and operators to maximize value creation. We facilitate joint ventures and production sharing agreements that benefit all stakeholders while ensuring The Gambia's interests are protected.",
      features: [
        "Joint venture facilitation",
        "Production sharing agreements",
        "Technical partnership coordination",
        "Investment relationship management",
      ],
    },
    {
      icon: FileText,
      title: "Licensing & Regulation",
      description: "We manage the allocation and administration of petroleum licenses, ensuring compliance with national regulations and international standards. Our licensing framework promotes transparency, fairness, and optimal development of petroleum resources.",
      features: [
        "License allocation and management",
        "Regulatory compliance monitoring",
        "Contract administration",
        "Environmental compliance oversight",
      ],
    },
    {
      icon: GraduationCap,
      title: "Capacity Building",
      description: "Developing Gambian expertise is central to our mission. We implement comprehensive training programs, facilitate knowledge transfer, and create opportunities for nationals to gain technical and operational competencies in the petroleum sector.",
      features: [
        "Technical skills training programs",
        "International scholarship opportunities",
        "On-the-job training initiatives",
        "Local content development",
      ],
    },
    {
      icon: Lightbulb,
      title: "Research & Development",
      description: "GNPC engages in cutting-edge research programs to enhance petroleum exploration techniques, improve operational efficiency, and support sustainable energy development. We collaborate with research institutions and industry experts.",
      features: [
        "Geological research programs",
        "Technology innovation initiatives",
        "Industry best practices adoption",
        "Sustainability research",
      ],
    },
    {
      icon: Globe,
      title: "Regional Collaboration",
      description: "We strengthen ties with regional petroleum organizations, neighboring countries, and international bodies. This collaboration enhances our capabilities, promotes knowledge sharing, and positions The Gambia favorably in the regional energy landscape.",
      features: [
        "MSGBC basin cooperation",
        "Regional petroleum forum participation",
        "Cross-border partnership development",
        "International standards alignment",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-services-hero-headline">
              Our Services
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed" data-testid="text-services-hero-subtext">
              Comprehensive solutions driving The Gambia's petroleum sector development and energy independence
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardContent className="p-8 md:p-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Activities:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
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

      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Interested in Our Services?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Contact us to learn more about how GNPC can support your petroleum sector initiatives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/contact">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover-elevate active-elevate-2 h-10 px-8" data-testid="button-contact-us">
                Contact Us
              </button>
            </a>
            <a href="/exploration">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover-elevate active-elevate-2 h-10 px-8" data-testid="button-explore-opportunities">
                Explore Opportunities
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
