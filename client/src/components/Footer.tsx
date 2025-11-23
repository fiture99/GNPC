import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/gnpc_1763909036153.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="GNPC Logo" className="h-16 w-auto" />
              <div className="flex flex-col">
                {/* <span className="font-bold text-sm leading-tight">GNPC</span>
                <span className="text-xs opacity-90 leading-tight">The Gambia</span> */}
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Gambia National Petroleum Corporation, driving economic growth through sustainable energy solutions and strategic petroleum development since 2003.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                  About GNPC
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/stations" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                  Service Stations
                </Link>
              </li>
              <li>
                <Link href="/exploration" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                  Investment Opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                  News & Events
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                  Annual Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  Petroleum House, Bertil Harding Highway, Brusubi, The Gambia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm opacity-90">+220 437 6543</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm opacity-90">info@gnpc.gm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © {currentYear} Gambia National Petroleum Corporation. All rights reserved.
            </p>

            <p className="text-xs sm:text-sm">
            Website designed by{' '}
            <a 
              href="https://nyakoi-services.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white font-semibold hover:underline transition-colors duration-200"
            >
              Nyakoi Services
            </a>
          </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
