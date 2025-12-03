import { useState } from "react";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";

interface AdminPageProps {
  onBack?: () => void;
}

export default function AdminPage({ onBack }: AdminPageProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (data: { username: string; password: string }) => {
    // todo: remove mock functionality - replace with real API call
    if (data.username === "admin" && data.password === "admin") {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    onBack?.();
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} onBack={onBack} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
}
