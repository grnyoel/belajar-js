const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() {
  try {
    // Beli kartu tol
    console.log('Membeli kartu tol...');
    const card = await buyTollRoadCard(25);
    console.log('Kartu tol berhasil dibeli:', card);

    // Isi saldo kartu tol
    console.log('Mengisi saldo kartu tol...');
    const toppedUpCard = await topUpBalance(card, 10);
    console.log('Saldo kartu tol berhasil diisi:', toppedUpCard);

    // Gunakan akses jalan tol
    console.log('Menggunakan akses jalan tol...');
    await useTollRoad(toppedUpCard);
    console.log('Berhasil mengakses jalan tol.');
  } catch (error) {
    // Menangani kesalahan dan mencetak pesan error
    console.log('Terjadi kesalahan:', error.message);
    throw error;
  }
}

// Menjalankan fungsi getTollAccess()
getTollAccess()
  .then(() => {
    console.log('Seluruh tahapan berhasil dilakukan.');
  })
  .catch((error) => {
    console.log('Terjadi kesalahan:', error.message);
  });
