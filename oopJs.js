// Mendefinisikan kelas induk Animal
class Animal {
    // Constructor untuk menginisialisasi properti name, age, dan isMammal
    constructor(name, age, isMammal) {
      this.name = name;      // Nama hewan
      this.age = age;        // Usia hewan
      this.isMammal = isMammal; // Apakah hewan tersebut mamalia
    }
  }
  
  // Mendefinisikan kelas Rabbit yang merupakan turunan dari kelas Animal
  class Rabbit extends Animal {
    // Constructor untuk menginisialisasi properti name dan age
    constructor(name, age) {
      // Panggil Contructor induk dengan nilai true untuk isMammal
      super(name, age, true);
    }
  
    // Metode untuk menampilkan pesan makan
    eat() {
      return `${this.name} is eating!`; // Mengembalikan string yang menunjukkan bahwa kelinci sedang makan
    }
  }
  
  // Mendefinisikan kelas Eagle yang merupakan turunan dari kelas Animal
  class Eagle extends Animal {
    // Constructor untuk menginisialisasi properti name dan age
    constructor(name, age) {
      // Panggil Contructor induk dengan nilai false untuk isMammal
      super(name, age, false);
    }
  
    // Metode untuk menampilkan pesan terbang
    fly() {
      return `${this.name} is flying!`; // Mengembalikan string yang menunjukkan bahwa elang sedang terbang
    }
  }
  
  // Buat instance dari kelas Rabbit
  const myRabbit = new Rabbit("Bell Cranell", 2);
  
  // Buat instance dari kelas Eagle
  const myEagle = new Eagle("Runcandel", 4);
  
  // Cetak properti dan metode dari myRabbit
  console.log(myRabbit.name);       // Output: Bell Cranell
  console.log(myRabbit.age);        // Output: 2
  console.log(myRabbit.isMammal);   // Output: true
  console.log(myRabbit.eat());      // Output: Bell Crannel is eating!
  
  // Cetak properti dan metode dari myEagle
  console.log(myEagle.name);        // Output: Runcandel
  console.log(myEagle.age);         // Output: 4
  console.log(myEagle.isMammal);    // Output: false
  console.log(myEagle.fly());       // Output: Runcandel is flying!
  