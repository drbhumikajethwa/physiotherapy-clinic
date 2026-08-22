import type { Metadata } from "next";
import { contact, doctor } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: `Book an appointment with ${doctor.name} in ${doctor.serviceArea} — clinic visit, home visit, or tele-consultation.`,
};

export default function BookAppointmentPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Book an Appointment</h1>
      <p className="mt-3 text-slate-600">
        Online appointment booking is coming soon. Until then, please call or email to
        schedule a clinic visit, home visit, or tele-consultation.
      </p>

      <div className="mt-10 space-y-4">
        <a
          href={contact.phoneHref}
          className="block rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
        >
          <h2 className="font-semibold text-slate-900">Call to Book</h2>
          <p className="mt-2 text-lg font-semibold text-teal-700">{contact.phone}</p>
        </a>

        <a
          href={`mailto:${contact.email}?subject=Appointment%20Request`}
          className="block rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
        >
          <h2 className="font-semibold text-slate-900">Email to Book</h2>
          <p className="mt-2 text-lg font-semibold text-teal-700">{contact.email}</p>
        </a>
      </div>

      <div className="mt-10 rounded-xl bg-slate-50 p-6 text-sm text-slate-600">
        <p>
          Please mention your name, contact number, and the condition you would like to
          discuss so Dr. Jethwa can prepare for your appointment.
        </p>
      </div>
    </div>
  );
}
