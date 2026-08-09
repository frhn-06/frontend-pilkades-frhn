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
      <section className="relative min-h-svh w-full bg-inti pt-22 lg:pt-36 pb-48 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-around  gap-12">
            <div className="max-w-lg">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-white">
                  {name}
                </h1>
                <h1 className="text-3xl lg:text-4xl font-semibold text-white">
                  Election Management System
                </h1>
              </div>

              <div className="mb-4">
                <p className="text-xl text-default-200 font-light">
                  Kelola Pemilihan
                </p>
                <p className="text-xl text-default-200 font-light">
                  Amankan setiap suara
                </p>
              </div>

              <div className="mb-2">
                <p className="text-white">
                  Kelola seluruh proses pemilihan mulai dari persiapan, data pemilih, pemungutan suara, hingga pemantauan hasil dalam satu platform.
                </p>
              </div>

              <div>
                <ButtonSolid className="bg-yellow-400" isLink href="/auth/register">
                  Get Started
                </ButtonSolid>
              </div>
            </div>
            <div className="relative w-full max-w-150 h-fit">
              <Image 
                src={"/landing/hero-sementara.png"} 
                alt="hero-foto" 
                width={480} 
                height={480} 
                className="w-full" 
              />

              <div className="absolute w-full h-full bg-black/30 top-4 left-6" />

              <Image 
                src={"/landing/hero-sementara.png"} 
                alt="hero-foto" 
                width={480} 
                height={480} 
                className="w-full absolute top-10 left-14" 
              />
            </div>
          </div>
        </div> 


        <WavesUi />
      </section>
    )
}


export default HeroSection;