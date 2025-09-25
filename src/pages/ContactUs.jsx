// src/pages/Contact.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { toast } from "react-toastify";



const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid phone number")
    .required("Phone is required"),
  message: Yup.string().required("Message is required"),
});

export default function ContactUs() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-purple-600 mb-16"
        >
          Get In Touch
        </motion.h2>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="text-gray-600">
              We'd love to hear from you. Reach out to us through the form or
              contact details below.
            </p>

            <div className="flex items-center space-x-4">
              <Phone className="text-purple-600" />
              <span className="text-gray-700">+91 9876543210</span>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-purple-600" />
              <span className="text-gray-700">info@example.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-purple-600" />
              <span className="text-gray-700">Connaught Place, New Delhi</span>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="hover:-translate-y-2 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="hover:-translate-y-2 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
              >
                <FaLinkedinIn className="text-white"/>
              </a>
              <a
                href="#"
                className="hover:-translate-y-2 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
              >
                <IoMdMailUnread className="text-white" />
              </a>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-purple-50 md:p-8 rounded-2xl shadow-lg"
          >
            <Formik
              initialValues={{ name: "",  phone: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                toast.success("Form Submited ")
                resetForm();
              }}
            >
              <Form className="space-y-6">
                {/* Name */}
                <div>
                  <Field
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                

                {/* Phone */}
                <div>
                  <Field
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Message */}
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </Form>
            </Formik>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[400px]"
        >
          <iframe
    title="Udaipur Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.123456789012!2d73.71247951496508!3d24.585445984091723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39678eab3e4f4321%3A0xabcdef1234567890!2sUdaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
