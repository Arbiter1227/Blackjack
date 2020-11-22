main();

function main() {
  console.clear();
  var data = setup();
  while (data.player.done === false || data.enemy.done === false) {
    if (!(data.player.score >= 21 || data.player.done === true)) {
    console.log('~Player Turn~');
    console.log();
    console.log(`Your score is ${data.player.score}.`);
    console.log();
      console.log('[1] Hit');
      console.log('[2] Stand');
      console.log();
      var answer = prompt('');
      console.log();
      if (answer == '2') {
        data.player.done = true;
        console.log('You chose to stand.');
      } else {
        var card = (Math.floor((Math.random() * 10) + 1));
        data.player.score = (data.player.score + card);
        console.log(`You gained ${card} points.`);
        console.log(`(Your current score is ${data.player.score})`);
        if (data.player.score >= 21) {
          data.player.done = true;
        }
      }
      console.log();
    }
    if (data.enemy.done === false) {
      console.log('~Enemy Turn~');
      console.log();
      console.log(`The Enemy's score is ${data.enemy.score}.`);
      console.log();
      if (data.enemy.score <= 15) {
        var card = (Math.floor((Math.random() * 10) + 1));
        data.enemy.score = (data.enemy.score + card);
        console.log('The Enemy chose to hit.');
        console.log();
        console.log(`The Enemy gained ${card} points.`);
        console.log(`(The Enemy's current score is ${data.enemy.score})`);
      } else {
        data.enemy.done = true;
        console.log('The Enemy chose to stand.');
      }
      console.log();
    }
  }
console.log('~Results Time~');
console.log();
if (data.player.score > 21) {
data.player.score = 999;
} else {
  data.player.score = Math.abs((21 - data.player.score));
}
if (data.enemy.score > 21) {
data.enemy.score = 999;
} else {
  data.enemy.score = Math.abs((21 - data.enemy.score));
}
if (data.player.score === data.enemy.score) {
  var result = 'tie';
} else if (data.player.score < data.enemy.score) {
  var result = 'win';
} else {
  var result = 'lose';
}
switch(result) {
  case 'tie':
  console.log('Tie!');
  break;
  case 'win':
  console.log('You win!');
  break;
  case 'lose':
  console.log('You lose.');
  break;
}
console.log();
console.log('(press enter to play again)');
console.log();
prompt('');
main();
}

function setup() {
  var x = {
    player: {
      score: 0,
      done: false
    },
    enemy: {
      score: 0,
      done: false
    }
  }
  return x;
}