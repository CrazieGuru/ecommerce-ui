import NavItem from "./NavItems";
import { useAuth } from "../auth/AuthContext";

export default function Sidebar() {
  const { isGuest } = useAuth();

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <nav className="space-y-2">
        <NavItem to="/" label="Dashboard" />

        {!isGuest && (
          <>
            <NavItem to="/orders" label="Orders" />
            <NavItem to="/profile" label="Profile" />
          </>
        )}

        {isGuest && (
          <NavItem to="/explore" label="Explore Products" />
        )}
      </nav>
    </aside>
  );
}
