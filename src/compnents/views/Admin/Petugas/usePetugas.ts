import useDebaunce from "@/hooks/useDebaunce";
import PetugasService from "@/services/petugas.service";
import { LIMIT_DEFAULT, PAGE_DEFAULT, STATUS_PETUGAS_DEFAULT } from "@/utils/constanta";
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { ChangeEvent } from "react";

const usePetugas = () => {

    const router = useRouter();

    const {debaunce} = useDebaunce();


    const currentPage = router.query.page;
    const currentLimit = router.query.limit;
    const currentActive = router.query.active;
    const currentSearch = router.query.search;
    const currentTps = router.query.tps;

    const setUrl = () => {
        router.replace({
            query: {
                page: currentPage || PAGE_DEFAULT,
                limit: currentLimit || LIMIT_DEFAULT,
                tps: currentTps || "",
                active: currentActive || STATUS_PETUGAS_DEFAULT,
                search: currentSearch || ""
            }
        })
    }


    const findAllPetugas = async () => {
        const params = `page=${currentPage}&limit=${currentLimit}&tps=${currentTps}&active=${currentActive}&search=${currentSearch}`
        const {data} = await PetugasService.findAll(`${params}`);
        return data;
    }

    const {data: dataPetugas, isLoading: isLoadingPetugas, refetch:refetchPetugas, isRefetching: isRefetchingPetugas, isError:isErrorPetugas, error:errorPetugas} = useQuery({
        queryKey: ["Petugass", currentPage, currentLimit, currentTps, currentActive, currentSearch],
        queryFn: findAllPetugas,
        enabled: router.isReady && !!currentPage && !!currentLimit
    });




    const handleChangePage = (e: number) => {
        router.replace({
            query: {
                ...router.query,
                page: e
            }
        })
    }

    const handleChangeLimit = (e: ChangeEvent<HTMLSelectElement>) => {
        router.replace({
            query: {
                ...router.query,
                page: 1,
                limit: e.target.value 
            }
        })
    }

    const handleChangeTps = (e: ChangeEvent<HTMLSelectElement>) => {
        router.replace({
            query: {
                ...router.query,
                page: 1,
                tps: e.target.value 
            }
        })
    }

    const handleChangeActive = (e: ChangeEvent<HTMLSelectElement>) => {
        router.replace({
            query: {
                ...router.query,
                page: 1,
                active: e.target.value 
            }
        })
    }


    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        debaunce(() => {
            router.replace({
                query: {
                    ...router.query,
                    page: 1,
                    search: e.target.value 
                }
            })
        }, 1000)
    }

    const handleClearSearch = () => {
        router.replace({
            query: {
                ...router.query,
                page: 1,
                search: ""
            }
        })
    }



    return {
        dataPetugas,
        isLoadingPetugas,
        refetchPetugas,
        isRefetchingPetugas,
        isErrorPetugas,
        errorPetugas,

        setUrl,
        currentPage,
        handleChangePage,

        currentLimit,
        handleChangeLimit,
        
        currentActive,
        handleChangeActive,
        
        currentTps,
        handleChangeTps,


        currentSearch,
        handleChangeSearch,
        handleClearSearch,

    }
}

export default usePetugas;