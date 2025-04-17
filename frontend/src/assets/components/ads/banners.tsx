
import { ButtonColor, ButtonState } from "../../lib/actionButton";
import Button from "../../lib/button";

export default function layout() {
    return (
        <div className="column layouts align-y1 content-x1 banner">
        <h2>MALINDI TURTLES RUGBY CLUB</h2>
    </div>
    )
}

export const Support = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
            <h2 className="no_margins txt_Middle">Ready to Join the Pack?</h2>
            <p className="no_margins txt_Middle">Visit our training grounds, meet the team, and experience <br /> the thrill of Malindi Turtles Rugby Club for yourself.</p>
            <div className="row gap-10">
                <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/membership"> Sign Up </Button>
                <Button color={ButtonColor.Secondary} state={ButtonState.Default} isOutlined={false} navigateTo="/about#Grounds"> See Location </Button>
            </div>
        </div>
    )
};
export const AddCalendar = () => {
    return (
        <div className="Inline-Ad">
            <div className="horizontal-scroll">
                <div className="row gap-20">
                <p className="no_margins txt_Middle">Get every fixture delivered to your calendar by subscribing to Malindi Turtles Rugby Club calendar to sync all Events to your device</p>
                <p className="no_margins txt_Middle">Get every fixture delivered to your calendar by subscribing to Malindi Turtles Rugby Club calendar to sync all Events to your device</p>
                <p className="no_margins txt_Middle">Get every fixture delivered to your calendar by subscribing to Malindi Turtles Rugby Club calendar to sync all Events to your device</p>
                <p className="no_margins txt_Middle">Get every fixture delivered to your calendar by subscribing to Malindi Turtles Rugby Club calendar to sync all Events to your device</p>
                </div>
            </div>
        </div>
    )
};
export const NewsLetter = () => {
    return (
        <div className="Inline-Ad">
            <div className="horizontal-scroll">
                <div className="row gap-20">
                    <p className="no_margins txt_Middle">Subscribe to our Newsletter and receive every Newsletter delivered to your email as soon as updates are released</p>
                    <p className="no_margins txt_Middle">Subscribe to our Newsletter and receive every Newsletter delivered to your email as soon as updates are released</p>
                    <p className="no_margins txt_Middle">Subscribe to our Newsletter and receive every Newsletter delivered to your email as soon as updates are released</p>
                    <p className="no_margins txt_Middle">Subscribe to our Newsletter and receive every Newsletter delivered to your email as soon as updates are released</p>
                </div>
            </div>
        </div>
    )
};

export const JoinPlayers = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
            <h2 className="no_margins txt_Middle">Ready to Join the Pack?</h2>
            <p className="no_margins txt_Middle">Fill out this webform or Visit our training grounds, meet the team, <br /> and experience  the thrill of Malindi Turtles Rugby Club yourself.</p>
            <p>You can also email your application via <a href="mailto:malinditurtlesrugbyclub@gmail.com">Email</a></p>
        </div>
    )
};

export const JoinMgt = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
            <h2 className="no_margins txt_Middle">Join our Managing Committee</h2>
            <p className="no_margins txt_Middle">Visit our training grounds, meet the team, and experience <br /> the thrill of Malindi Turtles Rugby Club for yourself.</p>
            <p>You can also email your application via <a href="mailto:malinditurtlesrugbyclub@gmail.com">Email</a></p>
        </div>
    )
};

export const JoinSchools = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
            <h2 className="no_margins txt_Middle">School Coaching Programme</h2>
            <p className="no_margins txt_Middle">Visit our training grounds, meet the team, and experience <br /> the thrill of Malindi Turtles Rugby Club for yourself.</p>
            <p>You can also email your application via <a href="mailto:malinditurtlesrugbyclub@gmail.com">Email</a></p>
        </div>
    )
};

export const JoinMembers = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
            <h2 className="no_margins txt_Middle">Become a member</h2>
            <p className="no_margins txt_Middle"></p>
        </div>
    )
};