import TpsService from "@/services/tps.service"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"

const useTps = () => {
    const router = useRouter();

    const findAllTps = async () => {
        const {data} = await TpsService.findAll();
        return data;
    }

    const {data: dataTps, isLoading: isLoadingTps, refetch:refetchTps, isRefetching: isRefetchingTps, isError:isErrorTps, error:errorTps} = useQuery({
        queryKey: ["Tps"],
        queryFn: findAllTps,
    });

    return {
        dataTps,
        isLoadingTps,
        refetchTps,
        isRefetchingTps,
        isErrorTps,
        errorTps
    }
}

export default useTps;