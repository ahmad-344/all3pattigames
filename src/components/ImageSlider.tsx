import { useState, useEffect, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { games } from "@/data/games";

// Only use games that have custom slider images
const slides = games
  .filter((game) => game.customSliderImage)
  .slice(0, 8)
  .map((game) => ({
    image: game.customSliderImage!,
    game,
  }));

const ImageSlider = memo(() => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => { clearInterval(interval); emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div className="relative rounded-lg overflow-hidden mb-6">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => {
            const game = slide.game;
            const gameIcon = game.customLogo!;
            return (
              <Link key={i} to={`/games/${game.id}`} className="flex-[0_0_100%] min-w-0 relative block">
                <img
                  src={slide.image}
                  alt={`${game.id}-slider`}
                  width={800}
                  height={256}
                  className="w-full h-48 sm:h-64 object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "low"}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-end gap-3">
                  <img src={gameIcon} alt={`${game.id}-logo`} width={48} height={48} className="w-12 h-12 rounded-lg border-2 border-white/50 flex-shrink-0" loading="lazy" />
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{game.name} APK</h3>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} className={s <= Math.round(game.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-1.5 hover:bg-card z-10" aria-label="Previous">
        <ChevronLeft size={20} />
      </button>
      <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 rounded-full p-1.5 hover:bg-card z-10" aria-label="Next">
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-2 right-4 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === current ? "bg-primary" : "bg-white/60"}`} />
        ))}
      </div>
    </div>
  );
});

ImageSlider.displayName = "ImageSlider";

export default ImageSlider;
