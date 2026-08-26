import { contact } from "@/lib/clinic-data";

export default function LocationSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Location
            </h2>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Serving {contact.serviceArea}
            </h3>
            <p className="mt-4 text-slate-700">
              Consultations available at partner clinics and hospitals across Ahmedabad,
              plus home visits and tele-consultation for patients who cannot travel.
            </p>
            <p className="mt-4 text-sm text-slate-600">{contact.address}</p>
            <a
              href={contact.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Get Directions →
            </a>
          </div>
          <div className="h-64 overflow-hidden rounded-xl border border-slate-200 md:h-80">
            <iframe
              src={contact.mapEmbedUrl}
              title={`Map to ${contact.address}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
