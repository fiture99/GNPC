import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Fuel,
  Car,
  Wrench,
  Wind,
  Phone,
} from "lucide-react";

export default function Stations() {
  const stations = [
    {
      id: 1,
      name: "Banjul Station",
      location: "Banjul",
      address: "Liberation Avenue, Banjul",
      services: ["Fuel Pump", "Car Wash", "Lube Bay", "Spare Parts", "Tire Inflation"],
      operatingHours: "24 Hours",
      phone: "+220 437 6543",
    },
    {
      id: 2,
      name: "Brikama Town Station",
      location: "Brikama",
      address: "Main Highway, Brikama Town",
      services: ["Fuel Pump", "Car Wash", "Spare Parts", "Tire Inflation"],
      operatingHours: "6:00 AM - 10:00 PM",
      phone: "+220 437 6544",
    },
    {
      id: 3,
      name: "Bijilo Station",
      location: "Bijilo",
      address: "Coastal Road, Bijilo",
      services: ["Fuel Pump", "Car Wash", "Lube Bay", "Tire Inflation"],
      operatingHours: "24 Hours",
      phone: "+220 437 6545",
    },
    {
      id: 4,
      name: "Farafenni Station",
      location: "Farafenni, North Bank",
      address: "Trans-Gambia Highway, Farafenni",
      services: ["Fuel Pump", "Spare Parts", "Tire Inflation"],
      operatingHours: "6:00 AM - 9:00 PM",
      phone: "+220 437 6546",
    },
    {
      id: 5,
      name: "Basse Santa Su Station",
      location: "Basse, Upper River Region",
      address: "Main Street, Basse Santa Su",
      services: ["Fuel Pump", "Car Wash", "Tire Inflation"],
      operatingHours: "7:00 AM - 8:00 PM",
      phone: "+220 437 6547",
    },
    {
      id: 6,
      name: "Soma Station",
      location: "Soma",
      address: "Trans-Gambia Highway, Soma",
      services: ["Fuel Pump", "Lube Bay", "Spare Parts", "Tire Inflation"],
      operatingHours: "24 Hours",
      phone: "+220 437 6548",
    },
    {
      id: 7,
      name: "Serrekunda Station",
      location: "Serrekunda",
      address: "Kairaba Avenue, Serrekunda",
      services: ["Fuel Pump", "Car Wash", "Lube Bay", "Spare Parts", "Tire Inflation"],
      operatingHours: "24 Hours",
      phone: "+220 437 6549",
    },
  ];

  const serviceIcons: Record<string, any> = {
    "Fuel Pump": Fuel,
    "Car Wash": Car,
    "Lube Bay": Wrench,
    "Spare Parts": Wrench,
    "Tire Inflation": Wind,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-stations-hero-headline">
              Our Service Stations
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed" data-testid="text-stations-hero-subtext">
              Find GNPC service stations across The Gambia, from Banjul to Basse Santa Su
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2">
              {stations.length} Locations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-stations-headline">
              Serving Communities Nationwide
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              GNPC operates strategically located service stations to serve both urban and rural communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stations.map((station) => (
              <Card key={station.id} className="hover-elevate" data-testid={`card-station-${station.id}`}>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-foreground" data-testid={`text-station-name-${station.id}`}>
                        {station.name}
                      </h3>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{station.address}</span>
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground">{station.operatingHours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{station.phone}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-border">
                    <h4 className="font-semibold text-sm text-foreground">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {station.services.map((service, idx) => {
                        const Icon = serviceIcons[service] || Wrench;
                        return (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-primary/10 text-primary flex items-center gap-1.5"
                          >
                            <Icon className="w-3 h-3" />
                            {service}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Expansion Plans
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GNPC is committed to expanding our network of service stations to better serve communities across The Gambia. Our strategic expansion plans focus on both urban centers and rural areas to ensure widespread access to quality petroleum products and services.
                </p>
                <p>
                  We are actively identifying locations for new stations in underserved regions, with a goal of establishing convenient access points for all Gambians. Each new station will offer our full range of products and services, maintaining the same high standards our customers expect.
                </p>
              </div>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold text-primary">Why Choose GNPC?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Quality Assured</h4>
                      <p className="text-sm text-muted-foreground">Premium petroleum products meeting international standards</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Nationwide Coverage</h4>
                      <p className="text-sm text-muted-foreground">Strategic locations from coastal areas to inland regions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Comprehensive Services</h4>
                      <p className="text-sm text-muted-foreground">Full range of automotive products and services</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Local Support</h4>
                      <p className="text-sm text-muted-foreground">Supporting The Gambia's economy and employment</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
