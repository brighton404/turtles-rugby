import Button, { ButtonColor, ButtonState } from "../lib/button";
import Icons from "../lib/icons";

const footer: React.FC = () => {
    return (
        <footer className="gap-100">
            <div className="row m-column details-parent">
                <div className="details row gap-4">
                <div className="details-child">
                        <span className="Tagline">Quick links</span>
                        <div className="column top content-left">
                            <div className="link"><a href="" className="no_truncate">Our partners</a></div>
                            <div className="link"><a href="" className="no_truncate">Our sponsors</a></div>
                            <div className="link"><a href="/community" className="no_truncate">Community</a></div>
                            <div className="link"><a href="" className="no_truncate">Tutoring</a></div>
                            <div className="link"><a href="" className="no_truncate">Volunteer</a></div>
                        </div>
                    </div>
                    <div className="details-child">
                        <span className="Tagline">About us</span>
                        <div className="column top content-left">
                        <div className="link"><a href="" className="no_truncate">History</a></div>
                        <div className="link"><a href="" className="no_truncate">Impact</a></div>
                        <div className="link"><a href="" className="no_truncate">Sustainability</a></div>
                        <div className="link"><a href="" className="no_truncate">Join us</a></div>
                        <div className="link"><a href="" className="no_truncate">Brand toolkit</a></div>
                        </div>
                    </div>
                    <div className="details-child">
                        <span className="Tagline">Teams</span>
                        <div className="column top content-left">                    
                        <div className="link"><a href="" className="no_truncate">Seniors Men</a></div>
                        <div className="link"><a href="" className="no_truncate">Seniors Women</a></div>
                        <div className="link"><a href="" className="no_truncate">Management</a></div>
                        <Button color={ButtonColor.Accent} state={ButtonState.Default} isOutlined={false} navigateTo="/"> Play </Button>
                        </div>
                    </div>
                    <div className="details-child">
                        <span className="Tagline">Calendar</span>
                        <div className="column top content-left">
                            <div className="link"><a href="" className="no_truncate">Events</a></div>
                            <div className="link"><a href="" className="no_truncate">Training</a></div>
                            <div className="link"><a href="" className="no_truncate">Fixtures</a></div>
                        </div>
                    </div>
                    <div className="details-child">
                        <span className="Tagline">Contact</span>
                        <div className="column top content-left">
                            <div className="link"><a href="" className="no_truncate"><Icons variant="mail"/>Email</a></div>
                            <div className="link"><a href="" className="no_truncate"><Icons variant="phone"/>Support Line</a></div>
                            <div className="link"><a href="" className="no_truncate"><Icons variant="file"/>Feedback form</a></div>
                        </div>
                    </div>
                    {/* <div className="Newsletter-form column details-child"><div className="column"><span className="Tagline ">Subscribe</span><span className="truncate">Join our newsletter to stay up to date on features and releases.</span></div><div className="column flex-spread gap-10"><div className="Collecter row gap-2"><label htmlFor="newsletter" className="no_truncate" id="newsletterInputLabel">Your Email</label><input type="text" id="newsletter" placeholder="Your Email" /><Button color={ButtonColor.Accent} state={ButtonState.Disabled} isOutlined={false} > Coming soon </Button></div><span className="truncate Text_S_Normal">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from the club.</span></div></div> */}
                </div>
            </div>
            <div className="column gap-10">
                <hr />
                <div className="row gap-20 m-column">
                    <div className="row flex-spread gap-20 m-column flex-wrap">
                        <span className="m-txt_Middle no_truncate">© 2024 Malindi Turtles Rugby Club. All rights reserved.</span>
                        <div className="row m-align-y m-content-x1 gap-10 m-flex-wrap">
                            <a className="no_truncate" href="">Privacy Policy</a>
                            <a className="no_truncate" href="">Terms of Service</a>
                            <a className="no_truncate" href="">Cookies Settings</a>
                        </div>
                    </div>
                    <div className="row m-align-y m-content-x1 gap-10">
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