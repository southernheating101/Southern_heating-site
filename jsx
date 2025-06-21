export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-slate-900 text-white">
        <h1 className="text-4xl font-bold">Southern Heating Solutions</h1>
        <p className="text-lg mt-2 italic">PRECISION. HEAT. TRUSTED. FLOW.</p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-slate-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            'Boiler Installation',
            'Boiler Repairs',
            'Emergency Plumbing (24/7)',
            'Radiators & Pipework',
            'Landlord Gas Safety Certificates',
            'General Plumbing',
          ].map(service => (
            <li key={service} className="bg-white p-4 shadow rounded">{service}</li>
          ))}
        </ul>
      </section>

      {/* About Us */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-lg">
          I'm a qualified plumbing & heating engineer operating locally in Kingston and Surrey.
          Whether it's a leaking pipe, a boiler breakdown, or a full heating system — I'm here to help, 24/7.
        </p>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 bg-slate-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <div className="text-center space-y-2 text-lg">
          <p>
            📧 Email: <a className="text-blue-600 underline" href="mailto:info@southernheatingsolutions.co.uk">info@southernheatingsolutions.co.uk</a>
          </p>
          <p>
            📞 Phone: <a className="text-blue-600 underline" href="tel:+447912345678">07912 345 678</a>
          </p>
          <p>
            💬 WhatsApp: <a className="text-blue-600 underline" href="https://wa.me/447912345678">Chat Now</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-slate-500 bg-white">
        &copy; {new Date().getFullYear()} Southern Heating Solutions. All rights reserved.
      </footer>
    </main>
  );
}