const listConstant = (nameApp: string) => [
    {
        question: `Apa itu ${nameApp}?`,
        answer: [
            `${nameApp} adalah sistem manajemen pemilihan yang membantu penyelenggara mengelola seluruh proses pemilihan dalam satu platform, mulai dari persiapan pemilihan, pengelolaan data pemilih, pemungutan suara, pemantauan hasil, hingga pembuatan laporan.`
        ]
    },
    {
        question: `Apakah ${nameApp} hanya untuk satu jenis pemilihan?`,
        answer: [
            `Tidak. ${nameApp} dirancang sebagai sistem manajemen pemilihan yang dapat digunakan untuk berbagai kebutuhan, seperti pemilihan organisasi, kampus, komunitas, maupun pemilihan internal lainnya.`
        ]
    },
    {
        question: `Siapa saja yang dapat mengelola pemilihan?`,
        answer: [
            `${nameApp} memiliki dua jenis pengguna dengan tanggung jawab yang berbeda, yaitu Admin dan Petugas.`,
            `Admin bertanggung jawab mengelola pemilihan secara keseluruhan, termasuk mengatur data pemilihan, TPS, kandidat, dan petugas, serta memantau proses dan hasil pemilihan.`,
            `Petugas bertanggung jawab menjalankan proses pemungutan suara di TPS, seperti mengatur data pemilih, mengelola kehadiran pemilih, membuat token, dan membantu menjalankan proses pemungutan suara.`,
            `Setiap pemilihan memiliki satu Admin sebagai pengelola utama, sedangkan jumlah Petugas dapat disesuaikan dengan kebutuhan pemilihan.`
        ]
    },
    {
        question: `Bagaimana proses pemungutan suara dilakukan?`,
        answer: [
            `Pemilih melakukan validasi menggunakan token yang diberikan oleh petugas. Setelah token berhasil divalidasi, pemilih dapat mengakses bilik suara dan memilih salah satu kandidat yang tersedia.`
        ]
    },
    {
        question: `Apa itu token voting sekali pakai?`,
        answer: [
            `Token adalah kode unik yang digunakan pemilih untuk mengakses proses pemungutan suara. Setiap token memiliki masa berlaku dan hanya dapat digunakan satu kali dalam proses pemilihan.`
        ]
    },
    {
        question: `Apakah hasil pemilihan dapat diunduh?`,
        answer: [
            `Ya. Hasil pemilihan dapat diunduh dalam bentuk laporan PDF yang berisi informasi dan hasil pemungutan suara untuk kebutuhan dokumentasi.`
        ]
    }
]


export default listConstant;