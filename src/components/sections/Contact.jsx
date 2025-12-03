import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

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
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-28 px-24"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto">

          {/* Title */}
          <h2
            className="
              text-4xl font-bold mb-12 text-center
              bg-gradient-to-r from-[#82aaff] to-[#7dcfff]
              bg-clip-text text-transparent
            "
          >
            Get In Touch
          </h2>

          {/* Form */}
          <form
            className="
              space-y-6 rounded-2xl p-8
              bg-[#1a1b26]/40 border border-[#2d3f76]/60
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
                  bg-[#24283b]/40 text-[#c0caf5]
                  border border-[#2d3f76]/60 rounded-lg
                  placeholder:text-[#565f89]
                  focus:outline-none
                  focus:border-[#7aa2f7]
                  focus:bg-[#24283b]/60
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
                  bg-[#24283b]/40 text-[#c0caf5]
                  border border-[#2d3f76]/60 rounded-lg
                  placeholder:text-[#565f89]
                  focus:outline-none
                  focus:border-[#7aa2f7]
                  focus:bg-[#24283b]/60
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
                  bg-[#24283b]/40 text-[#c0caf5]
                  border border-[#2d3f76]/60 rounded-lg
                  placeholder:text-[#565f89]
                  focus:outline-none
                  focus:border-[#7aa2f7]
                  focus:bg-[#24283b]/60
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
                w-full py-3 rounded-xl font-semibold text-[#1a1b26]
                bg-gradient-to-r from-[#7aa2f7] to-[#89ddff]
                shadow-[0_0_15px_rgba(122,162,247,0.4)]
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(122,162,247,0.55)]
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

