function greet(name) {
  console.log(`Hello ${name}`);
}

const name = process.argv[2];

greet(name);
