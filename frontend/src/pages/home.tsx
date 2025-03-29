import { Support } from "../assets/components/ads/banners";
import Hero from "../assets/components/hero";
import { Layout1, Layout2 } from "../assets/components/layouts";

const home: React.FC = () => {

    return (
    <>
    <Hero />
    <Layout1 />
    <Layout2 />
    <Support />
    </>
    );
}
export default home;