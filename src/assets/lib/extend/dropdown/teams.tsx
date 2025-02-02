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
                    <div className="link"><div className="inner"><span>Senior Men's </span><Icons variant="chevron-right"/></div></div>
                    <div className="link"><div className="inner"><span>Senior Women's</span><Icons variant="chevron-right"/></div></div>
                    <div className="link"><div className="inner"><span>Youth</span><Icons variant="chevron-right"/></div></div>
                </div>
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Mentorship</span>
                    <div className="link"><div className="inner"><span>Schools</span> <Icons variant="chevron-right"/></div></div>
                    <div className="link"><div className="inner"><span>Register</span> <Icons variant="chevron-right"/></div></div>
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
                <div className="link"><div className="inner"><span>Senior Men's</span> <Icons variant="chevron-right"/></div></div>
                <div className="link"><div className="inner"><span>Senior Women's</span> <Icons variant="chevron-right"/></div></div>
                <div className="link"><div className="inner"><span>Youth</span> <Icons variant="chevron-right"/></div></div>
            </div>
            <div className='column gap-10'>
                <span className='bold Text_M_Normal'>Mentorship</span>
                <div className="link"><div className="inner"><span>Schools</span> <Icons variant="chevron-right"/></div></div>
                <div className="link"><div className="inner"><span>Register</span> <Icons variant="chevron-right"/></div></div>
            </div>
        </div>
    </div>
    )
};