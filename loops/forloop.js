//Now creats loops that console.logs the numbers:

//from 0 to 9 - done
let counter;

function init() {
  counter = 0;
  loop();
}

function loop() {
  console.log(counter);
  counter++;

  if (counter < 10) {
    loop();
  }
}

init();

//From 1 to 10 - done
let counter2 = 0;
while (counter2 < 11) {
  console.log(counter2);
  counter2++;
}

//From 10 to 0, and after 0 it console.logs the: "liftoff" - done
let counter3 = 0;

for (counter3 = 0; counter3 > 10; counter3++) {
  console.log(counter3);
}

console.log(`liftoff`);

//From 1 to 19, but only counts odd numbers (no if-statement, change the increment!) - done
for (let counter4 = 1; counter4 <= 19; counter4 += 2) {
  console.log(counter4);
}

//Form 1 to 16777216, but doubling each time (2, 4, 8, 16 ...) - done
for (let counter5 = 2; counter5 <= 16777216; counter5 *= 2) {
  console.log(counter5);
}

//From 111 to 138, in steps of 3(mening the second number is 114 (111+3)) - done
for (let counter6 = 111; counter6 <= 138; counter6 += 3) {
  console.log(counter6);
}

//From 100 down to 0 in steps of 10
for (let counter7 = 100; counter7 >= 0; counter7 -= 10) {
  console.log(counter7);
}
