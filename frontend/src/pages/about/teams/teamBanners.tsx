import { ButtonColor, ButtonState } from "@/assets/lib/actionButton";
import Button from "@/assets/lib/button";

export default function TeamBanner() {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
        <h2 className="no_margins txt_Middle">Ready to Join the Pack?</h2>
        <p className="no_margins txt_Middle">Visit our training grounds, meet the team, and experience <br /> the thrill of Malindi Turtles Rugby Club for yourself.</p>
        <div className="row gap-10">
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/events" disabled={false} > Sign Up </Button>
            <Button color={ButtonColor.Secondary} state={ButtonState.Default} isOutlined={false} navigateTo="/events" disabled={false} > See Location </Button>
        </div>
    </div>
    )
}
{/**Homepage */}
export const ManagementBanner = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
        <h2 className="no_margins txt_Middle">The Club Management</h2>
        <p className="no_margins txt_Middle">Meet the team behind the club operations.</p>
{/*         <div className="row gap-10">
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/events"> Sign Up </Button>
            <Button color={ButtonColor.Secondary} state={ButtonState.Default} isOutlined={false} navigateTo="/events"> See Location </Button>
        </div> */}
    </div>
    )
};
{/**Testimoninals */}
export const MenBanner = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
        <h2 className="no_margins txt_Middle">Senior Men</h2>
        <p className="no_margins txt_Middle">Visit our training grounds, meet the team, and experience <br /> the thrill of Malindi Turtles Rugby Club for yourself.</p>
        <div className="row gap-10">
            <Button color={ButtonColor.Accent} state={ButtonState.Default} isOutlined={false} navigateTo="/apply" disabled={false} > Sign Up </Button>
        </div>
    </div>
    )
};
{/**banner */}
export const WomenBanner = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
        <h2 className="no_margins txt_Middle">Senior Women</h2>
        <p className="no_margins txt_Middle">Visit our training grounds, meet the team, and experience <br /> the thrill of Malindi Turtles Rugby Club for yourself.</p>
        <div className="row gap-10">
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/events" disabled={false} > Sign Up </Button>
            <Button color={ButtonColor.Secondary} state={ButtonState.Default} isOutlined={false} navigateTo="/events" disabled={false} > See Location </Button>
        </div>
    </div>
    )
};