import React from "react";
import heroImage from "../assets/images/logo.png";
import { Facebook, Twitter, Linkedin, Instagram, Tally2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // <footer className="bg-gradient-to-r from-green-700 font-semibold via-green-700 to-green-900 text-white py-12">
    <footer className="bg-primary-dark font-semibold text-white py-4 md:py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Logo and Motto */}
          <div className="">
            <img
              src={heroImage}
              alt="College Logo"
              className="w-28 h-28 mx-auto md:mx-0"
            />
            <h2 className="text-2xl font-bold text-center mb-4 md:text-left">
              City Institute of Health and Allied Sciences
            </h2>
            <p className="text-center md:text-left text-gray-300">
              "Fostering Excellence in Healthcare Education."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/admissions"
                  className="text-gray-300 hover:text-white transition"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="/programmes"
                  className="text-gray-300 hover:text-white transition"
                >
                  Programmes
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-300 hover:text-white transition"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li>
                <span className="block text-gray-300">Phone:</span>
                <a
                  href="tel:+255745333833"
                  className="text-gray-300 hover:text-white transition"
                >
                  <div className="flex items-center">
                    <div className=" flex">
                      <span className="text-gray-300 hover:text-white mr-3">
                        +255 745 333 833
                      </span>
                      <Tally2 />
                      <span className="text-gray-300 hover:text-white">
                        +255 679 288 333
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <span className="block text-gray-300">Email:</span>
                <a
                  href="mailto:info@ilalacollege.ac.tz"
                  className="text-gray-300 hover:text-white transition"
                >
                  info@ilalacollege.ac.tz
                </a>
              </li>
              <li>
                <span className="block text-gray-300">Address:</span>
                <p className="text-gray-300">
                  Plot No. 40, Block D Chanika - Street,
                </p>
                <p className="text-gray-300">
                  P.O. Box 90372- DAR ES SALAAM, Tanzania
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Our Social Media
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-400 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} City Institute of Health and Allied Sciences. All
            rights reserved.
          </p>
          <ul className="flex space-x-4 text-gray-400 text-sm">
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/accessibility" className="hover:text-white">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
