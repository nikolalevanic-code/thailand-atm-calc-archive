import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BlogIndex from "./pages/blog/BlogIndex";
import ThailandAtmFees from "./pages/blog/ThailandAtmFees";
import ThailandAtmWithdrawalLimit from "./pages/blog/ThailandAtmWithdrawalLimit";
import ThailandAtmNoFee from "./pages/blog/ThailandAtmNoFee";
import BestAtmThailand from "./pages/blog/BestAtmThailand";
import WiseRevolutThailand from "./pages/blog/WiseRevolutThailand";
import HowMuchCashThailand from "./pages/blog/HowMuchCashThailand";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/thailand-atm-fees"} component={ThailandAtmFees} />
      <Route path={"/blog/thailand-atm-withdrawal-limit"} component={ThailandAtmWithdrawalLimit} />
      <Route path={"/blog/thailand-atm-no-fee"} component={ThailandAtmNoFee} />
      <Route path={"/blog/best-atm-thailand-foreigners"} component={BestAtmThailand} />
      <Route path={"/blog/wise-revolut-thailand"} component={WiseRevolutThailand} />
      <Route path={"/blog/how-much-cash-thailand"} component={HowMuchCashThailand} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
