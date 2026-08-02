import CandidateService from "@/services/candidate.service";
import { useQuery } from "@tanstack/react-query"

const useCandidate = () => {

    const findAllCandidate = async () => {
        const {data} = await CandidateService.findAll();
        return data;
    }

    const {data: dataCandidate, isLoading: isLoadingCandidate, refetch:refetchCandidate, isRefetching: isRefetchingCandidate, isError:isErrorCandidate, error:errorCandidate} = useQuery({
        queryKey: ["Candidate"],
        queryFn: findAllCandidate,
    });

    return {
        dataCandidate,
        isLoadingCandidate,
        refetchCandidate,
        isRefetchingCandidate,
        isErrorCandidate,
        errorCandidate
    }
}

export default useCandidate;