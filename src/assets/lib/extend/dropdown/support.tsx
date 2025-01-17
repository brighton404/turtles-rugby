import Icons from "../../icons";

export default function CardSupport() {
    return (
        <div className="cardTeams row gap-20">
            <div className='row wide-ratio-x gap-10'>
                <div className='row flex-spread'>
                    <div className="dropdown-AdCards-l">
                        <div className="contentWrap">
                        <span>Community</span>
                        <p>Pre-made essentials like buttons and toasts</p>
                        </div>
                        <div className="imageWrap"><img src="../src/assets/lib/extend/dropdown/media/team photo.jpg" alt="" /></div>
                    </div>
                </div>
                <div className='column gap-10 flex-spread'>
                    <div className="dropdown-AdCards-l">
                        <div className="contentWrap">
                            <span>Home ground</span>
                            <p>Pre-made essentials like buttons and toasts</p>
                        </div>
                        <div className="imageWrap"><img src="../src/assets/lib/extend/dropdown/media/team photo.jpg" alt="" /></div>
                    </div>
                    <div className="dropdown-AdCards-s">
                        <div className="contentWrap">
                            <span>Home ground</span>
                            <p>Pre-made essentials like buttons and toasts</p>
                        </div>
                        <div className="imageWrap"><img src="../src/assets/lib/extend/dropdown/media/team photo.jpg" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="dropdownNav column gap-20">
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Club support</span>
                    <div className="link"><a href="">Patnership <Icons variant="chevron-right"/></a></div>
                    <div className="link"><a href="/sponsor">Sponsorship <Icons variant="chevron-right"/></a></div>
                </div>
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Work</span>
                    <div className="link"><a href="">Jobs <Icons variant="chevron-right"/></a></div>
                    <div className="link"><a href="">Volunteer <Icons variant="chevron-right"/></a></div>
                </div>
            </div>
        </div>
    )
};
export const MobileCardSupport = () => {
    return (
        <div className="column gap-20">
            <div className="sidebarDropNav column gap-20">
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Club support</span>
                    <div className="link"><a href="">Patnership <Icons variant="chevron-right"/></a></div>
                    <div className="link"><a href="">Sponsorship <Icons variant="chevron-right"/></a></div>
                </div>
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Work</span>
                    <div className="link"><a href="">Jobs <Icons variant="chevron-right"/></a></div>
                    <div className="link"><a href="">Volunteer <Icons variant="chevron-right"/></a></div>
                </div>
            </div>
        </div>
    )
};