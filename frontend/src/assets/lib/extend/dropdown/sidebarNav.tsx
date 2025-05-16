import React, { useEffect, useRef, useState } from "react";
import { ButtonColor, ButtonState } from "../../button";
import Icons from "../../icons";
import ActionButton from "../../actionButton";
import DropCards from "../../extend/dropdown/display";

interface sidebarNavProps {
  label: string;
  displayCard: 'default' | 'community' | 'm-community' | 'teams' | 'm-teams' | 'support' | 'm-support';
}

const sidebarNav: React.FC<sidebarNavProps> = ({ label, displayCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarNavRef = useRef<HTMLDivElement | null>(null);

  const togglesidebarNav = () => {
    setIsOpen((prev) => !prev);
  };
  const closesidebarNav = () => setIsOpen(false);
  const closeDropdown = () => setIsOpen(false);

  // Close sidebarNav if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarNavRef.current && !sidebarNavRef.current.contains(event.target as Node)) {
        closesidebarNav();
      }
    };
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div style={{display: "inline" }} ref={sidebarNavRef}>
      <div className="ActionTriggger">
      <ActionButton onClick={togglesidebarNav} aria-haspopup="listbox" aria-expanded={isOpen} color={ButtonColor.Primary} state={ButtonState.Default} icon={<Icons variant="chevron-down" />}  isOutlined={false}>
        {label}
      </ActionButton>
      </div>
      <div role="listbox" className={`sidebarNav-menu column gap-2 ${isOpen ? "open" : "close"}`}>
        <DropCards variant={displayCard} closeDropdown={closeDropdown} />
      </div>
    </div>
  );
};

export default sidebarNav;