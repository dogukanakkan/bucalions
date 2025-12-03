import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/Home";
import AdminPage from "@/pages/Admin";

function Router() {
  const [, setLocation] = useLocation();

  return (
    <Switch>
      <Route path="/">
        <HomePage onAdminClick={() => setLocation("/admin")} />
      </Route>
      <Route path="/admin">
        <AdminPage onBack={() => setLocation("/")} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
