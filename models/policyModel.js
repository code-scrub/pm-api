/**
 * File Name: policyModel.js
 * 
 * Purpose: This policyModel defines the schema and 
 * the properties of a policy request.
 */

const { mongoose } = require("../config/mongoConfig");

module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            type: String,
            holder_first_name: String,
            holder_last_name: String,
            holder_account_id: String,
            is_active: Boolean,
            has_active_claim: Boolean,
            effective_date: Date,
            termination_date: Date
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const policyCollection = mongoose.model("policy_collection", schema);
    return policyCollection;
};