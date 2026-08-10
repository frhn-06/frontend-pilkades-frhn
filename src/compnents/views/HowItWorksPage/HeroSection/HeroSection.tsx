import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid"
import WavesUi from "@/compnents/ui/WavesUi";
import Image from "next/image"

interface TypeProps {
  name: string;
}

const HeroSection = (props: TypeProps) => {
    const {
      name
    } = props;



    return (
      <section className="relative w-full py-22 lg:py-36 px-4">
        <div className="w-full max-w-5xl mx-auto">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-red-700 text-center">
              CARA KERJA
            </h1>
            <h2 className="font-light text-2xl text-gray-700 text-center mb-2">
              Dari Persiapan hingga Hasil Akhir
            </h2>
            <p className="text-gray-700 text-center">
              Ikuti alur lengkap {name} dalam mengelola proses pemilihan, mulai dari menyiapkan pemilihan hingga memantau hasil dan mengunduh laporan
            </p>
          </div>
        </div> 

      </section>
    )
}


export default HeroSection;