import Icons from '../../icons';
import teamPhoto from '@/assets/lib/extend/dropdown/media/team photo.jpg';

export default function CardTeams() {
    return (
        <div className="cardTeams row gap-20">
            <div className='row wide-ratio-x gap-10'>
                <div className='row flex-spread'>
                    <div className="dropdown-AdCards-l">
                        <div className="contentWrap">
                        <span>Training schedule</span>
                        <p>Pre-made essentials like buttons and toasts</p>
                        </div>
                        <div className="imageWrap"><img src={teamPhoto} alt="" /></div>
                    </div>
                </div>
                <div className='row gap-10 flex-spread'>
                    <div className="dropdown-AdCards-l">
                        <div className="contentWrap">
                            <span>Home ground</span>
                            <p>Pre-made essentials like buttons and toasts</p>
                        </div>
                        <div className="imageWrap"><img src={teamPhoto} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="dropdownNav column gap-20">
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Teams</span>
                    <div className="link"><a href="">Senior Men's <Icons variant="chevron-right"/></a></div>
                    <div className="link"><a href="">Senior Women's <Icons variant="chevron-right"/></a></div>
                    <div className="link"><a href="">Youth <Icons variant="chevron-right"/></a></div>
                </div>
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Mentorship</span>
                    <div className="link"><a href="">Schools <Icons variant="chevron-right"/></a></div>
                    <div className="link"><a href="">Register <Icons variant="chevron-right"/></a></div>
                </div>
            </div>
        </div>
    )
};

export const MobileCardTeams = () =>  {
    return(
        <div className="cardTeams row gap-20">
        <div className="sidebarDropNav column gap-20">
            <div className='column gap-10'>
                <span className='bold Text_M_Normal'>Teams</span>
                <div className="link"><a href="">Senior Men's <Icons variant="chevron-right"/></a></div>
                <div className="link"><a href="">Senior Women's <Icons variant="chevron-right"/></a></div>
                <div className="link"><a href="">Youth <Icons variant="chevron-right"/></a></div>
            </div>
            <div className='column gap-10'>
                <span className='bold Text_M_Normal'>Mentorship</span>
                <div className="link"><a href="">Schools <Icons variant="chevron-right"/></a></div>
                <div className="link"><a href="">Register <Icons variant="chevron-right"/></a></div>
            </div>
        </div>
    </div>
    )
};