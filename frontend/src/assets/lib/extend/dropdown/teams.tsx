import { Link, useNavigate } from 'react-router-dom';
import Icons from '../../icons';
import teamPhoto from '@/assets/lib/extend/dropdown/media/team photo.jpg';
import { useSidebar } from '@/assets/components/extend/sidebarContext';
import { useDropdown } from '@/assets/components/extend/dropdownContext';


export default function CardTeams() {
    const navigate = useNavigate();
    const { closeDropdown } = useDropdown();
    const onSeniorMen = () => { navigate('/mens-team')};
    const onSeniorWoMen = () => { navigate('/womens-team');};
    const onManagement = () => { navigate('/management')};
    const onJoinClub = () => { navigate('/apply#SchoolForm-tab')};
    const onMentorPage = () => { navigate('/mentorship')};
    const { closeSidebar } = useSidebar();

    return (
        <div className="cardTeams row gap-20">
            <div className='row wide-ratio-x gap-10'>
                <Link className='row flex-spread' to="/age-grade" onClick={closeDropdown}>
                    <div className="dropdown-AdCards-l">
                        <div className="contentWrap">
                        <span>Age grade</span>
                        <p>Schools under our training program</p>
                        </div>
                        <div className="imageWrap"><img src={teamPhoto} alt="" /></div>
                    </div>
                </Link>
                <div className='row gap-10 flex-spread'>
                    <div className="dropdown-AdCards-l">
                        <div className="contentWrap">
                            <span>Training schedule</span>
                            <p>Training schedules for each team</p>
                        </div>
                        <div className="imageWrap"><img src={teamPhoto} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="dropdownNav column gap-20">
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Teams</span>
                    <div className="link" onClick={() => { onSeniorMen(); closeSidebar(); closeDropdown()  }}>
                        <div className="inner">
                            <span>Senior Men's </span>
                            <Icons variant="chevron-right"/>
                        </div>
                    </div>
                    <div className="link" onClick={() => { onSeniorWoMen(); closeSidebar(); closeDropdown() }}>
                        <div className="inner">
                            <span>Senior Women's</span>
                            <Icons variant="chevron-right"/>
                        </div>
                    </div>
                    <div className="link" onClick={() => { onManagement(); closeSidebar(); closeDropdown() }}><div className="inner"><span>Management</span><Icons variant="chevron-right"/></div></div>
                </div>
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Mentorship</span>
                    <div className="link" onClick={() => { onMentorPage(); closeSidebar(); closeDropdown() }}><div className="inner"><span>Schools</span> <Icons variant="chevron-right"/></div></div>
                    <div className="link" onClick={() => { onJoinClub(); closeSidebar(); closeDropdown() }}><div className="inner"><span>Register</span> <Icons variant="chevron-right"/></div></div>
                </div>
            </div>
        </div>
    )
};

export const MobileCardTeams = () =>  {
    const navigate = useNavigate();
    const { closeDropdown } = useDropdown();
    const onAgeGrade = () => { navigate('/age-grade')};
    const onSeniorMen = () => { navigate('/mens-team')};
    const onSeniorWoMen = () => { navigate('/womens-team');};
    const onManagement = () => { navigate('/management')};
    const onJoinClub = () => { navigate('/apply#SchoolForm-tab')};
    const onMentorPage = () => { navigate('/mentorship')};
    const { closeSidebar } = useSidebar();

    return(
        <div className="cardTeams row gap-20">
        <div className="sidebarDropNav column gap-20">
            <div className='column gap-10'>
                <span className='bold Text_M_Normal'>Teams</span>
                <div className="link"onClick={() => { onAgeGrade(); closeSidebar(); closeDropdown() }}>
                    <div className="inner">
                        <span>Age Grade</span> <Icons variant="chevron-right"/>
                    </div>
                </div>
                <div className="link"onClick={() => { onSeniorMen(); closeSidebar(); closeDropdown() }}>
                    <div className="inner">
                        <span>Senior Men's</span> <Icons variant="chevron-right"/>
                    </div>
                </div>
                <div className="link" onClick={() => { onSeniorWoMen(); closeSidebar(); closeDropdown() }}>
                    <div className="inner">
                        <span>Senior Women's</span> <Icons variant="chevron-right"/>
                    </div>
                </div>
                <div className="link"  onClick={() => { onManagement(); closeSidebar(); closeDropdown() }}>
                    <div className="inner">
                        <span>Management</span> <Icons variant="chevron-right"/>
                    </div>
                </div>
            </div>
            <div className='column gap-10'>
                <span className='bold Text_M_Normal'>Mentorship</span>
                <div className="link" onClick={() => { onMentorPage(); closeSidebar(); closeDropdown() }}><div className="inner"><span>Schools</span> <Icons variant="chevron-right"/></div></div>
                <div className="link" onClick={() => { onJoinClub(); closeSidebar(); closeDropdown() }}><div className="inner"><span>Register</span> <Icons variant="chevron-right"/></div></div>
            </div>
        </div>
    </div>
    )
};
