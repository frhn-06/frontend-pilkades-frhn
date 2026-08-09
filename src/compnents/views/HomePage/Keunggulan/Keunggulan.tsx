import Image from "next/image";
import listConstant from "./listConstant";
import { FaCheckSquare } from "react-icons/fa";
import WavesUi from "@/compnents/ui/WavesUi";

interface TypeProps {
  name: string;
}

const Keunggulan = (props: TypeProps) => {
    const {
      name
    } = props;

    return (
      <section className="relative min-h-svh w-full pt-22 lg:pt-36 pb-48 px-4 bg-inti ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h1 className="font-semibold text-2xl lg:text-3xl text-white mb-4">
                MENGAPA {name.toUpperCase()}?
              </h1>
              <h2 className="text-gray-200 text-xl mb-1">
                Pemilihan lebih terstruktur, terpantau, dan mudah dikelola
              </h2>
           
              <table className="text-white mt-8">
                <tbody>
                  {listConstant.map((list, i) => (
                    <>
                      <tr key={i}>
                        <td className="px-1">
                          <FaCheckSquare className="w-6 h-6 text-green-600 bg-white rounded-sm" />
                        </td>
                        <td className="px-1">
                          {list.title}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-1">
                          
                        </td>
                        <td className="px-1">
                          {list.description}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          
            <div className="flex-1 w-full max-w-160 bg-amber-200 h-20 mx-auto">
              <Image src={"/landing/hero-sementara.png"} alt="foto-keunggulan" width={360} height={360} className="w-full" />
            </div>
          </div>
        </div>





        <WavesUi />
      </section>
    )
}


export default Keunggulan;