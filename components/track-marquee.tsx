import { site } from "@/lib/site"

export default function TrackMarquee() {
  const items = [...site.tracks, ...site.tracks]

  return (
    <div className="overflow-hidden border-y border-border bg-muted/40" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 py-3 pr-10">
        {items.map((track, index) => (
          <span
            key={`${track}-${index}`}
            className="text-[11px] font-semibold tracking-[0.28em] text-muted-foreground uppercase"
          >
            {track}
            <span className="ml-10 text-[#7A3B3B] dark:text-[#A85C5C]">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
