import React from "react";
import { ClubMembers } from "./types";

interface MemberCardProps {
    member: ClubMembers;
}
const MemberCard: React.FC<MemberCardProps> = ({ member }) => {

    return (
        <div className="team-member-card">
            <img src={member.imageUrl} alt={` ${member.name}'s photo`} />
            <div className="column card-description-wrap">
                <div className="team-member-name column">
                    <div className="MTRC-Pl-name">{member.name}</div>
                    <div className="MTRC-Pl-surname">{member.surname}</div>
                </div>
                <div className="column team-member-desc">
                    <div className="row">
                        <span className="Text_S_Normal bold">{member.position}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MemberCard;