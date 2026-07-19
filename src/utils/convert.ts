
const convert = {
    dateToBackend: (date: string) => {
        const arr = date.split(" ");
        let bulan = "";

        const tanggal = arr[2];
        const month = arr[1];
        const tahun = arr[3];
        const jam = arr[4];
        switch(month) {
            case "Jan" :
                bulan = "01"; break;
            case "Feb" :
                bulan = "02"; break;
            case "Mar" :
                bulan = "03"; break;
            case "Apr" :
                bulan = "04"; break;
            case "May" :
                bulan = "05"; break;
            case "Jun" :
                bulan = "06"; break;
            case "Jul" :
                bulan = "07"; break;
            case "Aug" :
                bulan = "08"; break;
            case "Sep" :
                bulan = "09"; break;
            case "Oct" :
                bulan = "10"; break;
            case "Nov" :
                bulan = "11"; break;
            case "Dec" :
                bulan = "12"; break;
        }
        
        const result = `${tahun}-${bulan}-${tanggal} ${jam}.000`
        return result;
    },

    dateToFrontend: (date: string) => {
      
        const [datePart, timePart] = date.split("T");
        
        const [tahun, bulan, tanggal] = datePart.split("-").map(Number);
        
        const [jam, menit, detik] = timePart.split(".")[0].split(":").map(Number);

        const result = new Date(tahun, bulan - 1, tanggal, jam, menit, detik);

        return result;
    }
}

export default convert;