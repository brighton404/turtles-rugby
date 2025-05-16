import { Tab, Tabs } from "@/assets/components/tabs";
import Blog from "./blog/blog";
import PostTable from "./blog/lib/postTable";
import { Articles } from "@/assets/components/ads/banners";

const news: React.FC = () => {
    return (
    <>
    <div className="space"></div>
    <Articles/>
    <div className="news">        
        <Tabs>
            <Tab label="Cards" tabId="newsCard-tab">
                <><Blog /></>
            </Tab>
            <Tab label="Table" tabId="newsTable-tab">
                <><PostTable /></>
            </Tab>
        </Tabs> 
    </div>
    </>
    );
   }
   export default news;