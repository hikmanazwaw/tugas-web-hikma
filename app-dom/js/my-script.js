// buat array agenda
let Agenda = [
  "Bangun",
  "Mandi",
  "Sarapan",
  "Menyiapkan Bekal",
  "Mengecek Buku dan Pekerjaan Rumah",
  "Melakukan Piket Kelas",
  "Tidur Siang",
  "Salat Dhuhur",
  "Belajar",
  "Salat Ashar",
  "Makan Malam",
  "Salat Maghrib",
  "Salat Isya",
  "Tidur Malam",
];

// tampilkan data
function showData() {
  let daftar = document.getElementById("daftar");

  daftar.innerHTML = "";

  for (var i = 0; i < Agenda.length; i++) {
    // Pastikan nama fungsi DelData sesuai dengan yang dipanggil
    var linkHapus =
      '<a href="#" onclick="DelData(' +
      i +
      ')" class="btn btn-sm btn-outline-danger float-end">Cek</a>';
    daftar.innerHTML +=
      '<li class="list-group-item d-flex justify-content-between align-items-center">' +
      Agenda[i] +
      " " +
      linkHapus +
      "</li>";
  }
}

//menambahkan Agenda
function addData() {
  var input = document.getElementById("agenda");

  //Validasi agar tidak memasukkan data kosong
  if (input.value.trim() === "") {
    return;
  }

  //memasukan data ke array
  Agenda.push(input.value);

  //mengosongkan input setelah disimpan
  input.value = "";

  // tampilkan data
  showData();
}

//menamambahkan fungsi DelData yang sebelumnya belum ada
function DelData(index) {
  // Hapus 1 data dari array berdasarkan index
  Agenda.splice(index, 1);

  //menampilkan ulang data
  showData();
}
