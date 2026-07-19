import instance from "@/libs/axios";
import endpoint from "./endpoint";

const MediaService = {
    uploadSingle: (form: FormData) => instance.post(`${endpoint.MEDIA}/upload-single`, form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }),

    removeSingle: (url: string) => instance.delete(`${endpoint.MEDIA}/delete-single`, {
        data: {
            url :url
        }
    })
}

export default MediaService;