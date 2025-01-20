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
import { showConsoleMeme } from "./console";
import Sponsor from "./pages/community/sponsors";

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
  showConsoleMeme();
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
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/events":
        title = "";
        metaDescription = "";
        break;
      case "/news":
        title = "";
        metaDescription = "";
        break;
        case "/news/:id":
          title = "";
          metaDescription = "";
          break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
        case "/sponsor":
          title = "";
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
        <Route path="/community" element={<Community />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    <Footer />
    </QueryClientProvider>
    </>
  );
}
export default App;