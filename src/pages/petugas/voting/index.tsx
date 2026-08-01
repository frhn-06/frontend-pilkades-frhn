import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import CandidateService from "@/services/candidate.service";
import { useQuery } from "@tanstack/react-query";
import {Spinner} from '@heroui/react'
import Voting from "@/compnents/views/Petugas/Voting";

const useVoting = () => {
    const getCandidate = async () => {
        const {data} = await CandidateService.findAll();
        return data;
    }

    const {data: dataCandidates, isLoading:isLoadingCandidates, isError: isErrorCandidates, error:errorCandidates, refetch:refetchCandidates, isRefetching: isRefetchingCandidates} = useQuery({
        queryKey: ["Candidates-voting"],
        queryFn: getCandidate
    })

    return {
        dataCandidates,
        isLoadingCandidates,
        isErrorCandidates,
        errorCandidates,
        refetchCandidates,
        isRefetchingCandidates
    }
}


const PagePetugasVoting = () => {
    
    const {
        dataCandidates,
        isLoadingCandidates,
        isErrorCandidates,
        errorCandidates,
        isRefetchingCandidates,
        refetchCandidates
    } = useVoting()


    return (
        <DashboardLayout 
          title="Voting | Petugas" 
          type="petugas" 
          headerTitle="Bilik suara" 
          headerSubtitle="this is voting place"
        >
          {isLoadingCandidates || isRefetchingCandidates ? (
            <div className="w-full min-h-screen flex justify-center items-center">
              <Spinner color="danger" />
            </div>
          ) : isErrorCandidates ? (
            <div className="w-full min-h-screen flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold text-utama">
                Error 
              </h1>
              <p>
                {errorCandidates?.message}
              </p>
            </div>
          ) : (
            <Voting 
              data={dataCandidates?.data} 
              refetchVoting={refetchCandidates}  
            />
          )}
        </DashboardLayout>
    )
}

export default PagePetugasVoting;