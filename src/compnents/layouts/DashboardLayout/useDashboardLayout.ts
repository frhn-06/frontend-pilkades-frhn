import AuthService from "@/services/auth.service"
import { useQuery } from "@tanstack/react-query"

const useDashboardLayout = () => {
    const getMe = async() => {
        const {data} = await AuthService.findMe();
        return data;
    }

    const {data:dataMe, isLoading:isLoadingMe, isRefetching: isRefetchingMe, refetch: refetchMe} = useQuery({
        queryKey: ["Me"],
        queryFn: getMe,
    });

    return {
        dataMe,
        isLoadingMe,
        isRefetchingMe,
        refetchMe
    }
}

export default useDashboardLayout;