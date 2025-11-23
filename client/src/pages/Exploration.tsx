import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Globe,
  TrendingUp,
  Users,
  Award,
  Target,
  Handshake,
} from "lucide-react";

export default function Exploration() {
  const { toast } = useToast();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      companyName: "",
      email: "",
      areaOfInterest: "",
      message: "",
    },
  });

  const opportunities = [
    {
      icon: Globe,
      title: "Frontier Market",
      description: "The Gambia is part of the Mauritania-Senegal-Guinea-Bissau-Conakry (MSGBC) basin with recent discoveries in neighboring countries.",
    },
    {
      icon: TrendingUp,
      title: "Strategic Location",
      description: "Proximity to Sangomar Basin discoveries positions The Gambia as an attractive exploration destination.",
    },
    {
      icon: Users,
      title: "Government Support",
      description: "Strong government commitment to petroleum sector development with favorable investment frameworks.",
    },
  ];

  const benefits = [
    {
      icon: Handshake,
      value: "Strategic Partnerships",
      description: "Collaborate with a national oil company backed by government support",
    },
    {
      icon: Target,
      value: "Exploration Potential",
      description: "Access to promising offshore blocks in the MSGBC basin",
    },
    {
      icon: Award,
      value: "Competitive Terms",
      description: "Attractive production sharing agreements and licensing terms",
    },
    {
      icon: Users,
      value: "Local Expertise",
      description: "Growing pool of trained Gambian petroleum professionals",
    },
  ];

  const onSubmit = async (data: InsertInquiry) => {
    try {
      await apiRequest("POST", "/api/inquiries", data);
      
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your interest. We will contact you shortly.",
      });

      form.reset();
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl space-y-6">
            <Badge
              variant="secondary"
              className="bg-accent text-accent-foreground px-6 py-2 text-sm font-semibold"
            >
              Investment Opportunities
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-exploration-hero-headline">
              Partner With GNPC
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed" data-testid="text-exploration-hero-subtext">
              Explore investment opportunities in The Gambia's petroleum sector and be part of our energy future
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-opportunity-headline">
                  A Frontier Market Opportunity
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Gambia represents an exciting frontier market within the MSGBC (Mauritania-Senegal-Guinea-Bissau-Conakry) basin, one of West Africa's most promising petroleum provinces. Recent significant discoveries in the Sangomar Basin and surrounding areas have heightened interest in the region's hydrocarbon potential.
                  </p>
                  <p>
                    GNPC offers international operators and investors the opportunity to participate in exploration and development activities through production sharing contracts, joint ventures, and other collaborative arrangements designed to maximize mutual benefits while ensuring sustainable development.
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {opportunities.map((item, index) => (
                  <Card key={index} className="hover-elevate" data-testid={`card-opportunity-${index}`}>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-primary/20 sticky top-24" data-testid="card-inquiry-form">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Quick Inquiry</h3>
                    <p className="text-sm text-muted-foreground">
                      Interested in partnering with GNPC? Submit your inquiry and our team will contact you.
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company name"
                                data-testid="input-company-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="email@company.com"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="areaOfInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Area of Interest *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-area-of-interest">
                                  <SelectValue placeholder="Select an area" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="exploration">Exploration & Production</SelectItem>
                                <SelectItem value="partnership">Strategic Partnership</SelectItem>
                                <SelectItem value="licensing">Licensing Opportunities</SelectItem>
                                <SelectItem value="investment">General Investment</SelectItem>
                                <SelectItem value="technical">Technical Collaboration</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your interest..."
                                rows={5}
                                data-testid="textarea-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={form.formState.isSubmitting}
                        data-testid="button-submit-inquiry"
                      >
                        {form.formState.isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-benefits-headline">
                Why Partner With GNPC?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Benefits of collaborating with The Gambia's national petroleum corporation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{benefit.value}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Offshore Exploration Blocks
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              GNPC manages multiple offshore blocks available for exploration and development. These blocks are located in prospective areas within the MSGBC basin, benefiting from regional geological understanding and proximity to recent discoveries.
            </p>
            <p>
              We welcome expressions of interest from qualified international oil companies and investors. Our licensing framework ensures transparent, competitive processes while protecting The Gambia's national interests.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="default" data-testid="button-contact-team">
              Contact Our Team
            </Button>
            <a href="/services">
              <Button size="lg" variant="outline" data-testid="button-learn-services">
                Learn About Our Services
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
