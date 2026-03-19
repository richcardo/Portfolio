import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-xl font-bold">Riccardo Dev</h2>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/richcardo"
            className="hover:text-gray-400 transition"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/riccardo-cardia-webdeveloper/"
            className="hover:text-gray-400 transition"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/riccardocardia1/"
            className="hover:text-gray-400 transition"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
}

export default Footer;
