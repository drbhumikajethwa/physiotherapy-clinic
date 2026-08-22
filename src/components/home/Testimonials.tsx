import { testimonials } from "@/lib/clinic-data";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Testimonials
        </h2>
        <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          What Patients Say
        </h3>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="rounded-xl border border-slate-200 bg-slate-50 p-6"
          >
            <p className="text-sm italic text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-slate-900">
              — {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
