import toasterContext from "@/contexts/toasterContext";
import ExportService from "@/services/export.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useDashboard = () => {
    const {setToaster} = useContext(toasterContext);
    
    const DownloadPDF = async () => {
        const data = await ExportService.resultPDF();
        return data;
    }

    const { mutate: mutateDownloadPDF, isPending:isPendingDownloadPDF } = useMutation({
        mutationFn: DownloadPDF,
        onError: (error) => {
            setToaster({
                type: "error",
                message: error.message
            })
        },
        onSuccess: (blob) => {
            const url = window.URL.createObjectURL(blob.data as unknown as Blob | MediaSource);
            
            const link = document.createElement("a");

            link.href = url;

            link.download = "hasil-pemungutan-suara.pdf"

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);
        },
    });


    const onDownloadPDF = () => {
        mutateDownloadPDF();
    }

    return {
        onDownloadPDF,
        isPendingDownloadPDF
    }
}

export default useDashboard;