import { useNavigate } from 'react-router-dom';
import Icons from '../../icons';
import teamPhoto from '@/assets/lib/extend/dropdown/media/team photo.jpg';


export default function CardTeams() {
    const navigate = useNavigate();

    const onSeniorMen = () => { navigate('/mens-team')};
    const onSeniorWoMen = () => { navigate('/womens-team');};
    const onManagement = () => { navigate('/management')};
    const onJoinClub = () => { navigate('/membership')};
    const onMentorPage = () => { navigate('/mentorship')};

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
                    <div className="link" onClick={onSeniorMen}>
                        <div className="inner">
                            <span>Senior Men's </span>
                            <Icons variant="chevron-right"/>
                        </div>
                    </div>
                    <div className="link" onClick={onSeniorWoMen}>
                        <div className="inner">
                            <span>Senior Women's</span>
                            <Icons variant="chevron-right"/>
                        </div>
                    </div>
                    <div className="link" onClick={onManagement}><div className="inner"><span>Management</span><Icons variant="chevron-right"/></div></div>
                </div>
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Mentorship</span>
                    <div className="link" onClick={onMentorPage}><div className="inner"><span>Schools</span> <Icons variant="chevron-right"/></div></div>
                    <div className="link" onClick={onJoinClub}><div className="inner"><span>Register</span> <Icons variant="chevron-right"/></div></div>
                </div>
            </div>
        </div>
    )
};

export const MobileCardTeams = () =>  {
    const navigate = useNavigate();

    const onSeniorMen = () => { navigate('/mens-team')};
    const onSeniorWoMen = () => { navigate('/womens-team');};
    const onManagement = () => { navigate('/management')};
    const onJoinClub = () => { navigate('/membership')};
    const onMentorPage = () => { navigate('/mentorship')};

    return(
        <div className="cardTeams row gap-20">
        <div className="sidebarDropNav column gap-20">
            <div className='column gap-10'>
                <span className='bold Text_M_Normal'>Teams</span>
                <div className="link" onClick={onSeniorMen}>
                    <div className="inner">
                        <span>Senior Men's</span> <Icons variant="chevron-right"/>
                    </div>
                </div>
                <div className="link" onClick={onSeniorWoMen}>
                    <div className="inner">
                        <span>Senior Women's</span> <Icons variant="chevron-right"/>
                    </div>
                </div>
                <div className="link"  onClick={onManagement}>
                    <div className="inner">
                        <span>Management</span> <Icons variant="chevron-right"/>
                    </div>
                </div>
            </div>
            <div className='column gap-10'>
                <span className='bold Text_M_Normal'>Mentorship</span>
                <div className="link" onClick={onMentorPage}><div className="inner"><span>Schools</span> <Icons variant="chevron-right"/></div></div>
                <div className="link" onClick={onJoinClub}><div className="inner"><span>Register</span> <Icons variant="chevron-right"/></div></div>
            </div>
        </div>
    </div>
    )
};
