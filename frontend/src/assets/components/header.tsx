import { useState } from "react";
import Button, { ButtonColor, ButtonState } from "../lib/button";
import Dropdown from "../lib/dropdown";
import Icons from "../lib/icons";
import Sidebar from "./extend/sidebar";

const header: React.FC = () => {
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Apply the new theme
        document.documentElement.setAttribute('data-theme', newTheme);

        // Save the theme to localStorage
        localStorage.setItem('theme', newTheme);
    };
    const [isSidebarOpen, setSidebarOpen] = useState(false);
        const handleDonate = () => {
          window.location.href = 'https://www.buymeacoffee.com/malinditurtlesrugby';
        };

 return (
    <header>
    <div className="row wide align-y1 content-x1">
        <div className="flex-spread"><a href="/" className="wrap"><div className="logo"></div></a></div>
        <nav className="header-Nav row flex-spread gap-2 align-y1 content-x">
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/"> Home </Button>
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/about"> About </Button>
            <Dropdown label="Teams" displayCard="teams" />
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/news"> News </Button>  
            <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/events"> Events </Button>          
            <Dropdown label="Support" displayCard="support" />
        </nav>
        <div className="row flex-spread gap-2 align-y2 CAT">
            <div className="row m-none">
                <Button onClick={toggleTheme} color={ButtonColor.Optimal} state={ButtonState.Default} icon={<Icons variant="sun"/>} isOutlined={false} >theme</Button>
                <Button color={ButtonColor.Accent} state={ButtonState.Default} isOutlined={false} onClick={handleDonate} > Donate </Button>
            </div>
            <div className="sideBar-button">
                <div onClick={() => setSidebarOpen(true)}><Icons variant="menu"/></div>
            </div>
        </div>
        <Sidebar isOpen={isSidebarOpen}  onClose={() => setSidebarOpen(false)}/>
    </div>
    </header>
 );
}
export default header;