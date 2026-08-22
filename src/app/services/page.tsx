import type { Metadata } from "next";
import Link from "next/link";
import { conditionsTreated, doctor, services } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Services",
  description: `Physiotherapy services offered by ${doctor.name} in ${doctor.serviceArea}, including neuro, ortho, post-surgical, sports injury, antenatal & postnatal, geriatric, and corporate physiotherapy.`,
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Services</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Comprehensive physiotherapy care for neurological, orthopaedic, post-surgical, and
        lifestyle-related conditions — available at the clinic, at home, and via
        tele-consultation.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.slug}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="font-semibold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold text-slate-900">Conditions Treated</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {conditionsTreated.map((condition) => (
            <div
              key={condition}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-medium text-slate-700"
            >
              {condition}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold text-teal-700">
          Physiotherapy Home Visit Available
        </p>
      </div>

      <div className="mt-16 rounded-2xl bg-teal-700 px-8 py-10 text-center text-white">
        <h2 className="text-2xl font-bold">Not Sure Which Service You Need?</h2>
        <p className="mx-auto mt-2 max-w-xl text-teal-50">
          Get in touch and Dr. Jethwa will help recommend the right course of treatment.
        </p>
        <Link
          href="/book-appointment"
          className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 hover:scale-105 transition-transform"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}
