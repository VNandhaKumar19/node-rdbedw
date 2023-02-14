let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let result1 = sortArray(testCase1);

console.log('result 1 : ', result1);

let result2 = sortArray(testCase2);

function sortArray(arr) {
  return arr.sort((a, b) => {
    if (a.biology + a.chemistry > b.biology + b.chemistry) return -1;
    if (a.biology + a.chemistry < b.biology + b.chemistry) return 1;
    if (
      a.biology + a.chemistry == b.biology + b.chemistry &&
      a.biology > b.biology
    )
      return -1;
    if (
      a.biology + a.chemistry == b.biology + b.chemistry &&
      a.biology < b.biology
    )
      return 1;
    if (
      a.biology + a.chemistry == b.biology + b.chemistry &&
      a.biology == b.biology &&
      Date.parse(a.dob) > Date.parse(b.dob)
    )
      return -1;
    if (
      a.biology + a.chemistry == b.biology + b.chemistry &&
      a.biology == b.biology &&
      Date.parse(a.dob) < Date.parse(b.dob)
    )
      return 1;
    if (
      a.biology + a.chemistry == b.biology + b.chemistry &&
      a.biology == b.biology &&
      Date.parse(a.dob) == Date.parse(b.dob)
    )
      return 1;
  });
}

console.log('result 2 : ', result2);
