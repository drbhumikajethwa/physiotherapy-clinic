import Link from "next/link";
import { contact } from "@/lib/clinic-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-slate-900">Dr. Bhumika Jethwa</span>
          <span className="text-xs text-teal-700">Consultant Physiotherapist</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-teal-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contact.phoneHref}
            className="hidden text-sm font-semibold text-teal-700 sm:inline"
          >
            {contact.phone}
          </a>
          <Link
            href="/book-appointment"
            className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <nav className="flex justify-center gap-6 border-t border-slate-100 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-medium text-slate-700 hover:text-teal-700"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
