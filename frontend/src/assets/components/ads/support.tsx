import { ButtonColor, ButtonState } from "../../lib/actionButton";
import Button from "../../lib/button";

const support: React.FC = () => {
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
export default support;