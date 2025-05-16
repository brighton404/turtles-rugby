import { useNavigate } from "react-router-dom";
import Icons from "../../icons";
import teamPhoto from '@/assets/lib/extend/dropdown/media/team photo.jpg';
import { useSidebar } from "@/assets/components/extend/sidebarContext";
import { useDropdown } from "@/assets/components/extend/dropdownContext";

export default function CardSupport() {

    const navigate = useNavigate();
    const { closeDropdown } = useDropdown();
    const onSponsor = () => {
        navigate('/sponsor');
      };
      const onPartner = () => {
        navigate('/partners');
      };
      const { closeSidebar } = useSidebar();
    return (
        <div className="cardTeams row gap-20">
            <div className='row wide-ratio-x gap-10'>
                <div className='row flex-spread'>
                    <div className="dropdown-AdCards-l">
                        <div className="contentWrap">
                            <span>Community</span>
                            <p>Where all our members sit</p>
                        </div>
                        <div className="imageWrap"><img src={teamPhoto} alt="" /></div>
                    </div>
                </div>
                <div className='column gap-10 flex-spread'>
                    <div className="dropdown-AdCards-l">
                        <div className="contentWrap">
                            <span>Contribute</span>
                            <p>Play a part of promoting to our clause</p>
                        </div>
                        <div className="imageWrap"><img src={teamPhoto} alt="" /></div>
                    </div>
                    <div className="dropdown-AdCards-s">
                        <div className="contentWrap">
                            <span>Sports Act</span>
                            <p>Legal address to our establishment as a rugby club</p>
                        </div>
                        <div className="imageWrap"><img src={teamPhoto} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="dropdownNav column gap-20">
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Club support</span>
                    <div className="link">
                        <div className="inner" onClick={() => { onPartner(); closeSidebar(); closeDropdown() }}>
                            <span>Patnership</span>
                            <Icons variant="chevron-right"/>
                        </div>
                    </div>
                    <div className="link" onClick={() => { onSponsor(); closeSidebar(); }}>
                        <div className="inner">
                            <span>Sponsorship</span>
                            <Icons variant="chevron-right"/>
                        </div>                        
                    </div>
                </div>
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Work</span>
                    <div className="link">
                        <div className="inner">
                            <span>Jobs</span>
                            <Icons variant="chevron-right"/>
                        </div>
                    </div>
                    <div className="link"><div className="inner">
                        <span>Volunteer</span>
                        <Icons variant="chevron-right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export const MobileCardSupport = () => {
    const navigate = useNavigate();

    const onSponsor = () => {
        navigate('/sponsor');
      };
      const onPartner = () => {
        navigate('/partners');
      };
      const { closeSidebar } = useSidebar();
    return (
        <div className="column gap-20">
            <div className="sidebarDropNav column gap-20">
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Club support</span>
                    <div className="link">
                        <div className="inner" onClick={() => { onPartner(); closeSidebar(); }}>
                            <span>Patnership</span>
                            <Icons variant="chevron-right"/>
                        </div>
                    </div>
                    <div className="link"onClick={() => { onSponsor(); closeSidebar(); }}>
                        <div className="inner">
                            <span>Sponsorship</span>
                            <Icons variant="chevron-right"/>
                        </div>                        
                    </div>
                </div>
                <div className='column gap-10'>
                    <span className='bold Text_M_Normal'>Work</span>
                    <div className="link">
                        <div className="inner">
                            <span>Jobs</span>
                            <Icons variant="chevron-right"/>
                        </div>
                    </div>
                    <div className="link">
                        <div className="inner">
                            <span>Volunteer</span>
                            <Icons variant="chevron-right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};