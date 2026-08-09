import { IoSettingsSharp } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdHowToVote } from "react-icons/md";

const listConstant = [
    {
        id: "setup",
        title: "Election Setup",
        icon: <IoSettingsSharp className="w-full h-full" />
    },
    {
        id: "voting",
        title: "Voting Process",
        icon: <MdHowToVote className="w-full h-full" />
    },
    {
        id: "result",
        title: "Results Monitoring",
        icon: <LuChartNoAxesCombined className="w-full h-full" />
    },
]

export default listConstant