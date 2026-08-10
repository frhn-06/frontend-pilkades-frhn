import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const listConstant = (nameApp: string) => [
    {
        name: "Github",
        description: `Lihat source code dan eksplorasi bagaimana perkembangan project ${nameApp} dibangun.`,
        icon: <FaGithub className="w-full h-full" />,
        href: "https://github.com/frhn-06/",
        textButton: "Lihat Github"
    },
    {
        name: "LinkedIn",
        description: "Terhubung secara profesional dan ikuti perjalanan saya dalam membangun serta mengembangkan project aplikasi berbasis web.",
        icon: <FaLinkedin className="w-full h-full" />,
        href: "https://www.linkedin.com/in/farhan-munif-0167992b9/",
        textButton: "Kunjungi LinkedIn"
    },
    {
        name: "Email",
        description: "Punya pertanyaan, masukan, atau ingin berdiskusi tentang project ini? Silakan hubungi saya melalui email.",
        icon: <MdEmail className="w-full h-full" />,
        href: "mailto:farhanmunif233@email.com",
        textButton: "Kirim Email"
    },
]

export default listConstant;