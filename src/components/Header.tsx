import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Search, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "People", path: "/people" },
    { label: "Hiring", path: "/hiring" },
    { label: "Salary", path: "/salary" },
    { label: "Reviews", path: "/reviews" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">GIGFLOWW</div>
          </div>

          <nav className="flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                className={cn(
                  "text-white hover:bg-white/20 font-medium px-4 py-2 rounded-full",
                  location.pathname === item.path && "bg-white/20"
                )}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        {/* Right side - Search, Notifications, Profile, Logout */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              4
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full"
          >
            <Settings className="h-5 w-5" />
          </Button>

          <Avatar className="h-10 w-10 border-2 border-white/20">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-white/20 text-white">NG</AvatarFallback>
          </Avatar>

          {/* Logout Button */}
          <Button
            variant="ghost"
            size="icon"
            title="Logout"
            onClick={handleLogout}
            className="text-white hover:bg-white/20 rounded-full"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
