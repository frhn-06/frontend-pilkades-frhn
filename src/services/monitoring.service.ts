import instance from "@/libs/axios";
import endpoint from "./endpoint";

const MonitoringService = {
    admin: () => instance.get(`${endpoint.MONITORING}/admin`),

    petugas: () => instance.get(`${endpoint.MONITORING}/petugas`)
}

export default MonitoringService;