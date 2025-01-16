import Icons from "../lib/icons";

export default function TestimonialClub() {
    return (
        <div className="TestimonialCard">
            <div className="column flex-spread align-y1 content-x1">
                <div className="row gap-10">
                    <Icons variant="star"/><Icons variant="star"/><Icons variant="star"/><Icons variant="star"/><Icons variant="star"/>
                </div>
            </div>
            <div className="Text_L_Normal column flex-spread no_margins txt_Middle ">
                <p>"The club's commitment to community outreach is also inspiring. <br className="m-br"/> I highly recommend the Malindi Turtles to anyone looking for a fun, <br className="m-br" /> challenging, and rewarding rugby experience."</p>
            </div>
            <div className="row align-y1 gap-20 TestimonialCard_user">
                <div className="column align-y1 content-x2 m-align-y1 m-content-x2 flex-spread">
                    <span className="Text_Normal bold">Reagan Omondi</span>
                    <span className="Text_Normal">Referee, Kenya Rugby Union</span>
                </div>
                <hr />
                <div className="row align-y content-x1 m-align-y1 m-content-x1 flex-spread gap-10">
                    <div className="logo-small"></div>
                    <span className="bold">Malindi Turtle Rugby Club</span>
                </div>
            </div>
        </div>
    );
}
export const TestimonialRay = () => {
    return {

    }
}