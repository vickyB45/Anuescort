import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Mail, User, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  const initialValues = { name: "", email: "", phone: "", message: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <section className="relative mb-10">
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-3 md:px-12 items-center">
        
        {/* Left - Contact Card */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-4"
        >
          <h2 className="md:text-4xl text-3xl text-purple-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Fill in the form below and our team will get back to you as soon as possible.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                  <Field
                    name="name"
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                  <Field
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                  <Field
                    as="textarea"
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg transition"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </Form>
            )}
          </Formik>
        </motion.div>

        {/* Right - Google Map */}
       <motion.div
  initial={{ x: 40, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="rounded-3xl overflow-hidden shadow-xl border-4 border-white hidden md:block md:h-[500px]"
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
