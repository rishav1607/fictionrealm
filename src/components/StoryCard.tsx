interface StoryCardProps {
  title: string;
  image: string;
  chapter?: string;
  timeAgo?: string;
  className?: string;
}

const StoryCard = ({ 
  title, 
  image, 
  chapter,
  timeAgo,
  className = "" 
}: StoryCardProps) => {
  return (
    <div className={`group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col ${className}`}>
      <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-3 h-[100px] flex flex-col justify-between">
        <h3 className="font-medium text-sm text-foreground truncate leading-tight">
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