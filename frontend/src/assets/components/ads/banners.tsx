import Icons from "@/assets/lib/icons";
import ActionButton, { ButtonColor, ButtonState } from "../../lib/actionButton";
import Button from "../../lib/button";

export default function layout() {
    return (
    <div className="layouts">
        <h2>layout default</h2>
    </div>
    )
}

export const Support = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
            <h2 className="no_margins txt_Middle">Ready to Join the Pack?</h2>
            <p className="no_margins txt_Middle">Visit our training grounds, meet the team, and experience <br /> the thrill of Malindi Turtles Rugby Club for yourself.</p>
            <div className="row gap-10">
                <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/events"> Sign Up </Button>
                <Button color={ButtonColor.Secondary} state={ButtonState.Default} isOutlined={false} navigateTo="/events"> See Location </Button>
            </div>
        </div>
    )
};
export const AddCalendar = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
            <h2 className="no_margins txt_Middle">Download all rugby fixtures to your calendar </h2>
            <p className="no_margins txt_Middle">Get every fixture delivered to your calendar by subscribing to Malindi Turtles Rugby Club calendar to sync all Events to your device</p>
            <div className="row gap-10">
                <ActionButton color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} icon={<Icons variant="arrow-right"/>} navigateTo="/"> ADD EVENTS TO CALENDAR </ActionButton>
            </div>
        </div>
    )
};
export const NewsLetter = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
            <h2 className="no_margins txt_Middle">Subscribe to our Newsletter </h2>
            <p className="no_margins txt_Middle">Receive every Newsletter delivered to your email as soon as updates are released</p>
            <div className="row gap-10">
                <ActionButton color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} icon={<Icons variant="arrow-right"/>} navigateTo="/"> ADD EVENTS TO CALENDAR </ActionButton>
            </div>
        </div>
    )
};