let barangLelang = [
    ["Baju", 10000],
    ["Celana", 20000],
    ["Kacamata", 30000]
];
let lelangArr = (num) => {
    var hargaBaju = barangLelang[0][1];
    var hargaCelana = barangLelang[1][1];
    var hargaKacamata = barangLelang[2][1];
    
    var baju = barangLelang[0][0];
    var celana = barangLelang[1][0];
    var kacamata = barangLelang[2][0];
    
    for (var i = 1; i <= num; i++) {
        hargaBaju += Math.ceil(hargaBaju * 0.1);
        hargaCelana += Math.ceil(hargaCelana * 0.2);
        hargaKacamata += Math.ceil(hargaKacamata * 0.3);
    }
return `Nama barang = ${baju}, Harga = Rp. ${hargaBaju.toLocaleString("id-ID")}
Nama barang = ${celana}, Harga = Rp. ${hargaCelana.toLocaleString("id-ID")}
Nama barang = ${kacamata}, Harga = Rp. ${hargaKacamata.toLocaleString("id-ID")}
`
}
console.log(lelangArr(1));
console.log(lelangArr(5));
console.log(lelangArr(10));