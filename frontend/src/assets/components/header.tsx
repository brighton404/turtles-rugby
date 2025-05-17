import { useState } from "react";
import Button, { ButtonColor, ButtonState } from "../lib/button";
import Dropdown from "../lib/dropdown";
import Icons from "../lib/icons";
import { Sheet } from "./extend/sheet";
import Sidebar from "./extend/sidebar";
import { useSidebar } from "./extend/sidebarContext";
import { ThemeToggle } from "./theme";

const header: React.FC = () => {
/*     const handleDonate = () => {
        window.location.href = 'https://www.buymeacoffee.com/malinditurtlesrugby';
    }; */
    const { openSidebar } = useSidebar();
    const [open, setOpen] = useState(false);
 return (
    <header>
    <div className="row wide align-y1 content-x1">
        <div className="flex-spread"><a href="/" className="wrap"><div className="logo"></div></a></div>
        <nav className="header-Nav row flex-spread gap-2 align-y1 content-x">
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/" disabled={false} > Home </Button>
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/about" disabled={false} > About </Button>
            <Dropdown label="Teams" displayCard="teams" />
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/news" disabled={false} > News </Button>  
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/events" disabled={false} > Events </Button>          
            <Dropdown label="Support" displayCard="support" />
        </nav>
        <div className="row flex-spread gap-2 align-y2 CAT">
            <div className="row m-none">
                <ThemeToggle />
                <Button color={ButtonColor.Accent} state={ButtonState.Default} isOutlined={false} onClick={() => setOpen(true)} disabled={false}  > Donate </Button>
                <Sheet isOpen={open} onClose={() => setOpen(false)} zIndex={2000}>
                    <h2>No payment methods are setup</h2>
                    <p>Please try again back later</p>
                </Sheet>
            </div>
            <div className="sideBar-button">
                <div onClick={openSidebar}><Icons variant="menu"/></div>
            </div>
        </div>
        <Sidebar />
    </div>
    </header>
 );
}
export default header;