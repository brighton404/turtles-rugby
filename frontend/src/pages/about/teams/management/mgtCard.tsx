import React from "react";
import { ClubManagement } from "../types";

interface mgtMemberCardProps {
    management: ClubManagement;
}
const mgtMemberCard: React.FC<mgtMemberCardProps> = ({ management }) => {

    return (
        <div className="mgt-card">
            <img src={management.imageUrl} alt={` ${management.name}'s photo`} />
            <div className="card-description-wrap">
                <div className="mgt-name column">
                    <div className="MTRC-Pl-name">{management.name} {management.surname}</div>
                </div>
                <div className="column mgt-desc">
                    <div className="row">
                        <span className="Text_S_Normal bold">{management.position}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default mgtMemberCard;