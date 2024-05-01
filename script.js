function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Contoh validasi sederhana
    if (username === "" || password === "") {
        alert("Username dan password harus diisi");
        return false;
    }
    // Anda dapat menambahkan validasi tambahan di sini sesuai kebutuhan
    // Misalnya, validasi panjang password, karakter khusus, dll.
}