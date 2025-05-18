import { LayoutCard } from "@/pages/news/extend/card";
import FAQAccordion from "./accordion";
import { useState } from "react";
import SDGPopup from "./SDGPopup";
import { SDG } from "../lib/types";
import { ReviewsList } from "./testimonial";

export default function Layout() {
    return (
    <section className="column layouts align-y1 content-x1 banner">
        <h2>MALINDI TURTLES RUGBY CLUB</h2>
    </section>
    )
}
{/**Homepage */}
export const Layout1 = () => {
    return (
    <section className="column layouts m-layouts FAQDiv">
        <div className="row spread m-column">
            <hgroup className="column flex-spread">
                <span className="Tagline no_margins">Info</span>
                <h2 className="no_margins">Why Join the <br/> Malindi Turtles?</h2>
            </hgroup>
            <div className="Text_L_Normal column flex-spread no_margins ">
                <p>Combine your passion for rugby with the vibrant and laid-back atmosphere of Malindi. Enjoy the beautiful beaches, explore the local culture, and make lifelong friends.</p>
            <div>
            </div>
            </div>
        </div>
        <div className="NewsCard-layouts row m-row">
            <LayoutCard emoji={"🏃🏼‍♂️"} header={"Develop Your Rugby Skills"} subtext={"Whether you're a seasoned veteran or a complete beginner, our experienced coaches will guide you on your rugby journey. "} image={`src/assets/media/hero/DSC_1372.jpg`} />
            <LayoutCard emoji={"👨‍👩‍👧‍👧"} header={"Become Part of a Family"} subtext={"Join a supportive and friendly community where camaraderie and sportsmanship are valued above all else."} image={`src/assets/media/hero/DSC_1372.jpg`} />
            <LayoutCard emoji={"💪🏼"} header={"Stay Active and Healthy"} subtext={"Rugby is a fantastic way to improve your fitness, build strength, and develop valuable teamwork and leadership skills."} image={`src/assets/media/hero/DSC_1372.jpg`} />
        </div>
    </section>
    )
};
{/**banner */}
export const Layout2 = () => {
    return (
        <section className="layouts m-layouts row spread m-column">
        <hgroup className="column flex-spread">
            <span className="Tagline no_margins">News</span>
            <h2 className="no_margins">Medium length section heading goes here</h2>
        </hgroup>
        <div className="Text_L_Normal column flex-spread no_margins ">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        </div>
    </section>
    )
};
{/**Testimoninals */}
export const Layout3 = () => {
    const [refresh] = useState(false);
    return (
        <section className="Reviews-section">
            <div className="inline-strip">
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
                <span>Member Reviews</span>
            </div>
            <div className="layouts m-layouts">
                <ReviewsList key={refresh.toString()} />
            </div>
        </section>
    )
};
{/**Acoridion */}
export const Layout4 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
      { question: 'Is there a joining fee?', answer: 'Based on the position of the club right now in the community and in regard for development of it, there is no registration fee for members or players who would like to associate themselves with the club.' },
      { question: 'Do you offer any training programs', answer: 'Yes, we do offer different programs within the club e.g school rugby coaching' },
      { question: 'Do you participate in any Rugby Leagues?', answer: 'Currently we do not participate in any leagues but its in our goal to participate in any kenyan rugby leagues in the future' },
    ];
    
    return (
        <section className="AccordionSection column spread layouts m-column">
            <hgroup className=" child1 column flex-spread">
                <span className="Tagline no_margins">FAQ</span>
                <h2 className="no_margins">Frequently Asked Questions</h2>
            </hgroup>
            {faqs.map((faq, index) => (
                <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </section>
    )
};
/* social development goals */
const mockSDGs: SDG[] = [
    {
        id: 1, title: 'SDG 3: Good Health and Well-being', description: 'Promoting physical activity, mental well-being, and healthy lifestyles through sport. Offering fitness programs that improve public health.Encouraging positive habits and helping prevent lifestyle diseases.', image: '/images/sdgs/E-WEB-Goal-03.png',
        gif: "/images/sdgs/3_SDG_MakeEveryDayCount_Gifs_GDU.gif",
        pdf: "/documents/sdgs/3_Why-It-Matters-2020.pdf"
    },
    {
        id: 2, title: 'SDG 4: Quality Education', description: 'Providing coaching in schools supports education through physical literacy and life skills. Teaching discipline, teamwork, and leadership—critical soft skills often learned in sport. Could integrate educational support or awareness campaigns alongside rugby programs.', image: '/images/sdgs/E-WEB-Goal-04.png',
        gif: "/images/sdgs/4_SDG_MakeEveryDayCount_Gifs_GDU.gif",
        pdf: "/documents/sdgs/4_Why-It-Matters-2020.pdf"
    },
    {
        id: 3, title: 'SDG 5: Gender Equality', description: 'By offering equal opportunities for women and girls to play and lead in rugby, the club directly supports gender inclusion and empowerment. Creating safe, supportive environments for girls in sports.', image: '/images/sdgs/E-WEB-Goal-05.png',
        gif: "/images/sdgs/5_SDG_MakeEveryDayCount_Gifs_GDU.gif",
        pdf: "/documents/sdgs/5_Why-It-Matters-2020.pdf"
    },
    {
        id: 4, title: 'SDG 10: Reduced Inequalities', description: 'Rugby is a sport that can reach marginalized or underserved communities. Programs that offer free or subsidized access help bridge opportunity gaps for youth and low-income families.', image: '/images/sdgs/E-WEB-Goal-10.png',
        gif: "/images/sdgs/10_SDG_MakeEveryDayCount_Gifs_GDU.gif",
        pdf: "/documents/sdgs/10_Why-It-Matters-2020.pdf"
    },
    {
        id: 5, title: 'SDG 11: Sustainable Cities and Communities', description: 'Sports clubs help build social cohesion, create safe spaces, and foster a sense of belonging. They can reduce anti-social behavior and build resilience in communities.', image: '/images/sdgs/E-WEB-Goal-11.png',
        gif: "/images/sdgs/11_SDG_MakeEveryDayCount_Gifs_GDU.gif",
        pdf: "/documents/sdgs/11_Why-It-Matters-2020.pdf"
    },
    {
        id: 6, title: 'SDG 16: Peace, Justice and Strong Institutions', description: 'Rugby promotes teamwork, respect, and fair play—key values in building peaceful, inclusive societies. Youth involvement in structured sports helps steer them away from crime or violence.', image: '/images/sdgs/E-WEB-Goal-16.png',
        gif: "/images/sdgs/16_SDG_MakeEveryDayCount_Gifs_GDU.gif",
        pdf: "/documents/sdgs/16_Why-It-Matters-2020.pdf"
    },
    {
        id: 7, title: 'SDG 17: Partnerships for the Goals', description: 'The club can partner with schools, health services, local governments, or other NGOs to amplify impact and share resources. Partnerships also enable better funding and sustainability.', image: '/images/sdgs/E-WEB-Goal-17.png',
        gif: "/images/sdgs/17_SDG_MakeEveryDayCount_Gifs_GDU.gif",
        pdf: "/documents/sdgs/17_Why-It-Matters-2020.pdf"
    },
    // more goals...
  ];
export const Layout6 = () => {

    const [selectedSDG, setSelectedSDG] = useState<SDG | null>(null);
    const [popupOpen, setPopupOpen] = useState(false);
  
    const openPopup = (sdg: SDG) => {
      setSelectedSDG(sdg);
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setSelectedSDG(null);
      setPopupOpen(false);
    };
    return (
        <section className="layouts sdg-section">
            <div className="row spread m-column gap-2">
                <hgroup className="column flex-spread">
                    <span className="Tagline no_margins">Our Impact</span>
                    <h2 className="no_margins">SUSTAINABLE <br /> DEVELOPMENT GOALS</h2>
                </hgroup>
                <div className="Text_L_Normal column flex-spread no_margins ">
                    <p>We align our vision with Global goals. Here are the areas we are contributing to</p>
                </div>
            </div>
            <div className="sdg-grid">
                {mockSDGs.map((sdg) => (
                <div key={sdg.id} className="sdg-card" onClick={() => openPopup(sdg)}>
                    <div className="sdg-image-container">
                        <img src={sdg.image} alt="" />
                    </div>
                    <p aria-label={sdg.description}>{sdg.description.slice(0, 70)} 
                        <i><u> read more</u></i>
                    </p>
                </div>
                ))}
            </div>
            <SDGPopup sdg={selectedSDG} isOpen={popupOpen} onClose={closePopup} />
          </section>
    )
}