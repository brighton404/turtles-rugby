import Icons from "@/assets/lib/icons";
import ActionButton, { ButtonColor, ButtonState } from "../../lib/actionButton";

const addCalendar: React.FC = () => {
    return (
        <div className="banner column flex-spread content-x1 gap-20">
            <h2 className="no_margins txt_Middle">Download all rugby fixtures to your calendar </h2>
            <p className="no_margins txt_Middle">Get every fixture delivered to your calendar by subscribing to World Rugby's calendar to sync all matches to your device</p>
            <div className="row gap-10">
                <ActionButton color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} icon={<Icons variant="arrow-right"/>} navigateTo="/"> ADD EVENTS TO CALENDAR </ActionButton>
            </div>
        </div>
    )
};
export default addCalendar