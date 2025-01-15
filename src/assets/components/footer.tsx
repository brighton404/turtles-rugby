import Button, { ButtonColor, ButtonState } from "../lib/button";
import Icons from "../lib/icons";

const footer: React.FC = () => {
    return (
        <footer className="gap-100">
        <div className="row Percent_gap m-column detailsWrap">
            <div className="details row m-flex-wrap flex-spread gap-4">
                <div className="column gap-4 flex-spread">
                    <span className="Tagline">About us</span>
                    <div className="column top content-left">
                    <div className="link"><a href="">History</a></div>
                    <div className="link"><a href="">Community Impact</a></div>
                    <div className="link"><a href="">Sustainability</a></div>
                    <div className="link"><a href="">Join us</a></div>
                    <div className="link"><a href="">Brand toolkit</a></div>
                    </div>
                </div>
                <div className="column gap-4 flex-spread">
                    <span className="Tagline">Teams</span>
                    <div className="column top content-left">                    
                    <div className="link"><a href="">Seniors Men</a></div>
                    <div className="link"><a href="">Seniors Women</a></div>
                    <div className="link"><a href="">Youth</a></div>
                    <div className="link"><a href="">Tutoring</a></div>
                    <Button color={ButtonColor.Accent} state={ButtonState.Default} isOutlined={false} navigateTo="/"> Play </Button>
                    </div>
                </div>
                <div className="column gap-4 flex-spread">
                    <span className="Tagline">Calendar</span>
                    <div className="column top content-left">
                        <div className="link"><a href="">Events</a></div>
                        <div className="link"><a href="">Training</a></div>
                        <div className="link"><a href="">Fixtures</a></div>
                    </div>
                </div>
                <div className="column gap-10 flex-spread">
                    <span className="Tagline">Contact</span>
                    <div className="column top content-left">
                        <div className="link"><a href="">Email <Icons variant="mail"/></a></div>
                        <div className="link"><a href="">Support Line <Icons variant="phone"/></a></div>
                        <div className="link"><a href="">Feedback form <Icons variant="file"/></a></div>
                    </div>
                </div>
            </div>
            <div className="Newsletter-form column wrap gap-2 ">
                <div className="column">
                    <span className="Tagline ">Subscribe</span>
                    <span className="truncate">Join our newsletter to stay up to date on features and releases.</span>
                </div>
                <div className="column flex-spread gap-10">
                    <div className="Collecter row gap-2">
                        <input type="text" id="newsletter" />
                        <Button color={ButtonColor.Secondary} state={ButtonState.Default} isOutlined={false} > Coming soon </Button>
                    </div>                    
                    <span className="truncate Text_S_Normal">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from the club.</span>
                </div>
            </div>
        </div>
        <div className="column gap-10">
            <hr />
            <div className="row gap-20 m-column">
                <div className="row flex-spread gap-20 m-column">
                    <span>© 2024 Malindi Turtles Rugby Club. All rights reserved.</span>
                    <div className="row gap-10 m-flex-wrap">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies Settings</a>
                    </div>
                </div>
                <div className="row gap-10">
                    <a href="https://www.facebook.com/MalindiTurtlesRugby" target="_blank"><Icons variant="facebook"/></a>
                    <a href="https://www.instagram.com/malinditurtlesrugby/" target="_blank"><Icons variant="instagram"/></a>
                    <a href="https://x.com/RugbyMalindi" target="_blank"><Icons variant="twitter"/></a>
                    <a href="" target="_blank"><Icons variant="Youtube"/></a>
                </div>
            </div>
        </div>
        </footer>
    );
   }
   export default footer;