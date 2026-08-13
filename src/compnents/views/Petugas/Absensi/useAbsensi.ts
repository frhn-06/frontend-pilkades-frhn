import useDebaunce from "@/hooks/useDebaunce";
import VoterService from "@/services/voter.service";
import { LIMIT_VOTER_DEFAULT, PAGE_DEFAULT } from "@/utils/constanta";
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { ChangeEvent } from "react";

const useAbsensi = () => {

    const router = useRouter();

    const {debaunce} = useDebaunce();



    const currentPage = router.query.page;
    const currentLimit = router.query.limit;
    const currentSearch = router.query.search;

    const setUrl = () => {
        router.replace({
            query: {
                page: currentPage || PAGE_DEFAULT,
                limit: currentLimit || LIMIT_VOTER_DEFAULT,
                search: currentSearch || ""
            }
        })
    }


    const findAllVoterPerTps = async () => {
        let params = `page=${currentPage}&limit=${currentLimit}`;
        if(currentSearch) params += `&search=${currentSearch}`;
        const {data} = await VoterService.findAllPerTps(`${params}`);
        return data;
    }

    const {data: dataVoter, isLoading: isLoadingVoter, refetch:refetchVoter, isRefetching: isRefetchingVoter} = useQuery({
        queryKey: ["Voters-absensi", currentPage, currentLimit, currentSearch],
        queryFn: findAllVoterPerTps,
        enabled: router.isReady && !!currentPage && !!currentLimit
    });




    const handleChangePage = (e: number) => {
        router.push({
            query: {
                ...router.query,
                page: e
            }
        })
    }

    const handleChangeLimit = (e: ChangeEvent<HTMLSelectElement>) => {
        router.push({
            query: {
                ...router.query,
                page: 1,
                limit: e.target.value 
            }
        })
    }



    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        debaunce(() => {
            router.push({
                query: {
                    ...router.query,
                    page: 1,
                    search: e.target.value 
                }
            })
        }, 1000)
    }

    const handleClearSearch = () => {
        router.push({
            query: {
                ...router.query,
                page: 1,
                search: ""
            }
        })
    }





    return {
        dataVoter,
        isLoadingVoter,
        refetchVoter,
        isRefetchingVoter,

        setUrl,
        currentPage,
        handleChangePage,

        currentLimit,
        handleChangeLimit,

        currentSearch,
        handleChangeSearch,
        handleClearSearch
    }
}

export default useAbsensi;
