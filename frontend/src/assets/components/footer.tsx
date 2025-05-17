import { Link } from "react-router-dom";
import Icons from "../lib/icons";

const footer: React.FC = () => {
    return (
        <footer className="gap-100">
            <div className="row m-column details-parent">
                <div className="details row gap-4">
                <div className="details-child">
                        <span className="Tagline">Quick links</span>
                        <div className="column top content-left">
                            <div className="link"><Link to="/partners" className="no_truncate">Our partners</Link></div>
                            <div className="link"><Link to="/sponsor" className="no_truncate">Our sponsors</Link></div>
                            <div className="link"><Link to="/community" className="no_truncate">Community</Link></div>
                            <div className="link"><Link to="/mentorship" className="no_truncate">Tutoring</Link></div>
                            <div className="link"><Link to="/apply" className="no_truncate">Volunteer</Link></div>
                        </div>
                    </div>
                    <div className="details-child">
                        <span className="Tagline">About us</span>
                        <div className="column top content-left">
                        <div className="link"><Link to="/about" className="no_truncate">History</Link></div>
                        <div className="link"><Link to="/about" className="no_truncate">Impact</Link></div>
                        <div className="link"><Link to="/about" className="no_truncate">Sustainability</Link></div>
                        <div className="link"><Link to="/apply" className="no_truncate">Join us</Link></div>
                        {/* <div className="link"><Link to="" className="no_truncate">Brand toolkit</Link></div> */}
                        </div>
                    </div>
                    <div className="details-child">
                        <span className="Tagline">Teams</span>
                        <div className="column top content-left">                    
                        <div className="link"><Link to="/Mens-team" className="no_truncate">Seniors Men</Link></div>
                        <div className="link"><Link to="/Womens-team" className="no_truncate">Seniors Women</Link></div>
                        <div className="link"><Link to="/management" className="no_truncate">Management</Link></div>
                        {/* <Button color={ButtonColor.Accent} state={ButtonState.Default} isOutlined={false} navigateTo="/apply#JoinForm-tab"> Play </Button> */}
                        </div>
                    </div>
                    <div className="details-child">
                        <span className="Tagline">Calendar</span>
                        <div className="column top content-left">
                            <div className="link"><Link to="/events" className="no_truncate">Events</Link></div>
                            <div className="link"><Link to="/teams" className="no_truncate">Training</Link></div>
                            <div className="link"><Link to="/news" className="no_truncate">Fixtures</Link></div>
                        </div>
                    </div>
                    <div className="details-child">
                        <span className="Tagline">Contact</span>
                        <div className="column top content-left">
                            <div className="link">                                
                                <Link to="mailto:malinditurtlesrugby@gmail.com" className="no_truncate"><Icons variant="mail"/>Email</Link></div>
                            <div className="link">                               
                                <Link to="tel:+254710636046" className="no_truncate"><Icons variant="phone"/>Support Line</Link></div>
                            <div className="link"><Link to="/apply#ReviewForm-tab" className="no_truncate"><Icons variant="file"/>Feedback form</Link></div>
                        </div>
                    </div>
                    {/* <div className="Newsletter-form column details-child"><div className="column"><span className="Tagline ">Subscribe</span><span className="truncate">Join our newsletter to stay up to date on features and releases.</span></div><div className="column flex-spread gap-10"><div className="Collecter row gap-2"><label htmlFor="newsletter" className="no_truncate" id="newsletterInputLabel">Your Email</label><input type="text" id="newsletter" placeholder="Your Email" /><Button color={ButtonColor.Accent} state={ButtonState.Disabled} isOutlined={false} > Coming soon </Button></div><span className="truncate Text_S_Normal">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from the club.</span></div></div> */}
                </div>
            </div>
            <div className="column gap-10">
                <hr />
                <div className="row gap-20 m-column">
                    <div className="row flex-spread gap-10 m-column flex-wrap">
                        <span className="m-txt_Middle no_truncate m-truncate">© 2025 Malindi Turtles Rugby Club. <br className="s-br" /> All rights reserved.</span>
                        <span>Maintained by <Link to="https://brighton404.vercel.app/" target="_blank">Julius Brighton</Link></span>
{/*                         <div className="row m-align-y m-content-x1 gap-10 m-flex-wrap">
                            <Link className="no_truncate" to="">Privacy Policy</Link>
                            <Link className="no_truncate" to="">Terms of Service</Link>
                            <Link className="no_truncate" to="">Cookies Settings</Link>
                        </div> */}
                    </div>
                    <div className="row m-align-y m-content-x1 gap-10">
                        <Link to="https://www.facebook.com/MalindiTurtlesRugby" target="_blank"><Icons variant="facebook"/></Link>
                        <Link to="https://www.instagram.com/malinditurtlesrugby/" target="_blank"><Icons variant="instagram"/></Link>
                        <Link to="https://x.com/RugbyMalindi" target="_blank"><Icons variant="twitter"/></Link>
                        <Link to="" target="_blank"><Icons variant="Youtube"/></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
   }
   export default footer;