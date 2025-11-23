import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Award,
  TrendingUp,
  Target,
  Lightbulb,
  Shield,
  Star,
} from "lucide-react";

export default function Home() {
  const statistics = [
    { label: "Established", value: "2003", icon: Building2 },
    { label: "Service Stations", value: "7+", icon: Building2 },
    { label: "State Ownership", value: "100%", icon: Shield },
    { label: "Years of Experience", value: "20+", icon: Award },
  ];

  const services = [
    {
      icon: Target,
      title: "Exploration & Production",
      description: "Conducting seismic surveys and exploring for hydrocarbon resources across The Gambia.",
    },
    {
      icon: Users,
      title: "Partnership Management",
      description: "Collaborating with international operators and investors to drive growth.",
    },
    {
      icon: Lightbulb,
      title: "Capacity Building",
      description: "Developing Gambian expertise through comprehensive training programs.",
    },
  ];

  const values = [
    { icon: Target, text: "Strategic Exploration" },
    { icon: Users, text: "Capacity Building" },
    { icon: Shield, text: "Good Governance" },
    { icon: Star, text: "Excellence" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge
              variant="secondary"
              className="bg-accent text-accent-foreground px-6 py-2 text-sm font-semibold"
              data-testid="badge-company-tagline"
            >
              The Gambia's National Oil Company
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-headline">
              Powering The Gambia's Energy Future
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-subtext">
              Driving economic growth through sustainable energy solutions and strategic petroleum development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/exploration">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
                  data-testid="button-explore-opportunities"
                >
                  Explore Opportunities
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 px-8 backdrop-blur-sm"
                  data-testid="button-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-stat-${index}`}>
                <CardContent className="p-6 text-center space-y-3">
                  <stat.icon className="w-8 h-8 mx-auto text-primary" />
                  <div className="text-3xl md:text-4xl font-bold text-primary" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-about-headline">
                Building The Gambia's Petroleum Industry
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Gambia National Petroleum Corporation (GNPC) was established in 2003 as the national oil company of The Gambia. Following statutory enactment in 2014, GNPC began its retail and distribution activities in 2010, representing the business arm of the Gambia Government within the downstream petroleum sector.
                </p>
                <p>
                  We currently operate 7 petroleum stations strategically located in Banjul, Brikama Town, Bijilo, Farafenni in the North Bank, Basse Santa Su in the Upper River Region, and Soma. Our commitment extends beyond fuel distribution to comprehensive automotive services and products.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3" data-testid={`value-${index}`}>
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{value.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="lg:col-span-2 border-primary/20" data-testid="card-vision-mission">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary">Our Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To be the leading petroleum company in The Gambia delivering quality services in an efficient, reliable and professional manner with a highly competent and dedicated team.
                  </p>
                </div>
                <div className="h-px bg-border" />
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To accelerate exploration efforts with partners to achieve new oil and gas discoveries, supporting The Gambia's goal of greater energy self-sufficiency while developing local technical capabilities and human capital.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-services-headline">
              Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for The Gambia's energy sector development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" data-testid="button-view-all-services">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Partner With GNPC?</h2>
          <p className="text-lg opacity-95 leading-relaxed">
            Explore investment opportunities in The Gambia's growing energy sector
          </p>
          <Link href="/exploration">
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
              data-testid="button-partner-cta"
            >
              Explore Opportunities
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
