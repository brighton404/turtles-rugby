/* import ActionButton from "../lib/actionButton";
import { ButtonColor, ButtonState } from "../lib/actionButton"; */
import Icons from "../lib/icons";
/* import NoiseTrailCanvas from "./noise"; */
/* import StarfieldCanvas from "./stars"; */

export default function hero() {
    return (
        <section className="hero">
            {/* <StarfieldCanvas /> */}
            {/* <NoiseTrailCanvas /> */}
            <div className="column flex-spread align-y2 gap-40">
                <div className="wrap-desc column align-y2 content-x1 gap-20">
                    <div className="desc column gap-20 m-flex-spread">
                        <h1 className="txt_Middle m-txt_left no_margins">Grow, Inspire & Unify<br className="m-br"/> Through Rugby</h1>
                        <p className="txt_Middle m-txt_left no_margins Tagline bold truncate">We are committed to fostering a love for the game while developing <br className="m-br"/> players of all ages and skill levels. Our club is more than just a sporting organization; <br className="m-br" /> it's a family that embraces diversity, inclusivity, and a shared love for rugby.</p>
                    </div>
{/*                     <div className="CAT">
                        <ActionButton color={ButtonColor.Secondary} state={ButtonState.Default} isOutlined={false} icon={<Icons variant="arrow-right"/>} navigateTo="/community"> Community </ActionButton>
                        </div>       */}              
                </div>
                <div className="Social-links row gap-2 align-y1 m-flex-wrap wide-flex">
                    <a className="link" href="https://www.facebook.com/MalindiTurtlesRugby">
                        <Icons variant="facebook"/><span>Facebook</span>
                    </a>
                    <a className="link" href="https://www.instagram.com/malinditurtlesrugby/">
                        <Icons variant="instagram"/><span>Instagram</span>
                    </a>
                    <a className="link" href="https://x.com/RugbyMalindi">
                        <Icons variant="twitter"/><span>Twitter</span></a>
                    <a className="link" href="https://chat.whatsapp.com/FUnw2QN9aFE9QguDCOt4F9">
                        <Icons variant="Whatsapp"/><span>Whatsapp</span>
                    </a>
                    <a className="link" href="https://www.instagram.com/malinditurtlesrugby/">
                        <Icons variant="Youtube"/><span>Youtube</span>
                    </a>
                </div>
                <div className="heroCanvas align-y content-x2">
                    <div className="img one"></div>
                    <div className="img two"></div>
                    <div className="img three"></div>
                    <div className="img four"></div>
                    <div className="img five"></div>
                    <div className="img six"></div>
                </div>
            </div>
        </section>
    )
};

export function HeroAbout() {
    return (
        <section className="hero-about Text_L_Bold align-y1 content-x1">
            <div className="heroCanvas align-y1 content-x1">
                <div className="img one"></div>
                <div className="img two"></div>
                <div className="img three"></div>
                <div className="img four"></div>
                <div className="img five"></div>
            </div>
        </section>
    )
};