// run `node index.js` in the terminal

const value = 100;
for (let i = 1; i <= value; i++) {
  const result =
    i % 3 == 0 && i % 5 == 0
      ? 'amazon'
      : i % 5 == 0
      ? 'facebook'
      : i % 3 == 0
      ? 'google'
      : i;
  console.log(result);
}
