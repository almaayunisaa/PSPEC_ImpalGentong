const profileIcon = document.querySelector('.icon-container');
const dropdownMenu = document.createElement('div');

// Tambahkan class dan styling untuk dropdown menu
dropdownMenu.classList.add('dropdown-custom');
dropdownMenu.style.display = 'none'; // Sembunyikan menu secara default

// Tambahkan opsi sesuai gambar
dropdownMenu.innerHTML = `
    <div class="dropdown-header">
        <span class="email-label">Email :</span>
        <span class="email-address">admin@gmail.com</span>
    </div>
    <div class="dropdown-item">
        <img src="image/ubah email icon.svg" class="dropdown-icon" alt="Eye Icon">
        Ubah email
    </div>
    <div class="dropdown-item">
        <img src="image/keluar icon.svg" class="dropdown-icon" alt="Logout Icon">
        Keluar
    </div>
    <div class="dropdown-item">
        <img src="image/sign out icon .svg" class="dropdown-icon" alt="Sign Out Icon">
        Sign Out
    </div>
`;

// Tambahkan dropdown ke dalam body
document.body.appendChild(dropdownMenu);

// Fungsi toggle menu dropdown
profileIcon.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

// Menutup dropdown jika klik di luar menu
document.addEventListener('click', (event) => {
    if (!profileIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

const searchInput = document.querySelector('.search-input');
const notFoundAlert = document.getElementById('not-found-alert');

// Fungsi untuk mencari produk dalam tabel
function searchProduct() {
    const searchValue = searchInput.value.toLowerCase();
    
    // Jika input kosong, sembunyikan notifikasi dan tampilkan semua produk
    if (searchValue === '') {
        notFoundAlert.classList.add('d-none');
        const tableRows = document.querySelectorAll('.table tbody tr');
        tableRows.forEach(row => {
            row.style.display = ''; // Tampilkan semua produk
        });
        return;
    }

    const tableRows = document.querySelectorAll('.table tbody tr');
    let found = false;

    tableRows.forEach(row => {
        const productName = row.querySelector('td:first-child').textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            row.style.display = '';
            found = true;
        } else {
            row.style.display = 'none';
        }
    });

    // Tampilkan ikon notifikasi jika produk tidak ditemukan
    if (!found) {
        notFoundAlert.innerHTML = `
            <img src="image/Notif Tidak dapat menemukan barang.svg" alt="Not Found Icon" class="not-found-icon" width="30" height="30" id="notFoundIcon">
        `;
        notFoundAlert.classList.remove('d-none');
        // Tambahkan event listener ke ikon untuk menutup notifikasi saat diklik
        document.getElementById('notFoundIcon').addEventListener('click', () => {
            notFoundAlert.classList.add('d-none');
        });
    } else {
        notFoundAlert.classList.add('d-none');
    }
}

// Event listener untuk pencarian saat pengguna mengetik
searchInput.addEventListener('input', searchProduct);
