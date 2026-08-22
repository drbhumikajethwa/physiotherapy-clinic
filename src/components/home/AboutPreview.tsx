import Link from "next/link";
import { doctor } from "@/lib/clinic-data";

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            About the Physiotherapist
          </h2>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {doctor.name}
          </h3>
          <p className="mt-1 text-slate-600">
            {doctor.qualification} · {doctor.title}
          </p>
          <p className="mt-4 text-slate-700">{doctor.bio[0]}</p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            Learn more about Dr. Jethwa →
          </Link>
        </div>

        <div className="rounded-2xl bg-slate-50 p-8">
          <ul className="space-y-4 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
              {doctor.experience}
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
              Associated with multiple hospitals &amp; clinics in {doctor.serviceArea}
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
              Home visits &amp; tele-consultation available
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
              Corporate physiotherapy &amp; ergonomics consulting
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
