import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (
    e:  React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    emailjs
      .send("service_0oda5oj", "template_q3c7svp", form, "NhDMx_jwolRkZa2Uo")
      .then(
        () => alert("Email inviata!"),
        () => alert("Errore nell'invio"),
      );
  };

  return (
    <div id="contact" className="min-h-screen p-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Contatti</h1>

      {/* Info contatti */}
      <div className="mb-10 text-center space-y-2">
        <p>📧 Email: cardiariccardo94@gmail.com</p>
        <p>📞 Telefono: +39 351 667 9592</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 bg-white p-6 rounded-xl shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Messaggio"
          rows={5}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Invia messaggio
        </button>
      </form>
    </div>
  );
}

export default Contact;
