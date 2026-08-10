import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { Card, CardBody } from "@heroui/react";

const CTA = () => {
    return (
      <section className="relative w-full pt-22 lg:pt-36 pb-48 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl shadow-red-500/50">
            <Card className="p-4 bg-red-500">
              <CardBody>
                <h1 className="font-semibold text-2xl lg:text-3xl text-white text-center mb-4">
                  Siap Mengelola Pemilihan dengan Lebih Mudah?
                </h1>
                <p className="text-gray-100 text-xl text-center mb-6">
                  Kelola seluruh proses pemilihan dalam satu sistem yang terstruktur, terpantau, dan mudah digunakan.
                </p>
                <div className="flex justify-center gap-4">
                  <ButtonSolid className="bg-yellow-400" isLink href="/auth/register">
                    Mulai Sekarang
                  </ButtonSolid>

                  <ButtonFlat isLink href="/how-it-works">
                    Cara Kerja
                  </ButtonFlat>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    )
}

export default CTA;