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
  { label: "Get Involved", link: "#GetInvolved"},
/*   { label: "Youth & Community Development", 
      children: [
          { label: "SWOT Analysis", link: "#Development" },
          { label: "Strategies", link: "#strategies"},
          { label: "Implementation", link: "#Implementation"}
      ],    
  }, */
];

const ClubManagement: React.FC = ({ }) => {

      const [TurtleMgt, setItems] = useState<any[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
      
      useEffect(() => {
        async function fetchItems() {
          setLoading(true);
          const { data, error } = await supabase
            .from("TurtleManagement")
            .select("*")
            .order('id', { ascending: true })
          if (error) {
            console.error("Error fetching items:", error);
          } else {
            setItems(data || []);
          }
          setLoading(false);
        }
      
        fetchItems();
      }, []);

      const clubPresident = TurtleMgt.find(member => member.position === "Club President");
      const clubChairperson = TurtleMgt.find(member => member.position === "Club Chairperson");
      const clubViceChairperson = TurtleMgt.find(member => member.position === "Club Vice Chairperson");
      const clubSecretary = TurtleMgt.find(member => member.position === "Club Secretary");
      const clubTreasurer = TurtleMgt.find(member => member.position === "Club Treasurer");
      const clubRugbyDirector = TurtleMgt.find(member => member.position === "Club Director of Rugby");
      const clubYouthDevelopmentOfficer = TurtleMgt.find(member => member.position === "Youth Development Officer");
      const clubSchoolsandCommunityLiaison = TurtleMgt.find(member => member.position === "Schools & Community Liaison");
      const clubFacilitiesManager = TurtleMgt.find(member => member.position === "Facilities Manager");
      const clubMatchdayCoordinator = TurtleMgt.find(member => member.position === "Matchday Coordinator");
      const clubHeadofCommunications = TurtleMgt.find(member => member.position === "Head of Communications");
      const clubMarketingandSponsorshipManager = TurtleMgt.find(member => member.position === "Marketing and Sponsorship Manager");
      const clubMembershipOfficer = TurtleMgt.find(member => member.position === "Membership Officer");
      const clubSafeguardingOfficer = TurtleMgt.find(member => member.position === "Safeguarding Officer");
      const clubWelfareandInclusionOfficer = TurtleMgt.find(member => member.position === "Welfare and Inclusion Officer");
      const clubVolunteerCoordinator = TurtleMgt.find(member => member.position === "Volunteer Coordinator");
      const clubSocialEventsManager = TurtleMgt.find(member => member.position === "Social Events Manager");
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
          : TurtleMgt.map((member) => (
              <MgtMemberCard key={member.id} management={member} />
            ))}
      </div>
      <div className="mgt-content">
        <div className="contentTable">
                <DropdownTree data={data} />
        </div>
        <div className="mgt-pos-wrap">
          <div className="mgt-child">
            <div>
              <h3 id="clubleadership">Club Leadership</h3>
            </div>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Club President </h4>
                <h5 className="department-lead">{clubPresident?.full_name || "No current president"}</h5>
                <p>As the figurehead of the club, provides strategic direction and ensures the club stays true to its core values. With a deep history in the local rugby community, [he/she/they] champions inclusivity, youth development, and long-term sustainability.</p>
              </div>
              <div className="mgt-child2">
                <h4> Chairperson </h4>
                <h5 className="department-lead">{clubChairperson?.full_name || "No current chairperson"}</h5>                
                <p>Responsible for leading committee meetings and ensuring that all departments function cohesively, oversees the governance of the club. </p>
              </div>
              <div className="mgt-child2">
                <h4> Vice Chairperson </h4>
                <h5 className="department-lead">{clubViceChairperson?.full_name || "No current Vice chairperson"}</h5>
                <p>Supporting the Chairperson and stepping in when required, helps bridge communication across teams and plays a pivotal role in key decision-making processes.</p>
              </div>           
            </div>
          </div>
          <div className="mgt-child">
            <h3>Executive & Operations Team</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Club Secretary </h4>
                <h5 className="department-lead">{clubSecretary?.full_name || "No current secretary"}</h5>
                <p>The organizational hub of our club, handles all administrative duties, including meeting agendas, minutes, and compliance documentation. [He/She/They] ensures smooth internal communications and official correspondences.</p>
              </div>
              <div className="mgt-child2">
                <h4> Treasurer </h4>
                <h5 className="department-lead">{clubTreasurer?.full_name || "No current Treasurer"}</h5>
                <p> keeps our finances in top shape, ensuring transparency, budgeting, and financial planning. Their diligent work behind the scenes supports everything from kit purchases to pitch maintenance.</p>
              </div>
              <div className="mgt-child2">
                <h4> Director of Rugby </h4>
                <h5 className="department-lead">{clubRugbyDirector?.full_name || "No current chairperson"}</h5>
                <p>Overseeing all rugby operations, is responsible for player development, coaching standards, and competition performance. [He/She/They] work closely with both senior and youth teams to uphold a high level of rugby across the board.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3>Youth & Community Development</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Youth Development Officer </h4>
                <h5 className="department-lead">{clubYouthDevelopmentOfficer?.full_name || "No current Youth Development Officer"}</h5>
                <p>Dedicated to nurturing the next generation of players, manages all junior age-grade teams, coaching recruitment, safeguarding, and parent engagement.</p>
              </div>
              <div className="mgt-child2">
                <h4> Schools & Community Liaison </h4>
                <h5 className="department-lead">{clubSchoolsandCommunityLiaison?.full_name || "No current Schools & Community Liaison"}</h5>
                <p>Focused on outreach, builds and maintains partnerships with local schools, community groups, and councils to promote the sport and foster club involvement from grassroots.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3>Facilities & Matchday Operations</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Facilities Manager </h4>
                <h5 className="department-lead">{clubFacilitiesManager?.full_name || "No current Facilities Manager"}</h5>
                <p>From pitch upkeep to clubhouse maintenance, ensures our physical environment is safe, functional, and welcoming.</p>
              </div>
              <div className="mgt-child2">
                <h4> Matchday Coordinator </h4>
                <h5 className="department-lead">{clubMatchdayCoordinator?.full_name || "No current Matchday Coordinator"}</h5>
                <p>Behind every home fixture is, who manages logistics, volunteer coordination, first aid presence, and hospitality to create a smooth matchday experience.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3> Media, Marketing & Membership</h3>
            <div className="mgt-child1">
            <div className="mgt-child2">
              <h4> Head of Communications </h4>
              <h5 className="department-lead">{clubHeadofCommunications?.full_name || "No current Head of Communications"}</h5>
              <p> leads our public voice — from press releases to newsletters and website updates. [He/She/They] keep our members informed and engaged.</p>
            </div>
            <div className="mgt-child2">
              <h4> Marketing & Sponsorship Manager </h4>
              <h5 className="department-lead">{clubMarketingandSponsorshipManager?.full_name || "No current Marketing & Sponsorship Manager"}</h5>
              <p>Tasked with growing the club’s visibility and funding, works closely with local businesses and sponsors to build partnerships that benefit both the club and the community.</p>
            </div>
            <div className="mgt-child2">
              <h4> Membership Officer </h4>
              <h5 className="department-lead">{clubMembershipOfficer?.full_name || "No current Membership Officer"}</h5>
              <p>Focused on the lifeblood of the club — our members — oversees sign-ups, renewals, and engagement to ensure everyone feels valued and connected.</p>
            </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3>Wellbeing & Welfare</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Safeguarding Officer </h4>
                <h5 className="department-lead">{clubSafeguardingOfficer?.full_name || "No current Safeguarding Officer"}</h5>
                <p>The voice for safety and inclusion, ensures all children and vulnerable adults are protected, championing a safe environment for all.</p>
              </div>
              <div className="mgt-child2">
                <h4> Welfare & Inclusion Officer </h4>
                <h5 className="department-lead">{clubWelfareandInclusionOfficer?.full_name || "No current Welfare & Inclusion Officer"}</h5>
                <p>is dedicated to supporting mental health, inclusion, and equal opportunities. [He/She/They] work to make the club a space for everyone.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child">
            <h3>Volunteers & Social Events</h3>
            <div className="mgt-child1">
              <div className="mgt-child2">
                <h4> Volunteer Coordinator </h4>
                <h5 className="department-lead">{clubVolunteerCoordinator?.full_name || "No current Volunteer Coordinator"}</h5>
                <p>Our volunteers are the heart of the club, and ensures they are trained, supported, and celebrated for all their hard work.</p>
              </div>
              <div className="mgt-child2">
                <h4> Social Events Manager </h4>
                <h5 className="department-lead">{clubSocialEventsManager?.full_name || "No current Social Events Manager"}</h5>
                <p>From quiz nights to awards dinners, brings the fun. [He/She/They] plans inclusive and engaging events that unite members off the pitch.</p>
              </div>
            </div>
          </div>
          <div className="mgt-child" id="GetInvolved">
            <h4>Get Involved</h4>
            <p>Our club thrives thanks to the hard work of these passionate individuals and the wider community. Interested in volunteering, coaching, or joining a committee? Reach out to <a href="mailto:malinditurtlesrugbyclub@gmail.com">Email</a> or fill out our webform <a href="/apply#ManagementForm-tab">Webform</a></p>
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