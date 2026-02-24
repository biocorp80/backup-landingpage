import { useSiteContentStore } from '../../store/siteContentStore';

const colorMap: Record<string, string> = {
  teal: 'text-teal-400',
  blue: 'text-blue-400',
  violet: 'text-violet-400',
  orange: 'text-orange-400',
};

const AnnouncementBar = () => {
  const { content } = useSiteContentStore();
  const { announcement } = content;

  if (!announcement.enabled || announcement.items.length === 0) return null;

  // Duplicate items for seamless infinite scroll
  const items = announcement.items;

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-slate-900 to-teal-900 text-white py-2 overflow-hidden mt-[60px] sm:mt-16 relative z-30">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center gap-10 px-10">
            {items.map((item, i) => (
              <p key={`${set}-${i}`} className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className={colorMap[item.color] ?? 'text-teal-400'}>{item.emoji}</span> {item.text}
              </p>
            ))}
            {items.map((item, i) => (
              <p key={`${set}-dup-${i}`} className="text-[11px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className={colorMap[item.color] ?? 'text-teal-400'}>{item.emoji}</span> {item.text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;