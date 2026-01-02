import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                <img
                  src="logo/GREEN.jpg"
                  alt="GREEN Inc. Logo"
                  className="rounded-full"
                />
              </div>
              <span className="text-white font-semibold">GREEN Inc.</span>
            </div>
            <p className="text-gray-400">
              Research and conservation efforts to protect coral reefs and
              marine ecosystems in Southern Leyte and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="hover:text-white transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="hover:text-white transition-colors"
                >
                  Impact
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="hover:text-white transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  News & Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Annual Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  GREEN Inc.
                  <br />
                  Malitbog 6603, Southern Leyte, Philippines
                </span>
              </li>
              <li className="flex items-center gap-2 flex-wrap">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400">+63 (910) 631-5925</span>
              </li>
              <li className="flex items-center gap-2 flex-wrap">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400">+63 (910) 976-0288</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400">
                  info@sogodbaycoralrestoration.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © {new Date().getFullYear()} GREEN Inc. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/GREENIncorporatedSogodBay"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
