import ButtonSolid from "@/compnents/ui/ButtonUi/ButtonSolid";
import TokenVote from "@/compnents/views/Petugas/TokenVote";
import tokenVoteService from "@/services/tokenvote.service";
import { Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useToken = () => {
    const router = useRouter();
    const getToken = async () => {
        const {data} = await tokenVoteService.findOne(`${router.query.id}`)
        return data;
    }
    const {data:dataToken, isLoading:isLoadingToken, isError:isErrorToken, error} = useQuery({
      queryKey: ["TokenById"],
      queryFn: getToken,
      enabled: router.isReady
    })

    return {
      dataToken,
      isLoadingToken,
      isErrorToken,
      error
    }
}


const PagePetugasToken = () => {
    const {
      dataToken,
      isLoadingToken,
      isErrorToken,
      error
    } = useToken();

    const router = useRouter();

    return (
      isLoadingToken ? (
        <div className="w-full min-h-screen flex justify-center items-center">
          <Spinner color="danger" />
        </div>
      ) : isErrorToken ? (
        <div  className="w-full min-h-screen flex flex-col justify-center items-center gap-6">
          <div>
            <h1 className="font-bold text-xl text-utama">
              Error Token
            </h1>
            <p>
              {error?.message}
            </p>
          </div>
          <ButtonSolid onPress={() => router.push("/petugas/absensi")}>
            Kembali
          </ButtonSolid>
        </div>
      ) : (
        <TokenVote data={dataToken?.data} />
      )
    )
    
}

export default PagePetugasToken;