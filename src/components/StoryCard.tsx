import { BookOpen } from "lucide-react";

interface StoryCardProps {
  title: string;
  image: string;
  chapter?: string;
  timeAgo?: string;
  className?: string;
  compact?: boolean;
}

const StoryCard = ({ 
  title, 
  image, 
  chapter,
  timeAgo,
  className = "",
  compact = false
}: StoryCardProps) => {
  return (
    <div className={`group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col ${compact ? 'h-auto' : ''} ${className}`}>
      <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Read Icon Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </div>
      
      <div className={`p-3 ${compact ? 'h-auto min-h-[80px]' : 'h-[100px]'} flex flex-col justify-between`}>
        <h3 className={`font-medium text-foreground leading-tight ${compact ? 'text-xs line-clamp-2' : 'text-sm truncate'}`}>
          {title}
        </h3>
        
        <div className="space-y-1">
          {chapter && (
            <p className="text-xs text-muted-foreground">
              {chapter}
            </p>
          )}
          
          {timeAgo && (
            <p className="text-xs text-muted-foreground">
              {timeAgo}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;