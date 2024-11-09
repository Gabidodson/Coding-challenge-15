//Create the Asset Module
const assets =[
    {id: 1, name: "Amazon Stock", type: "stock", price: 209.84, quantity:150},
    {id: 2, name: "Government Bond", typw: "bond", price:1500.00, quantity:35},
    {id: 3, name: "Walt Disney Co", type: "stock", price:98.99, quantity:75},
    {id: 4, name: "Treasury Bond", type: "bond", price:2500.00, quantity:22}

];
function getAssetByID(id){
    return assets.find(asset => asset.id === id);
}
exports = {assets, getAssetByID};