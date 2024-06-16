// Mengimpor modul Tiger dan Wolf dari file 'tiger.js' dan 'wolf.js'
const Tiger = require('./tiger');
const Wolf = require('./wolf');

// Fungsi untuk membandingkan kekuatan antara tiger dan wolf
const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl(); // Panggil metode growl() dari tiger jika tiger lebih kuat
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl(); // Panggil metode howl() dari wolf jika wolf lebih kuat
  }
  return 'Tiger is as strong as Wolf!'; // Jika kekuatan sama, kembalikan pesan ini
};

// Membuat instance Tiger dan Wolf
const myTiger = new Tiger();
const myWolf = new Wolf();

// Memanggil fungsi fight dengan myTiger dan myWolf, dan menyimpan hasilnya dalam variabel result
const result = fight(myTiger, myWolf);

// Mengeskpor fungsi fight, objek myTiger, objek myWolf, dan variabel result untuk digunakan di modul lain
module.exports = {
  fight,
  myTiger,
  myWolf,
  result,
};
