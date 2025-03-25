import AddCalendar from "@/assets/components/ads/addCalendar";
import Blog from "./blog/blog";

const news: React.FC = () => {
    return (
    <div className="news">
        <AddCalendar />
        <Blog />
    </div>);
   }
   export default news;