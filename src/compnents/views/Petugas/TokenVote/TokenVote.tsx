import ButtonFlat from "@/compnents/ui/ButtonUi/ButtonFlat";
import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import { ITokenVote } from "@/types/tokenvote"
import convert from "@/utils/convert";
import Link from 'next/link'

interface TypeProps {
    data: ITokenVote;
}
const TokenVote = (props: TypeProps) => {
    const {
        data
    } = props;


    return (
      <div className="w-full max-w-9xl mx-auto min-h-screen py-10 bg-gray-200 text-utama">
        <div id="paper" className="w-[320px] bg-white rounded-lg shadow-lg p-6 mx-auto">
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="border-b-2 py-2 border-b-gray-400 border-dashed">
              <h1 className="font-bold">
                {data?.election?.name}
              </h1>
            </div>
            <div className="w-full">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="text-sm">
                      Nama
                    </td>
                    <td className="text-sm">
                      : {data?.voter?.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm">
                      TPS
                    </td>
                    <td className="text-sm">
                      : {data?.tps?.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm">
                      Kadaluarsa
                    </td>
                    <td className="text-sm">
                      : {convert.jam(`${data?.expiredAt}`)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h1 className="text-5xl font-bold">
                {data?.token}
              </h1>
            </div>
            <div>
              <p className="text-xs">
                NB: 
              </p>
              <ul className="text-xs">
                <li className="list-disc">
                  Masukkan token pada halaman pemungutan suara, lalu coblos calon pilihan anda
                </li>
                <li className="list-disc">
                  Token hanya dapat digunakan satu kali.
                </li>
                <li className="list-disc">
                  Token hanya berlaku sampai waktu yang tertera.
                </li>
                <li className="list-disc">
                  Jika token telah sampai waktu kadaluarsa namun belum mencoblos, silahkan hubungi petugas absensi untuk digenerate token baru 
                </li>
              </ul>              
            </div>
          </div>
        </div>

        <div className="flex justify-between mx-auto w-[320px] mt-6">
          <Link href={"/petugas/absensi"}>
            <ButtonFlat>
              Kembali
            </ButtonFlat>
          </Link>

          <ButtonSolid onPress={() => window.print()}>
            Print
          </ButtonSolid>
        </div>
      </div>
    )
}

export default TokenVote;