import { supabase } from "@/utils/supabase";
import { useState, useEffect } from "react";
import MgtMemberCard from "./mgtCard";
import DropdownTree from "@/assets/lib/dropdownTree";

const SkeletonCard = () => (
  <div className="skeleton-card" />
);

const data = [
  { label: "Club Leadership", link: "#clubleadership"},
  { label: "Executive & Operations Team", link: "#ExecutiveandOperationsTeam"},
  { label: "Youth & Community Development", link: "#YouthandCommunityDevelopment"},
  { label: "Facilities & Matchday Operations", link: "#FacilitiesandMatchdayOperations"},
  { label: "Media, Marketing & Membership", link: "#MediaMarketingandMembership"},
  { label: "Wellbeing & Welfare", link: "#WellbeingandWelfare"},
  { label: "Volunteers & Social Events", link: "#VolunteersandSocialEvents"},
  { label: "Get Involve", link: "#GetInvolve"},
/*   { label: "Youth & Community Development", 
      children: [
          { label: "SWOT Analysis", link: "#Development" },
          { label: "Strategies", link: "#strategies"},
          { label: "Implementation", link: "#Implementation"}
      ],    
  }, */
];

const ClubManagement: React.FC = ({ }) => {

      const [TurtlePlayers, setItems] = useState<any[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
      
      useEffect(() => {
        async function fetchItems() {
          setLoading(true);
          const { data, error } = await supabase
            .from("TurtleManagement")
            .select("*")
          if (error) {
            console.error("Error fetching items:", error);
          } else {
            setItems(data || []);
          }
          setLoading(false);
        }
      
        fetchItems();
      }, []);

    return (
      <>
      <div className="space"></div>
      <div className="row m-column mgt-about">
        <h2>Our Management Team</h2>
        <p>At Malindi Turtles Rugby Club, our strength lies not only in our players but in the passionate team behind the scenes. Our management team is made up of dedicated individuals who bring experience, leadership, and heart to every aspect of the club — from the pitch to the boardroom. Meet the people who help drive the vision, development, and day-to-day running of our club.</p>
      </div>
        <div className="mgt-container">
        {loading
          ? Array.from({ length: 20 }).map((_, idx) => <SkeletonCard key={idx} />)
          : TurtlePlayers.map((player) => (
              <MgtMemberCard key={player.id} management={player} />
            ))}
      </div>
      <div className="mgt-content">
        <div className="contentTable">
                <DropdownTree data={data} />
        </div>
        <div className="mgt-pos-wrap">
          <div className="mgt-child">
            <div>
              <h3>Club Leadership</h3>
            </div>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Club President </h4>
                <p>As the figurehead of the club, provides strategic direction and ensures the club stays true to its core values. With a deep history in the local rugby community, [he/she/they] champions inclusivity, youth development, and long-term sustainability.</p>
              </div>
              <div className="mgt-child2">
                <h4> Chairperson </h4>
                <p>Responsible for leading committee meetings and ensuring that all departments function cohesively, oversees the governance of the club. </p>
              </div>
              <div className="mgt-child2">
                <h4> Vice Chairperson </h4>
                <p>Supporting the Chairperson and stepping in when required, helps bridge communication across teams and plays a pivotal role in key decision-making processes.</p>
              </div>           
            </div>
          </div>
          <div className="mgt-child">
            <h3>Executive & Operations Team</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Club Secretary </h4>
                <p>The organizational hub of our club, handles all administrative duties, including meeting agendas, minutes, and compliance documentation. [He/She/They] ensures smooth internal communications and official correspondences.</p>
              </div>
              <div className="mgt-child2">
                <h4> Treasurer </h4>
                <p> keeps our finances in top shape, ensuring transparency, budgeting, and financial planning. Their diligent work behind the scenes supports everything from kit purchases to pitch maintenance.</p>
              </div>
              <div className="mgt-child2">
                <h4> Director of Rugby </h4>
                <p>Overseeing all rugby operations, is responsible for player development, coaching standards, and competition performance. [He/She/They] work closely with both senior and youth teams to uphold a high level of rugby across the board.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3>Youth & Community Development</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Youth Development Officer </h4>
                <p>Dedicated to nurturing the next generation of players, manages all junior age-grade teams, coaching recruitment, safeguarding, and parent engagement.</p>
              </div>
              <div className="mgt-child2">
                <h4> Schools & Community Liaison </h4>
                <p>Focused on outreach, builds and maintains partnerships with local schools, community groups, and councils to promote the sport and foster club involvement from grassroots.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3>Facilities & Matchday Operations</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Facilities Manager </h4>
                <p>From pitch upkeep to clubhouse maintenance, ensures our physical environment is safe, functional, and welcoming.</p>
              </div>
              <div className="mgt-child2">
                <h4> Matchday Coordinator </h4>
                <p>Behind every home fixture is, who manages logistics, volunteer coordination, first aid presence, and hospitality to create a smooth matchday experience.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3> Media, Marketing & Membership</h3>
            <div className="mgt-child1">
            <div className="mgt-child2">
              <h4> Head of Communications </h4>
              <p> leads our public voice — from press releases to newsletters and website updates. [He/She/They] keep our members informed and engaged.</p>
            </div>
            <div className="mgt-child2">
              <h4> Marketing & Sponsorship Manager </h4>
              <p>Tasked with growing the club’s visibility and funding, works closely with local businesses and sponsors to build partnerships that benefit both the club and the community.</p>
            </div>
            <div className="mgt-child2">
              <h4> Membership Officer </h4>
              <p>Focused on the lifeblood of the club — our members — oversees sign-ups, renewals, and engagement to ensure everyone feels valued and connected.</p>
            </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3>Wellbeing & Welfare</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Safeguarding Officer </h4>
                <p>The voice for safety and inclusion, ensures all children and vulnerable adults are protected, championing a safe environment for all.</p>
              </div>
              <div className="mgt-child2">
                <h4> Welfare & Inclusion Officer </h4>
                <p>is dedicated to supporting mental health, inclusion, and equal opportunities. [He/She/They] work to make the club a space for everyone.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3>Volunteers & Social Events</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Volunteer Coordinator </h4>
                <p>Our volunteers are the heart of the club, and ensures they are trained, supported, and celebrated for all their hard work.</p>
              </div>
              <div className="mgt-child2">
                <h4> Social Events Manager </h4>
                <p>From quiz nights to awards dinners, brings the fun. [He/She/They] plans inclusive and engaging events that unite members off the pitch.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child">
            <h4>Get Involved</h4>
            <p>Our club thrives thanks to the hard work of these passionate individuals and the wider community. Interested in volunteering, coaching, or joining a committee? Reach out to [contact email or form link].</p>
          </div>
        </div>
        <div className="RightBar">
                <blockquote>
                    <strong>Note</strong>Malindi Rugby Community is a CBO located in Malindi constituency of Kilifi County, Kenya.
                </blockquote>
        </div>
      </div>
      </>
    )
};
export default ClubManagement;