import DropdownTree from "@/assets/lib/dropdownTree";
import { HeroAbout } from "../../assets/components/hero";
import MapComponent from "./map";

const data = [
    { label: "About Us", link: "#aboutUs" },
    { label: "History", link: "#History"    },
    { label: "Development Plan", 
        children: [
            { label: "SWOT Analysis", link: "#Development" },
            { label: "Strategies", link: "#strategies"},
            { label: "Implementation", link: "#Implementation"}
        ],    
    },
    { label: "Grounds", link: "#Grounds"   },
  ];

const about: React.FC = () => {
    return (
     <section className="AboutCanvas">
        <HeroAbout />
        <section className="About-SectionWrap">
            <DropdownTree data={data} />
            <article className="About-Turtles">
                <div className="page-body">
                    <section id="aboutUs">
                        <h1>About Us</h1>
                        <p>Malindi Turtles Rugby Club is a vibrant hub of rugby passion and camaraderie located in the heart of Malindi. We are committed to fostering a love for the game while developing players of all ages and skill levels. Our club is more than just a sporting organization; it&#x27;s a family that embraces diversity, inclusivity, and a shared love for rugby.
                        </p>
                        <blockquote>
                            <strong>Vision</strong> To be the premier rugby club in the region, providing a world-class rugby experience for players of all ages and abilities, while contributing positively to the local community.
                        </blockquote>
                    </section>
                    <section id="History">
                        <h2>History</h2>
                        <p>The team was formed in the year 2024 and are established to compete in the Kenya Rugby Union league not limiting their participation in any other national circuit &amp; tournament.
                        </p>
                    </section>
                    <section id="Development">
                        <h2>Development Plan</h2>
                        <p>This development plan outlines the strategic direction for all teams under the community. It identifies key areas for growth, sets clear objectives, and outlines the actions necessary to achieve them.<br/>To develop and promote rugby in Malindi, fostering a strong club culture, and achieving excellence in competition.<br/>
                        </p>
                        <section id="SWOTAnalysis">
                            <h3>SWOT Analysis</h3>
                            <p>A thorough <a href="https://www.investopedia.com/terms/s/swot.asp#:~:text=What%20Is%20SWOT%20Analysis%3F">SWOT </a>analysis should be conducted to identify the club&#x27;s strengths, weaknesses, opportunities, and threats. This will inform the development of specific objectives and strategies.</p>
                        </section>
                        <section id="objectives">
                            <h3>Objectives</h3>
                            <div>
                                <div>
                                    <p>Short-term (1-2 years):</p>
                                    <ul><li >Increase the number of members in the club. (both players and community members)</li></ul>
                                    <ul><li>Develop a comprehensive coaching and player development pathway</li></ul>
                                    <ul><li >Enhance the club&#x27;s financial stability through increased sponsorship and membership</li></ul>
                                    <ul><li >Increase youth participation by [percentage]</li></ul>
                                    <ul><li >Improve the win-loss record of the senior men&#x27;s and women&#x27;s teams</li></ul>
                                </div>
                                <div>
                                    <p>Medium-term (3-5 years):</p>
                                    <ul><li >Increase community engagement through rugby-based initiatives</li></ul>
                                    <ul><li >Expand the club&#x27;s facilities to meet growing demand</li></ul>
                                    <ul><li >Establish a competitive youth rugby program</li></ul>
                                    <ul><li >Develop a high-performance pathway for elite players</li></ul>
                                </div>
                                <div>
                                    <p>Long-term (5+ years):</p>
                                    <ul><li >Become a leading rugby club in the country</li></ul>
                                    <ul><li >Produce national and international rugby representatives</li></ul>
                                    <ul><li >Develop a sustainable business model for the club</li></ul>
                                </div>
                            </div>
                        </section>
                        <section id="strategies">
                            <h4>Strategies</h4>
                            <div className="ObjectiveCards">
                                <div className="About-Us-ObjectiveCard">
                                    <h5>Youth Development:</h5>
                                    <ul><li >Implement a structured age-grade rugby program</li></ul>
                                    <ul><li >Recruit and train qualified youth coaches</li></ul>
                                    <ul><li >Partner with local schools to identify and develop talent</li></ul>
                                    <ul><li >Organize regular age-grade competitions</li></ul>
                                </div>
                                <div className="About-Us-ObjectiveCard">
                                    <h5>Senior Rugby:</h5>
                                    <ul><li >Recruit and retain experienced players</li></ul>
                                    <ul><li >Provide ongoing player development opportunities</li></ul>
                                    <ul><li >Strengthen coaching staff</li></ul>
                                    <ul><li >Invest in sports science and conditioning</li></ul>
                                </div>
                                <div className="About-Us-ObjectiveCard">
                                    <h5>Financial Sustainability:</h5>
                                    <ul><li >Diversify revenue streams through sponsorships, memberships, and fundraising events</li></ul>
                                    <ul><li >Implement effective financial management practices</li></ul>
                                    <ul><li >Explore opportunities for grant funding</li></ul>
                                </div>
                                <div className="About-Us-ObjectiveCard">
                                    <h5>Facilities Development:</h5>
                                    <ul><li >Identify and secure additional training and match venues</li></ul>
                                    <ul><li >Improve the existing clubhouse facilities</li></ul>
                                    <ul><li >Develop a long-term facilities plan</li></ul>
                                </div>
                                <div className="About-Us-ObjectiveCard">
                                    <h5>Community Engagement:</h5>
                                    <ul><li>Organize community rugby clinics and festivals</li></ul>
                                    <ul><li>Support local charities and initiatives</li></ul>
                                    <ul><li>Collaborate with other sports clubs and community organizations</li></ul>
                                </div>
                            </div>
                        </section>
                        <section id="Implementation">
                            <h4>Implementation and Evaluation</h4>
                            <ul><li >Develop a detailed action plan outlining specific tasks, responsibilities, and timelines for each objective.</li></ul>
                            <ul><li>Allocate necessary resources, including budget, personnel, and equipment.</li></ul>
                            <ul><li >Regularly monitor progress and adjust the plan as needed.</li></ul>
                            <ul><li >Conduct periodic evaluations to measure the impact of the development plan.</li></ul>
                        </section>
                    </section>
                    <section id="Grounds">
                    <h2>Grounds</h2>
                    <p>The club come into partnership with the management of <a href="https://maps.app.goo.gl/nxXv3aAmoD22Brso8">Town secondary school</a>, where the main pitch would be used as the current home ground of the club.</p>
                        <MapComponent />
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.4204928655904!2d40.1206177757611!3d-3.245154540906477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x181585670eaaaaab%3A0x191362ecad956429!2sTown%20Secondary%20School%20Malindi!5e0!3m2!1sen!2ske!4v1736693817835!5m2!1sen!2ske" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    </section>
                </div>
            </article>
            <div className="RightBar">
                <blockquote>
                    <strong>Note</strong> Malindi Rugby Community is a CBO located in Malindi constituency of Kilifi County, Kenya.
                </blockquote>
            </div>
        </section>
     </section>
    );
   }
export default about;