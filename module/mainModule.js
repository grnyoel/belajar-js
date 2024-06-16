const Tiger = require('./tiger')
const Wolf = require('./wolf')

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Tiger is as strong as Wolf!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);


module.exports = {
  fight,
  myTiger,
  myWolf,
  result,
};