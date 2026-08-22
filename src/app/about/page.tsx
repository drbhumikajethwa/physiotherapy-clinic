import type { Metadata } from "next";
import Image from "next/image";
import { doctor, whyChooseUs } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${doctor.name}, ${doctor.qualification}, a Consultant Physiotherapist with ${doctor.experience.toLowerCase()} serving ${doctor.serviceArea}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">About the Physiotherapist</h1>

      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
        <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full ring-4 ring-teal-100 md:mx-0">
          <Image
            src="/images/dr-bhumika-jethwa.jpg"
            alt={doctor.name}
            fill
            sizes="10rem"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">{doctor.name}</h2>
          <p className="mt-1 text-teal-700">{doctor.qualification}</p>
          <p className="text-slate-600">{doctor.title}</p>
          <p className="mt-2 font-semibold text-slate-900">{doctor.experience}</p>

          <div className="mt-6 space-y-4 text-slate-700">
            {doctor.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-slate-900">Why Patients Choose Dr. Jethwa</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h4 className="font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
