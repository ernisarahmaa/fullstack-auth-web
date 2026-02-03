# Fullstack Authentication App (React + Express + MySQL)

Aplikasi **Login & Register** berbasis web dengan autentikasi aman menggunakan **JWT & HTTP-only cookies**. 

---

## ✨ Fitur Utama

* Login & Register pengguna
* Validasi form (frontend & backend)
* Password di-hash menggunakan **bcrypt**
* Autentikasi menggunakan **JWT + Cookies**
* Protected Route (hanya bisa diakses jika login)
* Loading spinner saat login & register
* Logout & session handling
* UI responsive menggunakan **Bootstrap**

---

## 🖼️ Screenshots

> Contoh tampilan aplikasi

### Halaman Login

<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/a0aa175d-427b-46ec-96ff-3ca829a66f62" />

### Halaman Register

<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/6d6d4dc6-a0ca-44cb-96af-61ef4b078499" />

### Halaman Home (Protected)

<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/783a6c01-b9b8-478a-9d77-6e9052038c32" />

### Light Mode

<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/a7113ec6-69d9-471f-a3ae-21ed34ba27cb" />

### Tampilan Mobile

<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/ec42a7af-f65a-4899-bd8f-7c8fea5148b7" />


---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* React Router DOM
* Bootstrap 5

### Backend

* Node.js
* Express.js
* MySQL
* JWT (Cookie-based Authentication)
* bcrypt

---

## 🧠 Arsitektur Autentikasi

1. User login / register dari frontend
2. Backend memvalidasi data
3. Password di-hash dan dibandingkan menggunakan bcrypt
4. Jika berhasil login:
   * Server membuat JWT
   * JWT disimpan di **HTTP-only cookie**
5. Protected route akan mengecek token sebelum mengakses halaman

---

## 🚀 Cara Menjalankan Project

### 1️ Clone Repository

```bash
git clone https://github.com/ernisarahmaa/fullstack-auth-app.git
```

### 2️ Setup Database

```bash
mysql -u root -p < database/schema.sql
```

### 3 Setup Backend

```bash
cd backend
npm install
```

Buat file `.env` berdasarkan `.env.example`:

```
PORT=8081
JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=auth_db
```

Jalankan backend

```bash
npm start
```

### 4 Setup Frontend

```bash
cd frontend
npm install
npm start
```

Frontend berjalan di:

```
http://localhost:3000
```

Backend berjalan di:

```
http://localhost:8081
```

## Author

**Ernisa Rahma Wahyuni**
