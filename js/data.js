const dataKatalogBuku = [
  { id: "BK001", judul: "Pemrograman Web Dasar", penulis: "Andi Wijaya", kategori: "Teknologi", stok: 25, harga: 85000, cover: "https://picsum.photos/seed/book1/200/300" },
  { id: "BK002", judul: "Logika Informatika", penulis: "Siti Rahayu", kategori: "Teknologi", stok: 12, harga: 92000, cover: "https://picsum.photos/seed/book2/200/300" },
  { id: "BK003", judul: "Desain UI/UX Modern", penulis: "Budi Santoso", kategori: "Desain", stok: 8, harga: 120000, cover: "https://picsum.photos/seed/book3/200/300" },
  { id: "BK004", judul: "Algoritma & Struktur Data", penulis: "Dyah Triastini", kategori: "Teknologi", stok: 30, harga: 78000, cover: "https://picsum.photos/seed/book4/200/300" },
  { id: "BK005", judul: "Manajemen Bisnis Online", penulis: "Riko Saputra", kategori: "Bisnis", stok: 15, harga: 65000, cover: "https://picsum.photos/seed/book5/200/300" }
];
const dataPesanan = [
  { id: "DO-2025-001", nama: "Ahmad Fauzi", buku: "Pemrograman Web Dasar", qty: 2, total: 170000, status: "Dikirim", ekspedisi: "JNE Regular", tglKirim: "2025-11-07", alamat: "Jakarta" },
  { id: "DO-2025-002", nama: "Dyah Triastini", buku: "Desain UI/UX Modern", qty: 1, total: 120000, status: "Diproses", ekspedisi: "SiCepat", tglKirim: "2025-11-08", alamat: "Bandung" },
  { id: "DO-2025-003", nama: "Budi Hartono", buku: "Logika Informatika", qty: 3, total: 276000, status: "Selesai", ekspedisi: "J&T", tglKirim: "2025-11-05", alamat: "Surabaya" }
];
const userDummy = { email: "mahasiswa@uts.com", password: "123456" };
function formatRupiah(n){ return new Intl.NumberFormat('id-ID',{style:'currency', currency:'IDR'}).format(n) }