import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Rocket,
  Gem,
  Smartphone,
  Globe,
  Mail,
  Star,
  CheckCircle,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl flex flex-col text-center md:block md:2xl font-bold">
            <span className="text-yellow-500">The Typed</span>
            <span className="text-black bg-yellow-500 px-2 rounded w-fit">
              {" "}
              Media
            </span>
          </div>
          <Button
            asChild
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            <Link href="#contact">Book Free Call</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 min-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 mb-6">
              Premium Web Design Agency
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Luxury Websites,{" "}
              <span className="text-yellow-500">Built to Impress</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Crafted for brands that want to stand out. Delivered in 1–3 days.
            </p>
            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-6 rounded-full group"
              >
                <Link href="#contact">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="pt-4 text-gray-400">
              <p>
                Or DM us on Instagram{" "}
                <Link
                  href="https://instagram.com/thetypedmediaofc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:underline"
                >
                  @thetypedmediaofc
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who <span className="text-yellow-500">We Are</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're The Typed Media — a two-person digital agency combining
              speed, style, and conversion-focused strategy. Oussama leads
              client outreach, messaging, and high-converting copy. Majid builds
              lightning-fast, beautifully designed websites. Together, we help
              brands launch with impact — globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-12 w-12 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                  Oussama
                </h3>
                <p className="text-lg font-semibold mb-4 text-gray-300">
                  Strategy, Sales & Copy
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I develop offers, craft persuasive messaging, and manage
                  client communication—making brands sound sharp and
                  trustworthy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gem className="h-12 w-12 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                  Majid
                </h3>
                <p className="text-lg font-semibold mb-4 text-gray-300">
                  Lead Web Developer
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Majid builds pixel-perfect, responsive websites that load
                  quickly and perform across devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Our Premium <span className="text-yellow-500">Web Package</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-500/5 to-yellow-500/10 border border-yellow-500/30 shadow-xl">
              <CardContent className="p-6 sm:p-10 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                  {/* Left: Features List */}
                  <div className="space-y-6">
                    <h3 className="text-xl sm:text-3xl font-bold text-yellow-500 mb-4">
                      Complete Package Includes:
                    </h3>
                    <ul className="space-y-5">
                      {[
                        "3–5 page custom-designed website",
                        "Fully responsive (desktop, tablet, mobile)",
                        "Copywriting and messaging included",
                        "1-year hosting included",
                        "Fast delivery (1–3 days)",
                        "SEO-friendly and scalable design",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-base sm:text-lg text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Pricing Box */}
                  <div className="text-center md:text-left">
                    <div className="bg-black/50 rounded-2xl p-6 sm:p-8 border border-yellow-500/20">
                      <div className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-2">
                        $999
                      </div>
                      <div className="text-lg sm:text-xl text-gray-300 mb-4">
                        total investment
                      </div>
                      <div className="space-y-1 text-gray-400 mb-4">
                        <div>$499 upfront</div>
                        <div>$499 after delivery</div>
                      </div>
                      <div className="border-t border-yellow-500/20 pt-4 mb-6">
                        <div className="text-base sm:text-lg text-yellow-500 mb-1">
                          Hosting Fee:
                        </div>
                        <div className="text-gray-300">$39.99/month</div>
                        <div className="text-sm text-gray-400">
                          (12-month minimum)
                        </div>
                      </div>
                      <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/40 p-2 text-center w-full text-sm sm:text-base">
                        We accept just 3 new clients per week—reserve{" "}
                        <br className="hidden sm:block" />
                        your spot early
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work That{" "}
              <span className="text-yellow-500">Speaks for Itself</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just talk — we build. Here are two real web examples
              developed by our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
            <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IPeyOHNUg5n3WQuXjw5Sdu9PxDy4Op.png"
                    alt="Majid Portfolio Website"
                    width={400}
                    height={250}
                    className="rounded-t-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      asChild
                      size="sm"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                    >
                      <Link
                        href="https://majidportfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-yellow-500">
                    Majid's Portfolio
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    A clean, fast portfolio showcasing personal brand and
                    skillset
                  </p>
                  <div className="mt-4">
                    <Link
                      href="https://majidportfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 hover:underline inline-flex items-center"
                    >
                      majidportfolio.vercel.app
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iMLhnhrWTxxHypxsTBgd4vd9aldapx.png"
                    alt="The Typed Media Website"
                    width={400}
                    height={250}
                    className="rounded-t-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      asChild
                      size="sm"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                    >
                      <Link
                        href="https://thetypedmedia.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-yellow-500">
                    The Typed Media
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    A polished agency site with responsive layout and
                    professional UI
                  </p>
                  <div className="mt-4">
                    <Link
                      href="https://thetypedmedia.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 hover:underline inline-flex items-center"
                    >
                      thetypedmedia.vercel.app
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-br from-yellow-500/5 to-yellow-500/10 border-yellow-500/30 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 mb-6">
                  Looking to feature your site next? We're currently offering
                  premium builds at startup-friendly rates — book a free
                  strategy call.
                </p>
                <Button
                  asChild
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  <Link
                    href="https://calendly.com/theetypedmedia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Your Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Clients Choose{" "}
              <span className="text-yellow-500">The Typed Media</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Rocket className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-yellow-500">
                  Fast Delivery
                </h3>
                <p className="text-gray-400">1–3 days turnaround time</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Gem className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-yellow-500">
                  Premium Design
                </h3>
                <p className="text-gray-400">Modern, luxury aesthetics</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Smartphone className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-yellow-500">
                  Mobile-First
                </h3>
                <p className="text-gray-400">Optimized performance</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-yellow-500">
                  Global Experience
                </h3>
                <p className="text-gray-400">
                  US, UK, UAE, Canada, France, remote clients
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-yellow-500/20 hover:border-yellow-500/40 transition-colors md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-yellow-500">
                  Clear Communication
                </h3>
                <p className="text-gray-400">Regular updates & feedback</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5"
      >
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Let's create something{" "}
              <span className="text-yellow-500">unforgettable</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Book your free strategy call or message us on Instagram to get
              started.
            </p>
            <p className="text-lg text-gray-400">
              Book your free strategy call today.
            </p>
            <div className="pt-8 space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-12 py-6 rounded-full group"
              >
                <Link
                  href="https://calendly.com/theetypedmedia/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="text-gray-400 space-y-2">
                <p>
                  Or message us on Instagram:{" "}
                  <Link
                    href="https://instagram.com/thetypedmediaofc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:underline"
                  >
                    @thetypedmediaofc
                  </Link>
                </p>
                <p>
                  Email us directly:{" "}
                  <Link
                    href="mailto:hello@thetypedmedia.com"
                    className="text-yellow-500 hover:underline"
                  >
                    hello@thetypedmedia.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-yellow-500/20">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-yellow-500">The Typed </span>
            <span className="text-black bg-yellow-500 ml-1 px-2 rounded">Media</span>
          </div>
          <p className="text-gray-400 mb-6">
            Premium web design for brands that want to stand out.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>
              &copy; {new Date().getFullYear()} The Typed Media. All rights
              reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
