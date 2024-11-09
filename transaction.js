//Create the Transaction Module

import { assets, getAssetById } from('./asset.js');

class Transaction {
    constructor(assetId, type, quantity){
        this.asset = getAssetById(assetId);
        this.type = typetoLowerCase();
        this.quantity = Number(quantity);
        this.timestamp = new Date();
        
        this.executeTransaction();
    }
    //transaction
    executeTransaction() {
        if(this.type === "sell" && this.asset.quantity < this.quantity){
            throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
        }
        this.asset.quantity += this.type === "buy" ? this.quantity : -this.quantity;
        return {
            assetName: this.asset.name,
            type: this.type,
            quantity: this.quantity,
            timestamp: this.timestamp
        };
    }
}
export default  Transaction;

