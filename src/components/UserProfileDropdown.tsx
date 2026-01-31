import { useState, useRef, useEffect } from "react";
import type { IconType } from "react-icons";
import {
  FiChevronDown,
  FiCreditCard,
  FiLogOut,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function UserProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="w-16">
      {/* Avatar button */}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 w-16"
      >
        <img
          src="/src/assets/images/netflixprofile.jpg"
          alt="Profile"
          className="rounded"
        />
        <FiChevronDown
          className={`text-white transition-transform ${
            open ? "rotate-180" : ""
          }`}
          size={50}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 right-0 mt-2 w-48 bg-[#141414] border border-[#333] rounded shadow-lg overflow-hidden">
          <DropdownItem label="Profile" Icon={FiUser} />
          <DropdownItem label="Account" Icon={FiCreditCard} />
          <DropdownItem label="Settings" Icon={FiSettings} />
          <div className="border-t border-[#333]" />
          <DropdownItem
            label="Sign out"
            Icon={FiLogOut}
            danger
            onClick={() => navigate("/login")}
          />
        </div>
      )}
    </div>
  );
}

function DropdownItem({
  label,
  Icon,
  danger,
  onClick,
}: {
  label: string;
  Icon: IconType;
  danger?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex items-center text-sm h-10 cursor-pointer hover:bg-[#333] ${
        danger ? "text-red-500" : "text-white"
      }`}
      onClick={onClick}
    >
      <div className="px-2 flex gap-2">
        <Icon size={16} className="opacity-80" />
        {label}
      </div>
    </div>
  );
}
