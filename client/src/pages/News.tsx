import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import newsImage1 from "@assets/generated_images/gambian_press_conference.png";
import newsImage2 from "@assets/generated_images/gambian_station_opening.png";
import newsImage3 from "@assets/generated_images/gambian_exploration_operations.png";

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "GNPC MD to Speak at MSGBC Oil & Gas Summit 2025",
      excerpt: "The Managing Director of GNPC will represent The Gambia at the upcoming MSGBC Oil, Gas & Power Conference, highlighting the country's petroleum sector opportunities and strategic partnerships.",
      date: "December 15, 2025",
      category: "Events",
      image: newsImage1,
    },
    {
      id: 2,
      title: "Ghana-Gambia Petroleum Partnership Strengthened",
      excerpt: "GNPC and Ghana National Petroleum Corporation sign memorandum of understanding to enhance technical cooperation, knowledge sharing, and capacity building initiatives between the two national oil companies.",
      date: "November 22, 2025",
      category: "Partnership",
      image: newsImage1,
    },
    {
      id: 3,
      title: "Trade Agreement Signed with Guinea-Bissau",
      excerpt: "Regional collaboration advances as GNPC signs bilateral trade agreement with Guinea-Bissau's petroleum authority, paving the way for cross-border cooperation in the MSGBC basin.",
      date: "October 18, 2025",
      category: "Regional",
      image: newsImage3,
    },
    {
      id: 4,
      title: "New Service Station Opens in Kombo East",
      excerpt: "GNPC expands its retail network with the opening of a new modern service station in Kombo East, bringing quality petroleum products and services closer to local communities.",
      date: "September 30, 2025",
      category: "Expansion",
      image: newsImage2,
    },
    {
      id: 5,
      title: "Youth Training Program Graduates 50 Petroleum Technicians",
      excerpt: "GNPC's capacity building initiative celebrates successful completion of intensive petroleum technology training program, equipping young Gambians with industry-relevant skills.",
      date: "August 12, 2025",
      category: "Training",
      image: newsImage3,
    },
    {
      id: 6,
      title: "GNPC Participates in West African Energy Forum",
      excerpt: "Executive team represents The Gambia at regional energy conference, showcasing investment opportunities and engaging with international petroleum companies and investors.",
      date: "July 5, 2025",
      category: "Events",
      image: newsImage1,
    },
  ];

  const categories = ["All", "Events", "Partnership", "Regional", "Expansion", "Training"];

  const categoryColors: Record<string, string> = {
    Events: "bg-accent/20 text-accent-foreground",
    Partnership: "bg-primary/20 text-primary",
    Regional: "bg-chart-3/20 text-chart-3",
    Expansion: "bg-chart-2/20 text-chart-2",
    Training: "bg-chart-5/20 text-chart-5",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-news-hero-headline">
              News & Events
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed" data-testid="text-news-hero-subtext">
              Stay updated with the latest developments, partnerships, and initiatives from GNPC
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className={`px-4 py-2 cursor-pointer hover-elevate ${
                    category === "All" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                  }`}
                  data-testid={`filter-${category.toLowerCase()}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="hover-elevate group overflow-hidden shadow-lg" data-testid={`card-news-${article.id}`}>
                <div className="aspect-video overflow-hidden bg-primary/5">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <Badge
                      variant="secondary"
                      className={categoryColors[article.category] || "bg-muted text-muted-foreground"}
                      data-testid={`badge-category-${article.id}`}
                    >
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span data-testid={`text-date-${article.id}`}>{article.date}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors" data-testid={`text-title-${article.id}`}>
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-excerpt-${article.id}`}>
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                      data-testid={`button-read-more-${article.id}`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover-elevate active-elevate-2 h-9 w-9" data-testid="button-page-prev">
                &larr;
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover-elevate active-elevate-2 h-9 w-9" data-testid="button-page-1">
                1
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover-elevate active-elevate-2 h-9 w-9" data-testid="button-page-2">
                2
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover-elevate active-elevate-2 h-9 w-9" data-testid="button-page-next">
                &rarr;
              </button>
            </nav>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Subscribe to Updates
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get the latest news and updates from GNPC delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              data-testid="input-subscribe-email"
            />
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover-elevate active-elevate-2 h-9 px-6" data-testid="button-subscribe">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
