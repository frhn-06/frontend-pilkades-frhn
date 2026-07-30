import { FaUsers, FaUserTie } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { IoMdPeople, IoMdSettings } from "react-icons/io";
import { MdBarChart, MdDashboard, MdEventNote, MdHowToVote, MdLogout, MdMonitor } from "react-icons/md";

const listsidebar = {
    // admin: [
    //     {
    //         id: "dashboard",
    //         label: "Dashboard",
    //         href: "/admin/dashboard",
    //         icon: <MdDashboard className="w-6 h-6" />
    //     },
    //     {
    //         id: "pilkades",
    //         label: "Pilkades",
    //         href: "/admin/election",
    //         icon: <MdEventNote  className="w-6 h-6" />
    //     },
    //     {
    //         id: "tps",
    //         label: "Tps",
    //         href: "/admin/tps",
    //         icon: <MdHowToVote className="w-6 h-6" />
    //     },
    //     {
    //         id: "petugas",
    //         label: "Petugas",
    //         href: "/admin/petugas",
    //         icon: <IoMdPeople  className="w-6 h-6" />
    //     },
    //     {
    //         id: "kandidat",
    //         label: "Kandidat",
    //         href: "/admin/candidate",
    //         icon: <FaUserTie  className="w-6 h-6" />
    //     },
    //     {
    //         id: "hasil",
    //         label: "Hasil Suara",
    //         href: "/admin/voting",
    //         icon: <MdBarChart  className="w-6 h-6" />
    //     },
    //     {
    //         id: "pengaturan",
    //         label: "Pengaturan",
    //         href: "/admin/settings",
    //         icon: <IoMdSettings  className="w-6 h-6" />
    //     }
    // ],

    // petugas: [
    //     {
    //         id: "dashboard",
    //         label: "Dashboard",
    //         href: "/petugas/dashboard",
    //         icon: <MdDashboard className="w-6 h-6" />
    //     },
    //     {
    //         id: "voter",
    //         label: "Voter",
    //         href: "/petugas/voter",
    //         icon: <FaUsers className="w-6 h-6" />
    //     },
    //     {
    //         id: "pengaturan",
    //         label: "Pengaturan",
    //         href: "/admin/dashboard",
    //         icon: <IoMdSettings className="w-6 h-6" />
    //     }
    // ]
    admin: [
        {
            id: "management",
            label: "Management",
            items: [
                {
                    id: "dashboard",
                    label: "Dashboard",
                    href: "/admin/dashboard",
                    icon: <MdDashboard className="w-6 h-6" />
                },
                {
                    id: "pilkades",
                    label: "Pilkades",
                    href: "/admin/election",
                    icon: <MdEventNote  className="w-6 h-6" />
                },
                {
                    id: "tps",
                    label: "Tps",
                    href: "/admin/tps",
                    icon: <MdHowToVote className="w-6 h-6" />
                },
                {
                    id: "petugas",
                    label: "Petugas",
                    href: "/admin/petugas",
                    icon: <IoMdPeople  className="w-6 h-6" />
                },
                {
                    id: "kandidat",
                    label: "Kandidat",
                    href: "/admin/candidate",
                    icon: <FaUserTie  className="w-6 h-6" />
                },
                {
                    id: "pengaturan",
                    label: "Pengaturan",
                    href: "/admin/settings",
                    icon: <IoMdSettings  className="w-6 h-6" />
                }
            ]
        },
        {
            id: "pemungutan",
            label: "Pemungutan",
            items: [
                {
                    id: "monitoring",
                    label: "Monitoring",
                    href: "/petugas/monitoring",
                    icon: <MdMonitor className="w-6 h-6" />
                },
            ]
        }
    ],

    petugas: [
        {
            id: "management",
            label: "Management",
            items: [
                {
                    id: "dashboard",
                    label: "Dashboard",
                    href: "/petugas/dashboard",
                    icon: <MdDashboard className="w-6 h-6" />
                },
                {
                    id: "voter",
                    label: "Data Voter",
                    href: "/petugas/voter",
                    icon: <FaUsers className="w-6 h-6" />
                },
                {
                    id: "pengaturan",
                    label: "Pengaturan",
                    href: "/admin/dashboard",
                    icon: <IoMdSettings className="w-6 h-6" />
                }
            ]
        },
        {
            id: "pemungutan",
            label: "Pemungutan",
            items: [
                {
                    id: "absensi",
                    label: "Absensi & Token",
                    href: "/petugas/absensi",
                    icon: <FaListCheck className="w-6 h-6" />
                },
                {
                    id: "voting",
                    label: "Voting",
                    href: "/petugas/voting",
                    icon: <MdHowToVote className="w-6 h-6" />
                },
                {
                    id: "monitoring",
                    label: "Monitoring",
                    href: "/petugas/monitoring",
                    icon: <MdMonitor className="w-6 h-6" />
                },
            ]
        }
    ]
}


export default listsidebar;