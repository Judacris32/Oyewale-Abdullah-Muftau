import { cn } from "@/lib/cn";

/** Unit chart: 13 squares, one per ₦1 trillion. */
export function SmeGapChart({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={cn("rounded-[24px] bg-white shadow-soft", compact ? "p-7" : "p-8 sm:p-9")}>
      <figcaption className="mb-6">
        <p className="font-serif text-[22px] font-semibold">Nigeria&apos;s small business funding gap</p>
        <p className="mt-1.5 text-[14px] text-ink-muted">Each square is ₦1 trillion</p>
      </figcaption>
      <div className="mb-6 flex flex-wrap gap-10">
        <div>
          <p className="font-serif text-[46px] font-semibold leading-none">₦13tn</p>
          <p className="mt-1.5 text-[14px] font-semibold text-ink-soft">needed</p>
        </div>
        <div>
          <p className="font-serif text-[46px] font-semibold leading-none text-green-accent">₦1tn</p>
          <p className="mt-1.5 text-[14px] font-semibold text-ink-soft">actually lent</p>
        </div>
      </div>
      <div
        role="img"
        aria-label="Thirteen squares: one filled green for the one trillion naira lent, twelve dashed for the twelve trillion naira gap"
        className="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1.5"
      >
        {Array.from({ length: 13 }).map((_, i) => (
          <span
            key={i}
            className={cn("aspect-square rounded-md", i === 0 ? "bg-green-accent" : "border-[1.5px] border-dashed border-gold bg-[#FBF4E7]")}
          />
        ))}
      </div>
      <p className="mt-4 text-[14.5px] font-semibold text-gold-text">The dashed squares are the ₦12tn gap.</p>
      <p className="mt-4 border-t border-line pt-4 text-[12.5px] leading-relaxed text-ink-muted">
        Source: Development Bank of Nigeria MSME Data Insight Dashboard, as cited in my New Telegraph article.
      </p>
    </figure>
  );
}
