import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/about/about";
import Community from "./pages/community/community";
import Events from "./pages/events/events";
import Home from "./pages/home";
import News from "./pages/news/news";
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./pages/news/blog/lib/queryClient";
import { BlogPage } from "./pages/news/blog/lib/postWrap";
import NotFound from "./pages/error";
import Sponsor from "./pages/community/sponsors";
import Partner from "./pages/community/partners";
import Teams from "./pages/about/teams/teams";
import MentorshipPage from "./pages/community/Mentorship";
import JoinForm from "./assets/components/ads/joinClub";
import LoadingScreen from "@/utils/loader";
import { SidebarProvider } from "./assets/components/extend/sidebarContext";
import Apply from "./pages/apply";

function App() {
  
  useEffect(() => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, JSON.parse(scrollPosition));
      localStorage.removeItem('scrollPosition');
    }

    const handleBeforeUnload = () => {
      localStorage.setItem('scrollPosition', JSON.stringify(window.scrollY));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  

  useEffect(() => {
    if (import.meta.env.DEV) {
      setInterval(() => {
        const overlay = document.getElementById("inConstruction");
        if (overlay && overlay.style.display === "none") {
          overlay.style.display = "block";
        }
      }, 1000);
    }
  }, []);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Malindi Turtles Rugby Club";
        metaDescription = "Malindi Turtles Rugby Club is a vibrant hub of rugby passion and camaraderie located in the heart of Malindi. We are committed to fostering a love for the game while developing players of all ages and skill levels.";
        break;
      case "/about":
        title = "about the club";
        metaDescription = "Learn about the malindi turtles rugby club";
        break;
      case "/events":
        title = "upcoming events";
        metaDescription = "Get updates on upcoming club events";
        break;
      case "/news":
        title = "updates";
        metaDescription = "Get updates on post club events";
        break;
        case "/news/:id/:title":
          break;
        case "/management":
          title = "Club Management";
          metaDescription = "";
          break;
      case "/mens-team":
        title = "mens team";
        metaDescription = "";
        break;
      case "/momens-team":
        title = "womens team";
        metaDescription = "";
        break;
      case "/community":
        title = "community";
        metaDescription = "";
        break;
      case "/mentorship":
        title = "mentorship";
        metaDescription = "";
        break;
      case "/membership":
        title = "membership";
        metaDescription = "";
        break;
      case "/sponsor":
          title = "sponsors";
          metaDescription = "";
         break;
        case "/partners":
        title = "partners";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id/:title" element={<BlogPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/management" element={<Teams variant="management" />} />
          <Route path="/Mens-team" element={<Teams variant="mens team" />} />
          <Route path="/Womens-team" element={<Teams variant="womens team" />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/membership" element={<JoinForm />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      <Footer />
      </SidebarProvider>
    </QueryClientProvider>
    </>
  );
}
export default App;