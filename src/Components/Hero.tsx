function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      {/* Background Image */}
      <img
        src="/public/photo-1605379399642-870262d3d051.avif"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gradient nero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90"></div>
      {/* Content */}
      <div className="relative z-10 text-white px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Full Stack Web Developer
        </h1>

        <p className="text-gray-300 max-w-xl mb-8 text-center">
          Specializzato in React, Laravel, Tailwind CSS e Bootstrap per la
          creazione di web app moderne e API scalabili.
        </p>

        <a href="https://wa.me/393516679592" target="_blank" rel="noreferrer">
          <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition">
            Contattami
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
