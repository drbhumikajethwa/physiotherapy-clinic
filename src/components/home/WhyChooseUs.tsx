import { whyChooseUs } from "@/lib/clinic-data";

export default function WhyChooseUs() {
  return (
    <section className="bg-teal-700 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-100">
            Why Choose Us
          </h2>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Committed to Your Recovery
          </h3>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-xl bg-white/10 p-6">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-teal-50">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
