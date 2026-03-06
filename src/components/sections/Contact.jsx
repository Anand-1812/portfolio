import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.custom(
          <div className="
            p-4 rounded-xl
            bg-[#111111]/85 backdrop-blur-md
            border border-white/10
            text-white
            shadow-[0_0_20px_rgba(255,255,255,0.08)]
            flex items-center gap-3
          ">
            <span className="text-white text-lg">✓</span>
            <span className="font-medium">Message sent successfully!</span>
          </div>
        );
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        toast.custom(
          <div className="
            p-4 rounded-xl
            bg-[#111111]/85 backdrop-blur-md
            border border-white/10
            text-white
            shadow-[0_0_20px_rgba(255,255,255,0.08)]
            flex items-center gap-3
          ">
            <span className="text-gray-100 text-lg">×</span>
            <span className="font-medium">Oops! Something went wrong.</span>
          </div>
        );
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-28 px-24"
    >
      {/* Toaster Component required to render the notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      <RevealOnScroll>
        <div className="max-w-3xl mx-auto">

          {/* Title */}
          <h2
            className="
              text-4xl font-bold mb-12 text-center
              text-white
            "
          >
            Get In Touch
          </h2>

          {/* Form */}
          <form
            className="
              space-y-6 rounded-2xl p-8
              bg-[#111111]/60 border border-white/10
              backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.3)]
            "
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <input
                type="text"
                required
                value={formData.name}
                placeholder="Your Name"
                className="
                  w-full px-4 py-3
                  bg-[#1a1a1a]/70 text-white
                  border border-white/10 rounded-lg
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-white/30
                  focus:bg-[#222222]
                  transition-all duration-200
                "
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                required
                value={formData.email}
                placeholder="example@gmail.com"
                className="
                  w-full px-4 py-3
                  bg-[#1a1a1a]/70 text-white
                  border border-white/10 rounded-lg
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-white/30
                  focus:bg-[#222222]
                  transition-all duration-200
                "
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                rows={6}
                required
                value={formData.message}
                placeholder="Your message..."
                className="
                  w-full px-4 py-3
                  bg-[#1a1a1a]/70 text-white
                  border border-white/10 rounded-lg
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-white/30
                  focus:bg-[#222222]
                  transition-all duration-200
                "
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full py-3 rounded-xl font-semibold text-black
                bg-gradient-to-r from-white to-gray-300
                shadow-[0_0_15px_rgba(255,255,255,0.16)]
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                cursor-pointer
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
