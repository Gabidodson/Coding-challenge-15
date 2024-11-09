//Create the Portfolio Module
import {assets} from ('./asset.js');

function calculatePortfolioValue() {
    return assets.reduce((total,asset)=>{
        return total +(asset.price * asset.quantity);
    }, 0);
}
//export function 
function getPortfolioAllocation(){
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue*100).toFixed(2)
    }));
}
exports = { calculatePortfolioValue, getPortfolioAllocation};






