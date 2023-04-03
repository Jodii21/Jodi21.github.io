// Deklarasi array untuk menyimpan no e-wallet
var cekInputArray = [];
var jenisArray = [];
var pesanArray = [];
// Function untuk menambahkan no e-wallet ke dalam array dan menampilkannya di website
function lapor() {

    // Ambil nilai dari input
    var cekInput = document.getElementById("cekInput").value;
    var jenis = document.getElementById("jenis").value;
    var pesan = document.getElementById("pesan").value;

   
    

    // Tambahkan cekInput ke dalam array
    cekInputArray.push(cekInput);
    jenisArray.push(jenis);
    pesanArray.push(pesan);


    // Kosongkan input
    document.getElementById("cekInput").value =  "";
    document.getElementById("jenis").value = "";
    document.getElementById("pesan").value = "";



    // Buat ulang daftar cekInput
    document.getElementById("daftar-jenis").innerHTML = "";
    document.getElementById("daftar-cekInput").innerHTML = "";
    document.getElementById("daftar-pesan").innerHTML = "";

 
    
    // Tampilkan daftar jenis
    for (var i = 0; i < jenisArray.length; i++) {
        var li = document.createElement("li");

        li.appendChild(document.createTextNode(jenisArray[i]+", "+cekInputArray[i]+","+pesanArray[i]));
        document.getElementById("daftar-jenis").appendChild(li);
        // li.appendChild(document.createTextNode(cekInputArray[i]));
        document.getElementById("daftar-cekInput").appendChild(li);
        document.getElementById("daftar-pesan").appendChild(li);


       

    }          

}   

