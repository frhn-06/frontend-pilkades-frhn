import Image from 'next/image'
import React from 'react';

interface IIsi {
    title: string;
    description: string;
    photo: React.ReactNode;
    nb?: string
}

const listConstant = [
    {
        title: "Registrasi dan Persiapan",
        isi: [
            {
                title: "Mulai dengan membuat akun Admin.",
                description: "Isi nama atau email, dan password untuk membuat akun yang akan digunakan sebagai pengelola utama pemilihan.",
                photo: <Image src="/landing/steps/step-1.png" width={480} height={480} alt='foto-1' className='w-full' />
            },
            {
                title: "Masuk sebagai Admin",
                description: "Gunakan akun admin yang telah dibuat untuk masuk ke dalam sistem dan memulai proses persiapan pemilihan.",
                photo: <Image src="/landing/steps/step-2.png" width={480} height={480} alt='foto-2' className='w-full' />
            },
            {
                title: "Buat Pemilihan",
                description: "Buat pemilihan baru dengan melengkapi informasi dasar seperti nama pemilihan, penyelenggara, periode pelaksanaan, dan informasi lainnya.",
                photo: <Image src="/landing/steps/step-3.png" width={480} height={480} alt='foto-3' className='w-full' />,
                nb: "Pemilihan baru secara default dibuat dengan status DRAFT."
            },
            {
                title: "Masuk Kembali Setelah Pemilihan Dibuat",
                description: "Setelah pemilihan berhasil dibuat, sistem akan mengeluarkan akun admin secara otomatis. Masuk kembali menggunakan akun admin untuk memperbarui sesi dan mulai mengelola pemilihan.",
                photo: <Image src="/landing/steps/step-2.png" width={480} height={480} alt='foto-3' className='w-full' />,
                nb: "Admin perlu masuk kembali karena informasi pemilihan digunakan sebagai bagian dari sesi akun."
            },
            {
                title: "Siapkan Tempat Pemungutan Suara",
                description: "Tambahkan TPS yang akan digunakan dalam pemilihan dan lengkapi informasi masing-masing TPS.",
                photo: <Image src="/landing/steps/step-4.png" width={480} height={480} alt='foto-4' className='w-full' />
            },
            {
                title: "Tentukan Petugas Pemilihan",
                description: "Tambahkan petugas yang bertanggung jawab menjalankan proses pemungutan suara di tiap-tiap TPS.",
                photo: <Image src="/landing/steps/step-5.png" width={480} height={480} alt='foto-5' className='w-full' />
            },
            {
                title: "Tambahkan Kandidat",
                description: "Masukkan kandidat calon yang akan mengikuti pemilihan beserta informasi yang diperlukan.",
                photo: <Image src="/landing/steps/step-6.png" width={480} height={480} alt='foto-6' className='w-full' />
            },
        ]
    },
    {
        title: "Persiapan Pemungutan",
        isi: [
            {
                title: "Login Petugas",
                description: "Setelah ditambahkan oleh Admin, Petugas dapat masuk menggunakan akun yang telah diberikan.",
                photo: <Image src="/landing/steps/step-7.png" width={480} height={480} alt='foto-1' className='w-full' />
            },
            {
                title: "Kelola Data Pemilih",
                description: "Petugas menambahkan dan mengelola data pemilih yang akan mengikuti pemungutan suara di TPS.",
                photo: <Image src="/landing/steps/step-8.png" width={480} height={480} alt='foto-2' className='w-full' />
            },
            {
                title: "Election → Upcoming",
                description: "setelah seluruh kebutuhan pemilihan siap, Admin mengubah status pemilihan menjadi UPCOMING.",
                photo: <Image src="/landing/steps/step-9.png" width={480} height={480} alt='foto-3' className='w-full' />,
                nb: "Pada status ini, beberapa pengelolaan pemungutan dikunci hingga waktu pemilihan dimulai."
            },
        ]
    },
    {
        title: "Hari Pemungutan",
        isi: [
            {
                title: "Mulai Pemungutan Suara",
                description: "Saat hari pemungutan tiba, Admin mengubah status pemilihan menjadi ONGOING untuk memulai proses pemungutan suara.",
                photo: <Image src="/landing/steps/step-10.png" width={480} height={480} alt='foto-1' className='w-full' />,
            },
            {
                title: "Absensi Kehadiran & Generate Token",
                description: "Petugas mencatat kehadiran pemilih secara bergilir. Setelah pemilih dinyatakan hadir, petugas dapat meminta sistem menghasilkan token untuk mengakses proses pemungutan suara.",
                photo: <Image src="/landing/steps/step-11.png" width={480} height={480} alt='foto-2' className='w-full' />,
            },
            {
                title: "Berikan Token kepada Pemilih",
                description: "Token yang telah dibuat dapat ditampilkan dan dicetak untuk diberikan kepada pemilih.",
                photo: <Image src="/landing/steps/step-12.png" width={480} height={480} alt='foto-3' className='w-full' />,
            },
            {
                title: "Validasi Token",
                description: "Di bilik suara, pemilih memasukkan token yang diberikan petugas untuk mendapatkan akses hak pilih.",
                photo: <Image src="/landing/steps/step-13.png" width={480} height={480} alt='foto-4' className='w-full' />,
            },
            {
                title: "Pilih Kandidat",
                description: "Setelah token berhasil divalidasi, pemilih dapat memilih kandidat yang tersedia dan mengonfirmasi pilihannya.",
                photo: <Image src="/landing/steps/step-14.png" width={480} height={480} alt='foto-5' className='w-full' />,
            },
        ]
    }, 
    {
        title: "Monitoring",
        isi: [
            {
                title: "Monitoring di Tingkat TPS",
                description: "Selama pemilihan berlangsung, petugas dapat mempublikasi serta memantau perkembangan pemungutan suara di TPS yang menjadi tanggung jawabnya.",
                photo: <Image src="/landing/steps/step-15.png" width={480} height={480} alt='foto-1' className='w-full' />,   
            },
            {
                title: "Monitoring Keseluruhan Pemilihan",
                description: "Admin dapat mempublikasi dan melihat perkembangan pemilihan secara keseluruhan dari seluruh TPS yang terdaftar.",
                photo: <Image src="/landing/steps/step-16.png" width={480} height={480} alt='foto-2' className='w-full' />,   
            },
        ]
    },
    {
        title: "Penutupan & Hasil",
        isi: [
            {
                title: "Selesaikan Pemilihan",
                description: "Setelah proses pemungutan selesai, Admin mengubah status pemilihan menjadi FINISHED.",
                photo: <Image src="/landing/steps/step-17.png" width={480} height={480} alt='foto-1' className='w-full' />,
                nb: "Setelah pemilihan selesai, proses pemungutan dikunci dan hasil akhir dapat diakses untuk pelaporan."  
            },
            {
                title: "Lihat Hasil & Unduh Laporan",
                description: "Dashboard menampilkan ringkasan hasil pemilihan setelah proses selesai, termasuk jumlah pemilih, partisipasi, dan perolehan suara kandidat.",
                photo: <Image src="/landing/steps/step-18.png" width={480} height={480} alt='foto-2' className='w-full' />,   
            },
            {
                title: "Simpan Hasil Pemilihan",
                description: "Hasil pemilihan dapat diunduh dalam bentuk laporan PDF untuk dokumentasi dan kebutuhan administrasi.",
                photo: <Image src="/landing/steps/step-20.png" width={480} height={480} alt='foto-3' className='w-full' />,   
            },
        ]
    }
]

export type {IIsi}

export default listConstant;