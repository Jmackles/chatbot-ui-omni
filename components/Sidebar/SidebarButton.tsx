// SidebarButton.tsx
import React, { FC } from "react";

interface SidebarButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const SidebarButton: FC<SidebarButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button onClick={onClick} className="...">
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default SidebarButton;
