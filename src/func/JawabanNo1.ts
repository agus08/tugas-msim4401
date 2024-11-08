function printSeries(): void {
  let currentValue: number = 1; // Start from 1 up to 100

  for (let i: number = 1; i <= 10; i++) {
    console.log(`Perulangan 10 ke-${i}:`);

    let total: number = 0; // Sum of the numbers in this group
    let count: number = 0; // Count of numbers displayed in each group

    for (let j: number = 0; j < 10; j++) {
      // Determine whether to display odd or even numbers based on `i`
      if ((i % 2 !== 0 && currentValue % 2 !== 0) || (i % 2 === 0 && currentValue % 2 === 0)) {
        console.log(currentValue);
        total += currentValue;
        count++;
      }
      currentValue++; // Move to the next number
    }

    console.log("--------------------------");
    console.log(`Jumlah: ${total}`);
    console.log(`Jumlah bilangan yang ditampilkan: ${count}`);
    console.log();
  }
}

printSeries();
