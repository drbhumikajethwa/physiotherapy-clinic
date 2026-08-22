import Link from "next/link";
import { contact } from "@/lib/clinic-data";

export default function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-2xl bg-gradient-to-br from-teal-700 to-emerald-600 px-8 py-12 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready to Start Your Recovery?</h2>
        <p className="mx-auto mt-3 max-w-xl text-teal-50">
          Get in touch to book a consultation, clinic visit, home visit, or
          tele-consultation with Dr. Bhumika Jethwa.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/book-appointment"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 hover:scale-105 transition-transform"
          >
            Book an Appointment
          </Link>
          <a
            href={contact.phoneHref}
            className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Call {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
