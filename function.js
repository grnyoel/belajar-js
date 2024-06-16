// Fungsi untuk mencari nilai minimal antara dua bilangan
function minimal(a, b) {
    if (a === b) {
      return a; // Jika a sama dengan b, kembalikan nilai a
    } else if (a < b) {
      return a; // Jika a lebih kecil dari b, kembalikan nilai a
    } else {
      return b; // Jika b lebih kecil dari a, kembalikan nilai b
    }
  }
  
  console.log(minimal(1, 4)); // Menghasilkan output: 1 (karena 1 lebih kecil dari 4)
  console.log(minimal(3, 2)); // Menghasilkan output: 2 (karena 2 lebih kecil dari 3)
  console.log(minimal(3, 3)); // Menghasilkan output: 3 (karena a dan b sama)
  
  // Fungsi untuk mencari indeks pertama kemunculan angka dalam array
  function findIndex(arr, number) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === number) {
        return i; // Jika angka ditemukan, kembalikan indeksnya
      }
    }
    return -1; // Jika angka tidak ditemukan, kembalikan -1
  }
  
  console.log(findIndex([1, 2, 3, 4, 5], 3)); // Menghasilkan output: 2 (indeks angka 3 dalam array)
  console.log(findIndex([1, 2, 3, 4, 5], 6)); // Menghasilkan output: -1 (angka 6 tidak ada dalam array)
  console.log(findIndex([1, 2, 3, 4, 5], 5)); // Menghasilkan output: 4 (indeks angka 5 dalam array)
  