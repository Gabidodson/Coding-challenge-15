//Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation} from'./portfolio.js';
import { Transaction } from './transaction.js';
//Portfolio status initially
console.log("Initial status of Portfolio:");
console.log(`Total Portfolio Value: $${calculatePortfolioValue().toFixed(2)}`);
console.log ("\nPortfolio Allocation:");
console.log(getPortfolioAllocation());
//execute
try{
    const buyTransaction = new Transaction(1, "buy",35);
    console.log("\nBuy Transaction Completed:", buyTransaction);

    const sellTransaction = new Transaction (2, "sell", 15);
    console.log("Sell Transaction Completed:", sellTransaction);

    //updated
    console.log("\nUpdated Status of Portfolio:");
    console.log(`Portfolio Value Total: $${calculatePortfolioValue().toFixed(2)}`);
    console.log("\nUpdated Portfolio Allocation:");
    console.log(getPortfolioAllocation());
} catch (error) {
    console.error("Transaction Error:", error.message);
}