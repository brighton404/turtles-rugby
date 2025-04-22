import { Tab, Tabs } from "@/assets/components/tabs";
import Blog from "./blog/blog";
import PostTable from "./blog/lib/postTable";
import { Articles } from "@/assets/components/ads/banners";

const news: React.FC = () => {
    return (
    <>
    <div className="space"></div>
    <Articles/>
    <div className="news z-index-2">        
        <Tabs>
            <Tab label="Cards">
                <><Blog /></>
            </Tab>
            <Tab label="Table">
                <><PostTable /></>
            </Tab>
        </Tabs> 
    </div>
    </>
    );
   }
   export default news;