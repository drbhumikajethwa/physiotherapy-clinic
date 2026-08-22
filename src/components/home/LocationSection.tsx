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
          </div>
          <div className="flex h-48 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 text-sm text-slate-500">
            Map coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
