function doWhile() {
  const nim: string = '044129186'; // NIM saya
  // Mengambil dua digit terakhir dari NIM dan mengonversinya ke number
  const nimLastTwoDigits: number = parseInt(nim.slice(-2), 10);
  const isEven: boolean = nimLastTwoDigits % 2 === 0; // Tentukan apakah digit terakhir ganjil atau genap

  // Variabel awal perulangan berdasarkan dua digit terakhir NIM
  let start: number = nimLastTwoDigits;

  // Menggunakan while loop jika angka terakhir NIM adalah ganjil
  if (!isEven) {
    console.log("Menggunakan while loop karena angka terakhir NIM adalah ganjil:");

    while (start <= 20) {
      console.log(start);
      start++;
    }
  }

  // Menggunakan do..while loop jika angka terakhir NIM adalah genap
  else {
    console.log("Menggunakan do..while loop karena angka terakhir NIM adalah genap:");

    do {
      console.log(start);
      start++;
    } while (start <= 20);
  }

}

doWhile();