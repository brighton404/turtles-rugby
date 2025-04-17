import React from "react";
import { ClubMembers } from "@/pages/about/teams/types";
import FallbackAvatar from "@/assets/components/fallbackAvatar";

interface memberCardProps {
    member: ClubMembers;
}
const memberCard: React.FC<memberCardProps> = ({ member }) => {

    return (
        <div className="turtle-member-card">
            {member.imageUrl ? (
                <img
                src={member.imageUrl}
                alt={member.name}
                style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }}
                />
            ) : (
                <FallbackAvatar name={member.name} />
            )}
            <div className="card-description-wrap">
                <div className="Text_Normal row gap-4">{member.name} 
                    <div className="date">{new Date(member.join_Date).toLocaleDateString()}</div>
                </div>
                <div className="bio">{member.bio}</div>
            </div>
        </div>
    )
};
export default memberCard;