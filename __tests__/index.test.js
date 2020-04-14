import { CoinCounter } from "./../src/index.js";

describe("CoinCounter", () => {
  let coinCounter = new CoinCounter();

  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  test("Should return message on 'Not a number'", () => {
    const number = "number";
    expect(
      coinCounter.countCoins(number, quarters, dimes, nickels, pennies)
    ).toEqual("Not a number");
  });

  test("Should return zeros for all coin amounts", () => {
    const number = 0;
    expect(
      coinCounter.countCoins(number, quarters, dimes, nickels, pennies)
    ).toEqual("# Quarters 0. # Dimes 0. # Nickels 0. # Pennies 0.");
  });

  test("Should return 1 quarter", () => {
    const number = 0.25;
    expect(
      coinCounter.countCoins(number, quarters, dimes, nickels, pennies)
    ).toEqual("# Quarters 1. # Dimes 0. # Nickels 0. # Pennies 0.");
  });

  test("Should return 1 dime", () => {
    const number = 0.1;
    expect(
      coinCounter.countCoins(number, quarters, dimes, nickels, pennies)
    ).toEqual("# Quarters 0. # Dimes 1. # Nickels 0. # Pennies 0.");
  });

  test("Should return 1 nickel", () => {
    const number = 0.05;
    expect(
      coinCounter.countCoins(number, quarters, dimes, nickels, pennies)
    ).toEqual("# Quarters 0. # Dimes 0. # Nickels 1. # Pennies 0.");
  });

  test("Should return 1 penny", () => {
    const number = 0.01;
    expect(
      coinCounter.countCoins(number, quarters, dimes, nickels, pennies)
    ).toEqual("# Quarters 0. # Dimes 0. # Nickels 0. # Pennies 1.");
  });

  test("Should return 1 quarter 1 dime 1 nickel 1 penny", () => {
    const number = 0.41;
    expect(
      coinCounter.countCoins(number, quarters, dimes, nickels, pennies)
    ).toEqual("# Quarters 1. # Dimes 1. # Nickels 1. # Pennies 1.");
  });
});

// import { CoinCounter } from "./../src/index.js";
import { CoinCounterAndrew } from "./../src/andrew.js";

// describe("CoinCounter", () => {
//   let coinCounter = new CoinCounter();

//   var array = new Array();

//   test("Should return message on 'Not a number'", () => {
//     const number = "number";
//     expect(coinCounter.countCoins(number)).toEqual("Not a number");
//   });

//   test("Should return zeros for all coin amounts", () => {
//     const number = 0;
//     expect(coinCounter.countCoins(number)).toEqual("No change");
//   });

//   test("Should return 1 quarter", () => {
//     const number = 0.25;
//     expect(coinCounter.countCoins(number)).toEqual(["1 quarters"]);
//   });

//   test("Should return 1 dime", () => {
//     const number = 0.1;
//     expect(coinCounter.countCoins(number)).toEqual(["1 dimes"]);
//   });

//   test("Should return 1 nickel", () => {
//     const number = 0.05;
//     expect(coinCounter.countCoins(number)).toEqual(["1 nickels"]);
//   });

//   test("Should return 1 penny", () => {
//     const number = 0.01;
//     expect(coinCounter.countCoins(number)).toEqual(["1 pennies"]);
//   });

//   test("Should return 1 quarter 1 dime 1 nickel 1 penny", () => {
//     const number = 0.41;
//     expect(coinCounter.countCoins(number)).toEqual([
//       "1 quarters",
//       "1 dimes",
//       "1 nickels",
//       "1 pennies",
//     ]);
//   });
// });

describe("CoinCounterAndrew", () => {
  let coinCounter = new CoinCounterAndrew();

  test("Should return no change", () => {
    const number = 0;
    expect(coinCounter.countCoins(number)).toEqual([0, 0, 0, 0]);
  });

  test("Should return 1 quarter", () => {
    let number = 0.25;
    expect(coinCounter.countCoins(number)).toEqual([1, 0, 0, 0]);
  });

  test("Should return 1 dime", () => {
    let number = 0.1;
    expect(coinCounter.countCoins(number)).toEqual([0, 1, 0, 0]);
  });

  test("Should return 1 nickel", () => {
    let number = 0.05;
    expect(coinCounter.countCoins(number)).toEqual([0, 0, 1, 0]);
  });

  test("Should return 1 penny", () => {
    let number = 0.01;
    expect(coinCounter.countCoins(number)).toEqual([0, 0, 0, 1]);
  });

  test("Should return 1, 1, 1, 1", () => {
    let number = 0.41;
    expect(coinCounter.countCoins(number)).toEqual([1, 1, 1, 1]);
  });
  test("Should return 1 quarter and 1 dime", () => {
    let number = 0.35;
    expect(coinCounter.countCoins(number)).toEqual([1, 1, 0, 0]);
  });

  // test("Should return 1 quarter and 1 nickel", () => {
  //   let number = 0.3;
  //   expect(coinCounter.countCoins(number)).toEqual([1, 0, 1, 0]);
  // });

  // test("Should return 1 quarter and 1 penny", () => {
  //   let number = 0.26;
  //   expect(coinCounter.countCoins(number)).toEqual([1, 0, 0, 1]);
  // });

  // test("Should return 1 quarter, 1 dime, 1 nickel, and 1 penny", () => {
  //   let number = 0.41;
  //   expect(coinCounter.countCoins(number)).toEqual([1, 1, 1, 1]);
  // });
});
