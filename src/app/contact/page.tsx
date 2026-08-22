import type { Metadata } from "next";
import { contact, doctor } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${doctor.name} in ${doctor.serviceArea} — phone, email, and Instagram.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact</h1>
      <p className="mt-3 text-slate-600">
        Reach out for clinic visits, home visits, or tele-consultation in{" "}
        {contact.serviceArea}.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href={contact.phoneHref}
          className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
        >
          <h2 className="font-semibold text-slate-900">Phone</h2>
          <p className="mt-2 text-teal-700">{contact.phone}</p>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
        >
          <h2 className="font-semibold text-slate-900">Email</h2>
          <p className="mt-2 text-teal-700">{contact.email}</p>
        </a>

        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
        >
          <h2 className="font-semibold text-slate-900">WhatsApp</h2>
          <p className="mt-2 text-teal-700">{contact.phone}</p>
        </a>

        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
        >
          <h2 className="font-semibold text-slate-900">Instagram</h2>
          <p className="mt-2 text-teal-700">{contact.instagramHandle}</p>
        </a>
      </div>

      <div className="mt-10 rounded-xl bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">Service Area</h2>
        <p className="mt-2 text-slate-600">{contact.serviceArea}</p>
        <p className="mt-1 text-sm text-slate-500">
          Associated with multiple hospitals &amp; clinics in Ahmedabad.
        </p>
      </div>
    </div>
  );
}
