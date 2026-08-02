import instance from "@/libs/axios";
import endpoint from "./endpoint";

const DashboardSerivce = {
    admin: () => instance.get(`${endpoint.DASHBOARD}/admin`),

    petugas: () => instance.get(`${endpoint.DASHBOARD}/petugas`)
}

export default DashboardSerivce;