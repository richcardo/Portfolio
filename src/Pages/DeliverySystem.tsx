import { motion } from "framer-motion";
import {
  Package,
  Euro,
  CreditCard,
  Map,
  BarChart3,
  MapPin,
  Clock,
  Pizza,
  Scooter,
} from "lucide-react";

export default function DeliverySystem() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 70 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-gray-50 font-sans">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-sky-500 text-white py-20 text-center"
      >
        <div className="flex justify-center items-center gap-4">
          <Pizza className="text-yellow-500" size={90} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            PizzaTrack
          </motion.h1>
          <Scooter className="text-red-500" size={90} />
        </div>

        <p className="text-xl md:text-2xl mb-6">
          Il gestionale per pizzerie che traccia le consegne, calcola i ricavi
          dei rider e ti fa risparmiare tempo!
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-sky-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          href="#pricing"
        >
          Scopri i piani
        </motion.a>
      </motion.section>
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Perché scegliere PizzaTrack
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">
              Tracciamento consegne
            </h3>
            <p>
              Visualizza tutte le consegne dei tuoi rider in tempo reale e su
              una mappa intuitiva.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">Totale incassi e POS</h3>
            <p>
              Calcola automaticamente i ricavi dei rider e controlla quali
              consegne sono già pagate.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">Statistiche avanzate</h3>
            <p>
              Controlla la distanza percorsa dai rider, ottieni report chiari e
              immediati.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Come funziona</h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-3 gap-12"
          >
            <motion.div variants={item} initial="hidden" whileInView="show">
              <h3 className="text-xl font-semibold mb-2">
                1. Aggiungi i rider
              </h3>
              <p>Registra i tuoi rider e le loro consegne giornaliere.</p>
            </motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show">
              <h3 className="text-xl font-semibold mb-2">
                2. Traccia le consegne
              </h3>
              <p>
                Visualizza le consegne su mappa e monitora l’incasso in tempo
                reale.
              </p>
            </motion.div>
            <motion.div variants={item} initial="hidden" whileInView="show">
              <h3 className="text-xl font-semibold mb-2">3. Ottieni report</h3>
              <p>Genera statistiche e totale incassi per ciascun rider.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-20 max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Piani e Prezzi</h2>
        <div className="flex justify-center gap-12">
          <div className="bg-white border border-sky-300 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <p className="mb-4">Tutte le funzioni base per pizzerie piccole</p>
            <p className="text-2xl font-bold mb-6">79€/mese</p>
            <ul className="mb-10 text-left space-y-4">
              <li className="flex items-center gap-3 transition duration-200 hover:translate-x-1">
                <Package className="text-sky-500" size={20} />
                <span>Tracciamento consegne</span>
              </li>

              <li className="flex items-center gap-3 transition duration-200 hover:translate-x-1">
                <Euro className="text-sky-500" size={20} />
                <span>Totale incassi per Rider</span>
              </li>

              <li className="flex items-center gap-3 transition duration-200 hover:translate-x-1">
                <CreditCard className="text-sky-500" size={20} />
                <span>Pagamenti POS</span>
              </li>

              <li className="flex items-center gap-3 transition duration-200 hover:translate-x-1">
                <Map className="text-sky-500" size={20} />
                <span>Visualizzazione mappa</span>
              </li>

              <li className="flex items-center gap-3 transition duration-200 hover:translate-x-1">
                <BarChart3 className="text-sky-500" size={20} />
                <span>Statistiche giornaliere</span>
              </li>

              <li className="flex items-center gap-3 transition duration-200 hover:translate-x-1">
                <MapPin className="text-sky-500" size={20} />
                <span>Distanza percorsa</span>
              </li>

              <li className="flex items-center gap-3 transition duration-200 hover:translate-x-1">
                <Clock className="text-sky-500" size={20} />
                <span>Stato pagamento in tempo reale</span>
              </li>
            </ul>
            <a
              href="https://wa.me/393516679592?text=Salve%20sono%20interessato%20al%20piano%20Starter%20di%20PizzaTrack"
              target="_blank"
              rel="noreferrer"
              className="bg-sky-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-sky-600 transition"
            >
              Acquista
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sky-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Inizia subito a risparmiare tempo e soldi!
        </h2>
        <p className="mb-6">
          Prova PizzaTrack oggi e semplifica la gestione delle tue consegne.
        </p>
        <a
          href="https://wa.me/393516679592?text=Salve%20sono%20interessato%20a%20PizzaTrack%20e%20vorrei%20richiedere%20maggiori%20informazioni"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-sky-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
        >
          Richiedi Info
        </a>
      </section>
    </div>
  );
}
