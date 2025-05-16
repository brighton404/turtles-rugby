import React from "react";
import { TeamMember } from "./types";

interface TeamMemberCardProps {
    member: TeamMember;
}
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {

    return (
        <div className="team-member-card">
            <img src={member.imageUrl} alt={` ${member.name}'s photo`} loading="lazy" />
            <div className="column card-description-wrap">
                <div className="team-member-name column">
                    <div className="MTRC-Pl-name">{member.name}</div>
                    <div className="MTRC-Pl-surname">{member.surname}</div>
                </div>
                <div className="column team-member-desc">
                    <div className="row">
                        <span className="Text_S_Normal bold">{member.position}</span>
                    </div>
                    <div className="team-desc-child-layer">
                        <div className="column">
                            <span className="Text_S_Normal bold">Age</span>
                            <span className="Text_T_Normal">{member.age}</span>
                        </div>
                        <div className="column">
                            <span className="Text_S_Normal bold">Weight</span>
                            <span className="Text_T_Normal">{member.weight}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default TeamMemberCard;