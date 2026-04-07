export default function DeliverySystem() {
  return (
    <div className="bg-gray-50 font-sans">
      <section className="bg-yellow-500 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">PizzaTrack 🍕🛵</h1>
        <p className="text-xl md:text-2xl mb-6">
          Il gestionale per pizzerie che traccia le consegne, calcola i ricavi
          dei rider e ti fa risparmiare tempo!
        </p>
        <a
          href="#pricing"
          className="bg-white text-yellow-500 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Scopri i piani
        </a>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Perché scegliere PizzaTrack
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Tracciamento consegne
            </h3>
            <p>
              Visualizza tutte le consegne dei tuoi rider in tempo reale e su
              una mappa intuitiva.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Totale incassi e POS</h3>
            <p>
              Calcola automaticamente i ricavi dei rider e controlla quali
              consegne sono già pagate.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Statistiche avanzate</h3>
            <p>
              Controlla la distanza percorsa dai rider, ottieni report chiari e
              immediati.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Come funziona</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                1. Aggiungi i rider
              </h3>
              <p>Registra i tuoi rider e le loro consegne giornaliere.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                2. Traccia le consegne
              </h3>
              <p>
                Visualizza le consegne su mappa e monitora l’incasso in tempo
                reale.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Ottieni report</h3>
              <p>Genera statistiche e totale incassi per ciascun rider.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-20 max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Piani e Prezzi</h2>
        <div className="flex justify-center gap-12">
          <div className="bg-white border border-amber-300 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <p className="mb-4">Tutte le funzioni base per pizzerie piccole</p>
            <p className="text-2xl font-bold mb-6">79€/mese</p>
            <ul className="mb-6 text-left">
              <li>✅ Tracciamento consegne</li>
              <li>✅ Totale incassi per Rider</li>
              <li>✅ Opzione Pagamenti col pos</li>
              <li>✅ Visualizzazione mappa</li>
              <li>✅ Statistiche giornaliere</li>
              <li>✅ Distanza percorsa</li>
              <li>✅ Stato pagamento in tempo reale</li>
            </ul>
            <a
              href="https://wa.me/393516679592?text=Salve%20sono%20interessato%20al%20piano%20Starter%20di%20PizzaTrack"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Acquista
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-500 text-white text-center">
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
          className="bg-white text-yellow-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
        >
          Richiedi Info
        </a>
      </section>
    </div>
  );
}
