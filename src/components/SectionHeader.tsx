import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  accentColor?: string;
}

const SectionHeader = ({ 
  icon, 
  title, 
  subtitle, 
  viewAllLink, 
  accentColor = "text-primary" 
}: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-3">
        <div className={`${accentColor}`}>
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          )}
        </div>
      </div>
      
      {viewAllLink && (
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default SectionHeader;