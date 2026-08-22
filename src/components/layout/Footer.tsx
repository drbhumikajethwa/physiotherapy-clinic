import Link from "next/link";
import { contact, doctor } from "@/lib/clinic-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">{doctor.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{doctor.qualification}</p>
          <p className="text-sm text-slate-400">{doctor.title}</p>
          <p className="mt-3 text-sm text-slate-400">
            Serving patients across {doctor.serviceArea} — clinic, home visits, and
            tele-consultation.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/book-appointment" className="hover:text-white">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={contact.phoneHref} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram {contact.instagramHandle}
              </a>
            </li>
            <li className="text-slate-400">{contact.serviceArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {doctor.name}. All rights reserved.
      </div>
    </footer>
  );
}
