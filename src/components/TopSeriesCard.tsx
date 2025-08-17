import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface TopSeriesCardProps {
  rank: number;
  title: string;
  subtitle?: string;
  image: string;
  tags: Array<{
    name: string;
    genre?: "Fantasy" | "Action" | "Romance" | "Mystery" | "SciFi" | "Horror" | "Adventure" | "Drama" | "Overpowered" | "Regression" | "Ascension" | "Psychological" | "Isekai";
  }>;
  className?: string;
}

const TopSeriesCard = ({ 
  rank, 
  title, 
  subtitle,
  image, 
  tags,
  className = "" 
}: TopSeriesCardProps) => {
  const getRankTextColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-yellow-400 font-extrabold";
      case 2:
        return "text-gray-300 font-bold";
      case 3:
        return "text-amber-500 font-bold";
      case 4:
        return "text-blue-400 font-semibold";
      case 5:
        return "text-purple-400 font-semibold";
      case 6:
        return "text-green-400 font-semibold";
      case 7:
        return "text-red-400 font-semibold";
      case 8:
        return "text-pink-400 font-semibold";
      case 9:
        return "text-indigo-400 font-semibold";
      default:
        return "text-foreground font-bold";
    }
  };


  const getGenreStyles = (genre: string) => {
    switch (genre.toLowerCase()) {
      case "fantasy":
        return "bg-genre-fantasy text-genre-fantasy-text border-genre-fantasy";
      case "action":
        return "bg-genre-action text-genre-action-text border-genre-action";
      case "romance":
        return "bg-genre-romance text-genre-romance-text border-genre-romance";
      case "mystery":
        return "bg-genre-mystery text-genre-mystery-text border-genre-mystery";
      case "scifi":
        return "bg-genre-scifi text-genre-scifi-text border-genre-scifi";
      case "horror":
        return "bg-genre-horror text-genre-horror-text border-genre-horror";
      case "adventure":
        return "bg-genre-adventure text-genre-adventure-text border-genre-adventure";
      case "drama":
        return "bg-genre-drama text-genre-drama-text border-genre-drama";
      default:
        return "bg-muted text-muted-foreground border-muted";
    }
  };

  return (
    <div className={`group flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card-hover transition-colors duration-200 ${className}`}>
      {/* Rank Number */}
      <div className={`text-4xl w-12 text-center ${getRankTextColor(rank)}`}>
        {rank}
      </div>
      
      {/* Book Cover */}
      <div className="relative overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title}
          className="w-16 h-20 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
        />
        {/* Read Icon Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary rounded-full p-1.5 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <BookOpen className="h-3 w-3 text-primary-foreground" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-foreground font-semibold text-base leading-tight mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-muted-foreground text-sm mb-2">
            {subtitle}
          </p>
        )}
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 rounded-md border ${getGenreStyles(tag.name)}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSeriesCard;