// JavaScript untuk validasi form login (bisa ditambahkan sesuai kebutuhan)
document.querySelector('form').addEventListener('submit', function(event) {
    var username = document.querySelector('input[name="username"]').value;
    var password = document.querySelector('input[name="password"]').value;

    if (username === '' || password === '') {
        alert('Username dan password harus diisi!');
        event.preventDefault(); // Mencegah form dari pengiriman jika input kosong
    }
});