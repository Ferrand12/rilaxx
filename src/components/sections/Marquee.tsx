export default function Marquee() {
  const items = [
    "Follow the Foxx",
    "Chill & Drink",
    "Wilder Times",
    "Zorro Vibes, Zero Stress",
    "Drink First, Blame It Later",
    "Chill Out & Take It Easy",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="bg-rilaxx-purple overflow-hidden py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((text, i) => (
          <span key={i} className="flex items-center">
            <span className="font-black uppercase text-sm md:text-base tracking-widest text-white px-6">
              {text}
            </span>
            <span className="text-rilaxx-yellow text-lg">&#x2716;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
