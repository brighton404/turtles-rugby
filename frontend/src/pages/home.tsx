import { Support } from "../assets/components/ads/banners";
import Hero from "../assets/components/hero";
import { Layout1, Layout3, Layout4, Layout6 } from "../assets/components/layouts";

const home: React.FC = () => {

    return (
    <>
    <Hero />
    <Layout1 />
    <Layout6 />      
    <Layout4 />
    <Layout3 />  
    <Support />
    </>
    );
}
export default home;