import DashboardLayout from "@/compnents/layouts/DashboardLayout";
import Election from "@/compnents/views/Admin/Election";
import ElectionService from "@/services/election.service";
import { Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";

const useElection = () => {

    const getelection = async () => {
        const {data} = await ElectionService.findOne();
        return data
    }

    const {data:dataElection, isLoading:isLoadingElection, refetch: refetchElection, isRefetching: isRefetchingElection  } = useQuery({
        queryKey: ["Election"],
        queryFn: getelection,
        enabled: true
    })

    return {
        dataElection,
        isLoadingElection,
        refetchElection,
        isRefetchingElection
    }
}


const PageAdminElection = () => {
    const {
        dataElection,
        isLoadingElection,
        refetchElection,
        isRefetchingElection
    } = useElection();

    return (
        <DashboardLayout 
            title="Admin | Election" 
            type="admin" 
            headerTitle="Pilkades" 
            headerSubtitle="Kelola informasi pelaksanaan pemilihan kepala desa."
        >  
            {isLoadingElection ? (
                <div className="h-screen flex justify-center items-center">
                    <Spinner />
                </div>
            ) : (
                <Election 
                    data={dataElection?.data}
                    isRefetching={isRefetchingElection}
                    refetch={refetchElection}
                />

            )}
        </DashboardLayout>
    )
}

export default PageAdminElection;