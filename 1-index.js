//First-class citizens

const calc = () => {
  return 4 + 3;
};

const printNumber = (cb) => {
  console.log(cb());
};

printNumber(calc);
