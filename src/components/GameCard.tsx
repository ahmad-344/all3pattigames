import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
  compact?: boolean;
}

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} size={10} className={s <= Math.round(rating) ? "text-star fill-current" : "text-muted-foreground"} />
    ))}
  </div>
);

const GameCard = ({ game, compact }: GameCardProps) => {
  const icon = game.customLogo!;
  const iconAlt = `${game.id}-logo`;

  if (compact) {
    return (
      <Link to={`/games/${game.id}`} className="flex items-center gap-3 py-2 hover:bg-secondary rounded px-2 transition-colors">
        <img src={icon} alt={iconAlt} width={40} height={40} className="w-10 h-10 rounded-lg object-cover" loading="lazy" />
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold truncate">{game.name}</h4>
          <RatingStars rating={game.rating} />
          <p className="text-xs text-muted-foreground truncate">{game.developer}</p>
        </div>
      </Link>
    );
  }

  return (
    <>
      {/* Mobile: grid card with icon, name, date */}
      <Link to={`/games/${game.id}`} className="flex sm:hidden flex-col items-center text-center p-1.5 hover:bg-secondary rounded transition-colors">
        <img src={icon} alt={iconAlt} width={64} height={64} className="w-16 h-16 rounded-xl object-cover" loading="lazy" />
        <h3 className="text-xs font-semibold truncate w-full mt-1">{game.name}</h3>
        <p className="text-[10px] text-muted-foreground truncate w-full">{game.updateDate}</p>
      </Link>

      {/* Desktop: row card */}
      <Link to={`/games/${game.id}`} className="hidden sm:flex items-start gap-3 p-2 hover:bg-secondary rounded transition-colors">
        <img src={icon} alt={iconAlt} width={56} height={56} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" loading="lazy" />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold truncate">{game.name}</h3>
          <p className="text-xs text-muted-foreground truncate">{game.developer}</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
            <RatingStars rating={game.rating} />
            <span>{game.rating}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GameCard;
