import { useEffect } from "react";
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
import ClubManagement from "./assets/components/ads/manageClub";

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
        metaDescription = "";
        break;
      case "/about":
        title = "about the club";
        metaDescription = "";
        break;
      case "/events":
        title = "upcoming events";
        metaDescription = "";
        break;
      case "/news":
        title = "updates";
        metaDescription = "";
        break;
        case "/news/:id":
          title = "article";
          metaDescription = "";
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
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<BlogPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/management" element={<Teams variant="management" />} />
        <Route path="/Mens-team" element={<Teams variant="mens team" />} />
        <Route path="/Womens-team" element={<Teams variant="womens team" />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
        <Route path="/membership" element={<JoinForm />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/partners" element={<Partner />} />
        <Route path="/:ClubManagement" element={<ClubManagement />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    <Footer />
    </QueryClientProvider>
    </>
  );
}
export default App;