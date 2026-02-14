import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m7ahmfk",
        "template_9k8ja4s",
        form.current,
        "OIBocAAZWX9hhAvDI"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen px-10 py-24 bg-gradient-to-r from-indigo-50 to-cyan-50">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        Contact Me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full border p-3 mb-4 rounded-lg"
        />

        <button className="w-full bg-indigo-600 text-white p-3 rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
