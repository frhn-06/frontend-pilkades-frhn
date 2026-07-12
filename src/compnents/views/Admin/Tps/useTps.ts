import TpsService from "@/services/tps.service"
import { useQuery } from "@tanstack/react-query"

const useTps = () => {

    const findAllTps = async () => {
        const {data} = await TpsService.findAll();
        return data;
    }

    const {data: dataTps, isLoading: isLoadingTps, refetch:refetchTps, isRefetching: isRefetchingTps} = useQuery({
        queryKey: ["Tps"],
        queryFn: findAllTps,
    });

    return {
        dataTps,
        isLoadingTps,
        refetchTps,
        isRefetchingTps
    }
}

export default useTps;