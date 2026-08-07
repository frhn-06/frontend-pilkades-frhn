import instance from '@/libs/axios'
import endpoint from "./endpoint";

const ExportService = {
    resultPDF: () => instance.get(`${endpoint.EXPORT}/result/pdf`, {
        responseType: "blob"
    })
}

export default ExportService;