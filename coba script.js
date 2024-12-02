// Simulasi database sederhana
let users = [];

// Menampilkan form login
function showLogin() {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
}

// Menampilkan form register
function showRegister() {
  document.getElementById("register-form").classList.remove("hidden");
  document.getElementById("login-form").classList.add("hidden");
}

// Logika Login
function handleLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Cek apakah email dan password cocok dengan data users
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert(`Login berhasil! Selamat datang, ${email}`);
    window.location.href ='home.html';
  } else if (users.some(user => user.email === email)) {
    alert("Password salah!");
  } else {
    alert("Akun tidak ditemukan! Silakan daftar terlebih dahulu.");
    showRegister();
  }
}

// Logika Register
function handleRegister() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  // Validasi input
  if (!email || !password) {
    alert("Silakan isi semua field!");
    return;
  }

  // Cek apakah email sudah terdaftar
  if (users.some(user => user.email === email)) {
    alert("Email sudah terdaftar! Silakan login.");
    showLogin();
  } else {
    // Tambahkan user ke database
    users.push({ email, password });
    alert("Registrasi berhasil! Silakan login.");
    showLogin();
  }
}
