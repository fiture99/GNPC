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
import heroImage from "@assets/generated_images/gnpc-cover.jpg";
import stationImage from "@assets/generated_images/gambian_station_opening.png";
import teamImage from "@assets/generated_images/corporate_energy_team_meeting.png";

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
      <section 
        className="relative text-primary-foreground py-24 md:py-32 lg:py-48 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/45 to-primary/40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge
              variant="secondary"
              className="bg-accent text-accent-foreground px-6 py-2 text-sm font-semibold"
              data-testid="badge-company-tagline"
            >
              The Gambia's National Oil Company
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight" data-testid="text-hero-headline">
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
                  className="bg-white/20 text-primary-foreground border-white/40 hover:bg-white/30 px-8 backdrop-blur-sm"
                  data-testid="button-learn-more"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="hover-elevate border-t-4 border-t-primary shadow-lg" data-testid={`card-stat-${index}`}>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold tracking-wide" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight" data-testid="text-about-headline">
                Building The Gambia's Petroleum Industry
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Gambia National Petroleum Corporation (GNPC) was established in 2003 as the national oil company of The Gambia. Following statutory enactment in 2014, GNPC began its retail and distribution activities in 2010, representing the business arm of the Gambia Government within the downstream petroleum sector.
                </p>
                <p>
                  We currently operate 7 petroleum stations strategically located in Banjul, Brikama Town, Bijilo, Farafenni in the North Bank, Basse Santa Su in the Upper River Region, and Soma. Our commitment extends beyond fuel distribution to comprehensive automotive services and products.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 pt-4" data-testid={`value-${index}`}>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{value.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden shadow-xl hover-elevate" data-testid="card-vision-mission">
                <img src={stationImage} alt="GNPC Service Station" className="w-full h-56 object-cover" />
                <CardContent className="p-8 space-y-6 bg-white">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the leading petroleum company in The Gambia delivering quality services in an efficient, reliable and professional manner with a highly competent and dedicated team.
                    </p>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To accelerate exploration efforts with partners to achieve new oil and gas discoveries, supporting The Gambia's goal of greater energy self-sufficiency while developing local technical capabilities and human capital.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground" data-testid="text-services-headline">
              Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive solutions for The Gambia's energy sector development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate overflow-hidden shadow-lg border-t-4 border-t-accent" data-testid={`card-service-${index}`}>
                <div className="h-40 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button size="lg" data-testid="button-view-all-services" className="bg-primary hover:bg-primary/90">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section 
        className="relative text-primary-foreground py-24 md:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${teamImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/80 to-primary/85" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Partner With GNPC?</h2>
          <p className="text-lg md:text-xl opacity-95 leading-relaxed max-w-2xl mx-auto">
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
