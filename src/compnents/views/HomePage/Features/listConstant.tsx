import { FaFileDownload, FaNetworkWired, FaUserFriends, FaUsers, FaUserTie } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { LuChartNoAxesCombined, LuTicketCheck } from "react-icons/lu";
import { MdHowToVote } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const listConstant = [
    {
        title: "Manajemen Pemilihan",
        description: "Buat dan kelola pemilihan dengan pengaturan yang terstruktur.",
        icon: [
            <IoSettingsSharp key={1} className="w-full h-full" />
        ]      
    },
    {
        title: "Kandidat, TPS & Petugas",
        description: "Kelola kandidat, tempat pemungutan suara, dan petugas dalam satu sistem.",
        icon: [
            <FaUserTie key={1} className="w-full h-full" />,
            <FaNetworkWired key={2} className="w-full h-full" />,
            <FaUserFriends key={3} className="w-full h-full" />
        ]    
    },
    {
        title: "Data Pemilih",
        description: "Kelola data pemilih dan pantau status kehadiran serta partisipasi.",
        icon: [
            <FaUsers key={1} className="w-full h-full" />
        ]    
    },
    {
        title: "Pemungutan Suara",
        description: "Jalankan proses pemungutan suara menggunakan token yang aman.",
        icon: [
            <MdHowToVote key={1} className="w-full h-full" />
        ]    
    },
  
    {
        title: "Real-Time Monitoring & Hasil",
        description: "Pantau partisipasi pemilih dan perolehan suara secara real-time langsung, transparansi, dan terpusat.",
        icon: [
            <LuChartNoAxesCombined key={1} className="w-full h-full" />
        ]    
    },
    {
        title: "Export Laporan",
        description: "Simpan dan bagikan hasil pemilihan dalam laporan PDF yang siap digunakan.",
        icon: [
          <FaFileDownload key={1} className="w-full h-full" />
        ]
    },
]


export default listConstant;
