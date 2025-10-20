const angka = 10;

for(i = 0; i < angka; i++){
    console.log(angka);
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Masukkan nilai: ", (nilai) => {
  if(nilai >= 90){
    console.log("Anda mendapatkan kategori nilai A");
  } else if(nilai >= 80){
    console.log("Anda mendapatkan kategori nilai B");
  } else if(nilai > 55){
    console.log("Anda mendapatkan kategori nilai C");
  } else if(nilai <= 55){
    console.log("Anda mendapatkan kategori nilai D");
  }
  readline.close();
});
