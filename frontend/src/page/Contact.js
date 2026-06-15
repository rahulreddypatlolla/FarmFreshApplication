import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Clear form after submission
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-lg text-gray-700 text-center">
        Have questions or want to connect? We’d love to hear from you! Reach out
        using the form below or via our contact details.
      </p>

      {/* Contact Details */}
      <div className="mt-6 bg-green-100 p-4 rounded-lg text-gray-700">
        <p><strong>📍 Address:</strong> Miyapur Hyderbad-500049</p>
        <p><strong>📧 Email:</strong> contact@seedtoplate.com</p>
        <p><strong>📞 Phone:</strong> +91 6305267901</p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        {submitted ? (
          <p className="text-green-600 text-center font-semibold">
            ✅ Thank you for reaching out! We'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-500"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
