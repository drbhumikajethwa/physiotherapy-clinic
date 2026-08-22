import Link from "next/link";
import { specializations } from "@/lib/clinic-data";

export default function ServicesPreview() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Services
          </h2>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Comprehensive Physiotherapy Care
          </h3>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specializations.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h4 className="font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-block rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
