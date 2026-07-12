import toasterContext from "@/contexts/toasterContext";
import TpsService from "@/services/tps.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useDeleteTps = (id:string) => {
    const {setToaster} = useContext(toasterContext);

    const deleteTps = async () => {
        const {data} = await TpsService.delete(`${id}`);
        return data;
    }

    const {mutate:mutateDeleteTps, isPending:isPendingDeleteTps, isSuccess:isSuccessDeleteTps} = useMutation({
        mutationFn: deleteTps,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: () => {
            setToaster({
                type: "success",
                message: "Berhasil menghapus data TPS"
            })
        }
    })

    const onDelete = () => {
        mutateDeleteTps();
    }

    return {
        isPendingDeleteTps,
        isSuccessDeleteTps,
        onDelete
    }
}
export default useDeleteTps;