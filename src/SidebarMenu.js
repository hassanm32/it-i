import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // أيقونات الهامبرجر والإكس
import "./SidebarMenu.css";

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* زرار الفتح */}
      <button className="menu-btn" onClick={() => setOpen(true)}>
        <FiMenu size={28} />
      </button>

      {/* القائمة الجانبية */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <FiX size={28} />
        </button>
        <ul>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About us</a></li>
          <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact us</a></li>
        </ul>
      </div>
    </div>
  );
}
