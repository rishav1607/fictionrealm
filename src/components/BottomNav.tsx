import { NavLink } from "react-router-dom";
import { Home, Compass, Library, User } from "lucide-react";

const BottomNav = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto max-w-7xl">
        <ul className="grid grid-cols-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-3 text-sm ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              <Home className="h-5 w-5 mb-1" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-3 text-sm ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              <Compass className="h-5 w-5 mb-1" />
              <span>Discover</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/library"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-3 text-sm ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              <Library className="h-5 w-5 mb-1" />
              <span>Library</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-3 text-sm ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              <User className="h-5 w-5 mb-1" />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BottomNav;


