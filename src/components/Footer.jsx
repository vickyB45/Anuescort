import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";


export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-purple-900 text-gray-300 pt-16">
    
      <div className="fixed bottom-0 right-0 w-full flex z-[599] "> 
        <a  href="https://wa.me/919996365001"
      target="_blank" className="bg-green-500 py-2 w-[50%] flex justify-center items-center">
         
     
    
      <FaWhatsapp className="text-2xl" />
      </a>
       <a  href="tel:+919996365001" className="bg-blue-500 py-2 w-[50%] flex justify-center items-center">
  
    <IoMdCall  className="text-white text-2xl" />
</a>
         </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <img src="/images/logo.png" alt="logo" className="w-36 mb-4" />
          <p className="text-sm leading-relaxed">
            Your trusted partner for premium services. We bring modern design,
            creativity, and technology together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="/gallery" className="hover:text-purple-400 transition">Gallery</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Connaught Place, New Delhi</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@example.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 hover:-translate-y-2 bg-purple-600 hover:bg-purple-700 rounded-full transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 hover:-translate-y-2 bg-purple-600 hover:bg-purple-700 rounded-full transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 hover:-translate-y-2 bg-purple-600 hover:bg-purple-700 rounded-full transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 hover:-translate-y-2 bg-purple-600 hover:bg-purple-700 rounded-full transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Anuescort. All rights reserved.
      </div>
    </footer>
  );
}
