import { Card, CardBody } from "@heroui/react";
import listConstant from "./listConstant";
import WavesUi from "@/compnents/ui/WavesUi";

interface TypeProps {
  name: string;
}

const Features = (props: TypeProps) => {
    const {
      name
    } = props;

    return (
      <section className="relative min-h-svh w-full pt-22 lg:pt-36 pb-48 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full max-w-3xl mx-auto mb-24">
            <h1 className="font-semibold text-2xl lg:text-3xl text-red-600 text-center mb-4">
              FITUR UTAMA
            </h1>
            <h2 className="text-gray-800 text-xl text-center mb-1">
              Semua yang Dibutuhkan untuk Mengelola Pemilihan
            </h2>
            <p className="text-gray-500 text-center">
              Dari pengaturan pemilihan hingga laporan akhir, {name} menyediakan berbagai fitur untuk membantu proses pemilihan berjalan lebih terstruktur dan efisien.
            </p>
          </div>
                                  
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listConstant.map((list, i) => (
                <div key={i} className="shadow-2xl/40 shadow-red-500 rounded-xl">
                  <Card className="p-2 h-full">
                    <CardBody className="gap-4">
                      <div className="flex gap-2">
                        {list.icon.map((icon, i) => (
                          <div key={i} className="w-12 h-12 text-red-500">
                            {icon}
                          </div>
                        ))}
                      </div>
                      <h1 className="text-xl font-semibold text-red-800">
                        {list.title}
                      </h1>
                      <p className="text-gray-700">
                        {list.description}
                      </p>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>




        <WavesUi color="#DC2626"/>
      </section>
    )
}

export default Features;