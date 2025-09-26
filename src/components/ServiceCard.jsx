import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";

export default function ServiceCard({ image, heading, text }) {
  return (
    <div className="flex flex-col max-w-6xl mx-auto my-4 md:flex-row bg-white border border-purple-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      {/* Left Image Section */}
      <div className="md:w-1/3 w-full p-4">
        <img
          src={image}
          alt={heading}
          className="md:w-[70%] w-full h-66 object-top object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-purple-600 mb-4">
            {heading}
          </h2>
          <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-6">
          <a
            href="tel:+919996365001"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-purple-700 transition"
          >
            <IoMdCall size={22} />
          </a>
          <a
            href="https://wa.me/919996365001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
          >
            <IoLogoWhatsapp size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}
