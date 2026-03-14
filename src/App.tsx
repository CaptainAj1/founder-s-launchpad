import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { StoreProvider } from "@/lib/store";
import Index from "./pages/Index";
import Founders from "./pages/Founders";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AdminSignIn from "./pages/admin/AdminSignIn";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminBlogEditor from "./pages/admin/AdminBlogEditor";
import AdminPages from "./pages/admin/AdminPages";
import AdminPagesEditor from "./pages/admin/AdminPagesEditor";
import AdminSEO from "./pages/admin/AdminSEO";
import AdminKeywords from "./pages/admin/AdminKeywords";
import AdminSettings from "./pages/admin/AdminSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <TooltipProvider>
        <Sonner />
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/founders" component={Founders} />
          <Route path="/blog" component={BlogIndex} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/admin/sign-in" component={AdminSignIn} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/admin/blog" component={AdminBlog} />
          <Route path="/admin/blog/:id" component={AdminBlogEditor} />
          <Route path="/admin/pages" component={AdminPages} />
          <Route path="/admin/pages/:id" component={AdminPagesEditor} />
          <Route path="/admin/seo" component={AdminSEO} />
          <Route path="/admin/keywords" component={AdminKeywords} />
          <Route path="/admin/settings" component={AdminSettings} />
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </StoreProvider>
  </QueryClientProvider>
);

export default App;
