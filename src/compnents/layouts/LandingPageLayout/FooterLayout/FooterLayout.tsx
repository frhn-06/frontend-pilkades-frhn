import ScrollReveal from "@/compnents/animation/ScrollReveal";
import Link from "next/link"
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Image from 'next/image'

interface TypeProps {
  name: string;
}

const FooterLayout = (props: TypeProps) => {
    const {
      name
    } = props;

    return (
      <ScrollReveal variant="fadeUp">
        <section className="px-4 py-6 bg-inti2">
          <div className="w-full max-w-3xl lg:max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <div className="w-1/2 max-w-48">
                  <Image src="/logo/main/votedesk.png" alt="main-logo" width={240} height={240} className="w-full" />
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl font-bold text-white">
                  {name}
                </h1>
                <h2 className="text-xl font-semibold text-gray-100">
                  Election Management System
                </h2>
              </div>

              <div className="flex-1">
                <h1 className="text-xl font-semibold text-gray-100 mb-1">
                  Navigasi
                </h1>
                <div className="flex flex-col text-gray-100">
                  <Link href="/" className="w-fit hover:text-gray-300 active:text-white">
                    Beranda
                  </Link>
                  <Link href="/how-it-works" className="w-fit hover:text-gray-300 active:text-white">
                    Cara Kerja
                  </Link>
                  <Link href="/contact" className="w-fit hover:text-gray-300 active:text-white">
                    Kontak
                  </Link>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-xl font-semibold text-gray-100 mb-2">
                  Terhubung
                </h1>
                <div className="flex text-gray-100 gap-6">
                  <Link href="https://github.com/frhn-06/" className="w-9 h-9 hover:text-gray-300 active:text-white">
                    <FaGithub className="w-full h-full" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/farhan-munif-0167992b9/" className="w-9 h-9 hover:text-gray-300 active:text-white">
                    <FaLinkedin className="w-full h-full" />
                  </Link>
                  <Link href="mailto:farhanmunif233@email.com" className="w-9 h-9 hover:text-gray-300 active:text-white">
                    <MdEmail className="w-full h-full" />
                  </Link>
                  <Link href="https://www.instagram.com/feiii_06/" className="w-9 h-9 hover:text-gray-300 active:text-white">
                    <FaInstagramSquare  className="w-full h-full" />
                  </Link>
                </div>
              </div>


              
            </div>


            <hr className="text-white my-4" />

            <div>
              <p className="text-sm text-gray-100">
                &copy; 2026 | {name} - All rights reserved
              </p>
            </div>
          </div>
        </section>

      </ScrollReveal>
    )
}

export default FooterLayout