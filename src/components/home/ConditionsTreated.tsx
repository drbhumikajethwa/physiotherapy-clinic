import { conditionsTreated } from "@/lib/clinic-data";

export default function ConditionsTreated() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Conditions Treated
        </h2>
        <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          Treatments We Offer
        </h3>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {conditionsTreated.map((condition) => (
          <div
            key={condition}
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700"
          >
            {condition}
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm font-semibold text-teal-700">
        Physiotherapy Home Visit Available
      </p>
    </section>
  );
}
