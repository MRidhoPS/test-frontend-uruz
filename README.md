# Login App

React + Vite + Axios, dengan struktur Model–View–Presenter.

## Menjalankan

```bash
npm install
cp .env.example .env
npm run dev
```

Saat development, request ke `/api/authV5` di-proxy ke `http://cool.uruz.id` (lihat `vite.config.js`).
API hanya tersedia lewat HTTP, jadi jika aplikasi di-deploy lewat HTTPS, request perlu lewat reverse proxy
agar tidak diblokir browser (mixed content).

## Struktur

| Folder        | Peran                                                                |
| ------------- | -------------------------------------------------------------------- |
| `models`      | Pemanggilan API dan pemetaan data (`authModel.js`)                   |
| `views`       | Halaman, hanya menampilkan UI (`LoginView`, `DashboardView`)         |
| `presenters`  | Logika halaman: state form, validasi, submit, navigasi (custom hook) |
| `components`  | Komponen UI reusable (`TextField`, `Button`, `Alert`, `AuthCard`)    |
| `services`    | Axios instance dan penyimpanan session                               |
| `routes`      | Definisi route dan guard                                             |
| `utils`       | Validator dan normalisasi error HTTP                                 |
| `config`      | Konfigurasi dari environment                                         |

## Alur berdasarkan response

| Hasil           | Perilaku                                                           |
| --------------- | ------------------------------------------------------------------ |
| 2xx             | Session disimpan, redirect ke `/dashboard`                         |
| 400 / 422       | Tampilkan pesan dari API                                           |
| 401 / 403       | Tampilkan pesan dari API, kolom password dikosongkan               |
| 404 / 429       | Tampilkan pesan dari API atau pesan bawaan                         |
| 5xx             | Tampilkan pesan dari API atau pesan server error                   |
| Timeout/network | Pesan gagal terhubung, form tetap bisa dicoba ulang                |

Pesan dari API dibaca dari `message`, `error`, atau `msg` pada body response (`utils/httpError.js`).
