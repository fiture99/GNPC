import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Users,
  Shield,
  Star,
  TrendingUp,
  Award,
  Handshake,
  Globe,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Strategic Exploration",
      description: "Conducting comprehensive seismic surveys and systematic exploration programs to discover and develop hydrocarbon resources.",
    },
    {
      icon: Users,
      title: "Capacity Building",
      description: "Investing in Gambian talent through training programs, technical development, and knowledge transfer initiatives.",
    },
    {
      icon: Shield,
      title: "Good Governance",
      description: "Maintaining highest standards of transparency, accountability, and regulatory compliance in all operations.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Delivering quality services through continuous improvement, innovation, and professional excellence.",
    },
  ];

  const milestones = [
    {
      year: "2003",
      title: "GNPC Established",
      description: "Founded as The Gambia's national oil company to manage the country's petroleum resources.",
    },
    {
      year: "2010",
      title: "Retail Operations Begin",
      description: "Commenced retail and distribution activities in the downstream petroleum sector.",
    },
    {
      year: "2014",
      title: "Statutory Enactment",
      description: "Officially recognized through statutory enactment, solidifying GNPC's role as the government's petroleum business arm.",
    },
    {
      year: "2025",
      title: "Continued Growth",
      description: "Operating 7 service stations with plans for expansion across The Gambia's regions.",
    },
  ];

  const leadership = [
    {
      icon: TrendingUp,
      value: "Energy Independence",
      description: "Working towards greater energy self-sufficiency for The Gambia",
    },
    {
      icon: Award,
      value: "Quality Service",
      description: "Delivering reliable, efficient, and professional petroleum services",
    },
    {
      icon: Handshake,
      value: "Strategic Partnerships",
      description: "Building strong relationships with international operators and investors",
    },
    {
      icon: Globe,
      value: "Regional Collaboration",
      description: "Strengthening ties with regional counterparts and organizations",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-about-hero-headline">
              About GNPC
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed" data-testid="text-about-hero-subtext">
              Building The Gambia's petroleum industry through strategic exploration, sustainable development, and unwavering commitment to excellence since 2003.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-history-headline">
                Our History
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Gambia National Petroleum Corporation (GNPC) was established in 2003 as the national oil company of The Gambia, mandated to manage and develop the country's petroleum resources on behalf of the government and people of The Gambia.
                </p>
                <p>
                  Following statutory enactment in 2014, GNPC solidified its position as the government's principal petroleum business arm. Beginning retail and distribution activities in 2010, we represent the downstream petroleum sector's cornerstone in The Gambia.
                </p>
                <p>
                  Today, we operate 7 strategically located petroleum stations across the country, providing not only fuel but comprehensive automotive services. Our expansion plans aim to extend our reach into more rural and urban areas, ensuring all Gambians have access to quality petroleum products and services.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-milestone-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-primary/20" data-testid="card-vision">
              <CardContent className="p-8 md:p-10 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading petroleum company in The Gambia delivering quality services in an efficient, reliable and professional manner with a highly competent and dedicated team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20" data-testid="card-mission">
              <CardContent className="p-8 md:p-10 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To accelerate exploration efforts with partners to achieve new oil and gas discoveries, supporting The Gambia's goal of greater energy self-sufficiency while developing local technical capabilities and human capital.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-values-headline">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Guiding principles that define our approach to petroleum development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-value-${index}`}>
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-leadership-headline">
              Leadership Focus
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic priorities driving GNPC's growth and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((item, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-leadership-${index}`}>
                <CardContent className="p-6 space-y-3 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.value}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
