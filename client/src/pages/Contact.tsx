import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
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
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Petroleum House", "Bertil Harding Highway", "Brusubi, The Gambia"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+220 437 6543", "+220 437 6544"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@gnpc.gm", "exploration@gnpc.gm", "partnerships@gnpc.gm"],
    },
  ];

  const onSubmit = async (data: InsertContactMessage) => {
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you soon.",
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" data-testid="text-contact-hero-headline">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed" data-testid="text-contact-hero-subtext">
              Get in touch with GNPC. We're here to answer your questions and discuss opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-contact-${index}`}>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form below and we'll get back to you as soon as possible
                      </p>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
                                    data-testid="input-name"
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
                                    placeholder="john@example.com"
                                    data-testid="input-email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+220 XXX XXXX"
                                    data-testid="input-phone"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="How can we help?"
                                    data-testid="input-subject"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us more about your inquiry..."
                                  rows={6}
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
                          className="w-full md:w-auto px-8"
                          disabled={form.formState.isSubmitting}
                          data-testid="button-submit-contact"
                        >
                          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </Form>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <Card className="border-primary/20">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Office Hours</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between gap-8">
                          <span className="font-medium">Monday - Friday:</span>
                          <span>8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="font-medium">Saturday:</span>
                          <span>9:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="font-medium">Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="/exploration" className="text-sm text-primary hover:underline flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Investment Opportunities
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-sm text-primary hover:underline flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="/stations" className="text-sm text-primary hover:underline flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Service Stations
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-sm text-primary hover:underline flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        About GNPC
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Visit Our Headquarters</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We welcome visits to our headquarters in Brusubi. Please contact us in advance to schedule an appointment.
                  </p>
                  <div className="pt-2">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" data-testid="button-get-directions">
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
