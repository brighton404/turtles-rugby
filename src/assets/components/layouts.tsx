import { LayoutCard } from "@/pages/news/extend/card";
import TestimonialClub from "./testimonial";

export default function layout() {
    return (
    <div className="layouts">
        <h2>layout default</h2>
    </div>
    )
}
{/**Homepage */}
export const Layout1 = () => {
    return (
    <div className="column layouts FAQDiv">
        <div className=" row spread m-column">
            <div className="column flex-spread">
                <span className="Tagline no_margins">FAQ</span>
                <h2 className="no_margins">Why Join the <br/> Malindi Turtles?</h2>
            </div>
            <div className="Text_L_Normal column flex-spread no_margins ">
                <p>Combine your passion for rugby with the vibrant and laid-back atmosphere of Malindi. Enjoy the beautiful beaches, explore the local culture, and make lifelong friends.</p>
                <div>
            </div>
            </div>
        </div>
        <div className="NewsCard-layouts row m-row">
            <LayoutCard emoji={"🏃🏼‍♂️"} header={"Develop Your Skills"} subtext={"Whether you're a seasoned veteran or a complete beginner, our experienced coaches will guide you on your rugby journey. "} image={`src/assets/media/hero/DSC_1372.jpg`} />
            <LayoutCard emoji={"👨‍👩‍👧‍👧"} header={"Become Part of a Family"} subtext={"Join a supportive and friendly community where camaraderie and sportsmanship are valued above all else."} image={`src/assets/media/hero/DSC_1372.jpg`} />
            <LayoutCard emoji={"💪🏼"} header={"Stay Active and Healthy"} subtext={"Rugby is a fantastic way to improve your fitness, build strength, and develop valuable teamwork and leadership skills."} image={`src/assets/media/hero/DSC_1372.jpg`} />
        </div>
    </div>
    )
};
{/**Testimoninals */}
export const Layout2 = () => {
    return (
        <div className="TestimonialDiv layouts column spread m-column align-y1 content-x1">
            <TestimonialClub />
        </div>
    )
};
{/**banner */}
export const Layout3 = () => {
    return (
        <div className="layouts row spread m-column">
        <div className="column flex-spread">
            <span className="Tagline no_margins">News</span>
            <h2 className="no_margins">Medium length section heading goes here</h2>
        </div>
        <div className="Text_L_Normal column flex-spread no_margins ">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        </div>
    </div>
    )
};