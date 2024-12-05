import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Logo and Motto */}
          <div className="space-y-4">
            <img
              src="/logo.png" // Replace with your logo path
              alt="College Logo"
              className="w-20 h-20 mx-auto md:mx-0"
            />
            <h2 className="text-2xl font-bold text-center md:text-left">
              [College Name]
            </h2>
            <p className="text-center md:text-left text-gray-300">
              "Fostering Excellence in Education."
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
                  href="/programs"
                  className="text-gray-300 hover:text-white transition"
                >
                  Programs
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
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="block text-gray-300">Email:</span>
                <a
                  href="mailto:info@college.edu"
                  className="text-gray-300 hover:text-white transition"
                >
                  info@college.edu
                </a>
              </li>
              <li>
                <span className="block text-gray-300">Address:</span>
                <p className="text-gray-300">
                  123 College Ave, Education City, Country
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} [College Name]. All rights reserved.
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
