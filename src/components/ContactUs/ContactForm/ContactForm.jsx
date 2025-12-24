import { useState } from "react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full  bg-mainColor backdrop-blur-lg border-8 border-lightColor  p-4 text-lightColor"
      >
        <h2 className="heading mb-6 font-medium text-lightColor">
          <SectionHeader firstWord="Get in Touch" />
        </h2>

        <div className="mb-6">
          <label className="block text-lightColor text-sm font-bold mb-2 paragraph">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-lightColor focus:outline-none focus:ring-1 focus:ring-lightColor"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lightColor text-sm font-bold mb-2 paragraph">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-lightColor focus:outline-none focus:ring-1 focus:ring-lightColor"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lightColor text-sm font-bold mb-2 paragraph">
            Your Message
          </label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full px-4 py-2 text-lightColor rounded-md bg-transparent border border-lightColor focus:outline-none focus:ring-1 focus:ring-lightColor"
          ></textarea>
        </div>

        <div>
          <button className="btn-boder-white">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}



