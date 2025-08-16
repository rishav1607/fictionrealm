import { Button } from "@/components/ui/button";
import { Search, BookOpen, Home, Compass, Library } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">
                FictionRealm
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Compass className="h-4 w-4 mr-2" />
                Discover
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                <Library className="h-4 w-4 mr-2" />
                Library
              </Button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search stories..."
                  className="pl-10 pr-4 py-2 w-64 rounded-md bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
              </div>
            </div>
            
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;