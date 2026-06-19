import { Link } from "react-router-dom";
import { Game } from "@/data/games";
import GameCard from "./GameCard";

interface GameSectionProps {
  title: string;
  games: Game[];
  moreLink?: string;
  maxItems?: number;
}

const GameSection = ({ title, games, moreLink, maxItems = 9 }: GameSectionProps) => {
  const displayed = games.slice(0, maxItems);
  if (displayed.length === 0) return null;

  return (
    <section className="mb-5 sm:mb-6">
      <div className="flex justify-between items-center mb-2 sm:mb-3 border-b border-border pb-2">
        <h2 className="font-bold text-sm sm:text-base">{title}</h2>
        {moreLink && (
          <Link to={moreLink} className="text-xs text-link hover:underline">More »</Link>
        )}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-1">
        {displayed.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </section>
  );
};

export default GameSection;
