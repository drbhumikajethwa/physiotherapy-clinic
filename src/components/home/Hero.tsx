import Image from "next/image";
import Link from "next/link";
import { contact, doctor } from "@/lib/clinic-data";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-teal-700 to-emerald-600 text-white">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:py-24">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-100">
            Physiotherapy in {doctor.serviceArea}
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {doctor.name}
          </h1>
          <p className="mt-2 text-lg text-teal-50">
            {doctor.qualification} · {doctor.title}
          </p>
          <p className="mt-4 text-lg font-medium text-teal-50">{doctor.experience}</p>
          <p className="mt-4 max-w-xl text-teal-50">{doctor.tagline}</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="/book-appointment"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-700 shadow-sm transition-transform hover:scale-105"
            >
              Book an Appointment
            </Link>
            <a
              href={contact.phoneHref}
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call {contact.phone}
            </a>
          </div>

          <p className="mt-4 text-sm text-teal-100">
            Available for clinic visits, home visits &amp; tele-consultation
          </p>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full ring-4 ring-white/30 sm:h-72 sm:w-72">
            <Image
              src="/images/dr-bhumika-jethwa.jpg"
              alt={doctor.name}
              fill
              sizes="(min-width: 640px) 18rem, 14rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
