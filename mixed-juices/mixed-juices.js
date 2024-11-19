// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  // let result = 0;
  // if (wedgesNeeded === 0) {
  //   return 0;
  // }
  // for (const lime of limes) {
  //   if (lime === "small" && wedgesNeeded > 0) {
  //     wedgesNeeded -= 6;
  //   }
  //   if (lime === "medium" && wedgesNeeded > 0) {
  //     wedgesNeeded -= 8;
  //   }
  //   if (lime === "large" && wedgesNeeded > 0) {
  //     wedgesNeeded -= 10;
  //   }
  //   result += 1;
  //   if (wedgesNeeded <= 0) {
  //     break;
  //   }
  // }
  // return result;
  let limeCount = 0; // Keeps track of the number of limes cut
  let wedgesCut = 0; // Keeps track of the total wedges cut so far

  // Continue cutting limes until the required wedges are cut or the array is empty
  while (wedgesCut < wedgesNeeded && limes.length > 0) {
    const lime = limes.shift(); // Remove the first lime from the array
    let wedgesFromCurrentLime = 0;

    // Determine how many wedges can be cut using a switch statement
    switch (lime) {
      case "small":
        wedgesFromCurrentLime = 6;
        break;
      case "medium":
        wedgesFromCurrentLime = 8;
        break;
      case "large":
        wedgesFromCurrentLime = 10;
        break;
    }

    wedgesCut += wedgesFromCurrentLime; // Add wedges from the current lime
    limeCount++; // Increment the count of limes cut
  }

  return limeCount; // Return the total number of limes cut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    const timeSpent = timeToMixJuice(orders[0]);
    timeLeft -= timeSpent;
    orders.shift();
  } while (timeLeft > 0 && orders.length > 0);

  if (orders.length === 0) {
    return [];
  } else {
    return orders;
  }
}
