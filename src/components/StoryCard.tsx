import { Badge } from "@/components/ui/badge";
import { Eye, Users, MessageSquare } from "lucide-react";

interface StoryCardProps {
  title: string;
  image: string;
  chapters?: number;
  views?: number;
  comments?: number;
  status?: "new" | "trending" | "popular" | "latest";
  className?: string;
}

const StoryCard = ({ 
  title, 
  image, 
  chapters = 0, 
  views = 0, 
  comments = 0, 
  status,
  className = "" 
}: StoryCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "trending":
        return "bg-trending text-black";
      case "new":
        return "bg-new text-black";
      case "popular":
        return "bg-popular";
      case "latest":
        return "bg-latest";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className={`group relative bg-gradient-card rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {status && (
          <Badge className={`absolute top-3 left-3 ${getStatusColor()} border-none text-xs font-semibold`}>
            #{chapters || 1}
          </Badge>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center justify-between text-xs text-white/80">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Eye className="h-3 w-3" />
                <span>{views.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageSquare className="h-3 w-3" />
                <span>{comments}</span>
              </div>
            </div>
            <div className="text-xs text-white/60">
              {chapters} chapters
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;