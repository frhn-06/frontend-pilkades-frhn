
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
              CONTACT
            </h1>
            <h2 className="font-light text-2xl text-gray-700 text-center mb-2">
              Mari Terhubung
            </h2>
            <p className="text-gray-700 text-center">
              Ingin mengetahui lebih lanjut tentang project ini, berdiskusi, atau sekadar menyapa? Kamu dapat menemukan saya melalui beberapa platform berikut.
            </p>
          </div>
        </div> 

      </section>
    )
}


export default HeroSection;