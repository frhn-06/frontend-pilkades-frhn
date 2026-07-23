import { AiFillBehanceSquare } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { IoMdPeople, IoMdSettings } from "react-icons/io";
import { MdBarChart, MdDashboard, MdEventNote, MdHowToVote, MdLogout } from "react-icons/md";

const listsidebar = {
    admin: [
        {
            id: "dashboard",
            label: "Dashboard",
            href: "/admin/dashboard",
            icon: <MdDashboard className="w-8 h-8" />
        },
        {
            id: "pilkades",
            label: "Pilkades",
            href: "/admin/election",
            icon: <MdEventNote  className="w-8 h-8" />
        },
        {
            id: "tps",
            label: "Tps",
            href: "/admin/tps",
            icon: <MdHowToVote className="w-8 h-8" />
        },
        {
            id: "petugas",
            label: "Petugas",
            href: "/admin/petugas",
            icon: <IoMdPeople  className="w-8 h-8" />
        },
        {
            id: "kandidat",
            label: "Kandidat",
            href: "/admin/candidate",
            icon: <FaUserTie  className="w-8 h-8" />
        },
        {
            id: "hasil",
            label: "Hasil Suara",
            href: "/admin/voting",
            icon: <MdBarChart  className="w-8 h-8" />
        },
        {
            id: "pengaturan",
            label: "Pengaturan",
            href: "/admin/settings",
            icon: <IoMdSettings  className="w-8 h-8" />
        }
    ],

    petugas: [
        {
            id: "dashboard",
            label: "Dashboard",
            href: "/admin/dashboard",
            icon: <AiFillBehanceSquare className="w-8 h-8" />
        },
        {
            id: "voter",
            label: "Voter",
            href: "/admin/dashboard",
            icon: <AiFillBehanceSquare className="w-8 h-8" />
        },
        {
            id: "pengaturan",
            label: "Pengaturan",
            href: "/admin/dashboard",
            icon: <AiFillBehanceSquare className="w-8 h-8" />
        }
    ]
}


export default listsidebar;