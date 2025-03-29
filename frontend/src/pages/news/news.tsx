import { NewsLetter } from "@/assets/components/ads/banners";
import Blog from "./blog/blog";

const news: React.FC = () => {
    return (
    <div className="news">
        <div className="space"></div>
        <NewsLetter />
        <Blog />
    </div>);
   }
   export default news;