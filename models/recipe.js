const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    name: {type: String, required: true},
    review: {type: String, required: true},
    starRating: {type: Number, required: true},
}, {
    timestamps: true
})


const recipeSchema = new Schema({
    title: {type: String, required: true},
    instructions: {type: String, required: true},
    prepTime: {type: String, required: true},
    ingredients: {type: [], required: true},
    reviews: [reviewSchema],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', populate: { select: 'name' } }
}, {
    timestamps: true
})





module.exports = mongoose.model('Review', reviewSchema)
module.exports = mongoose.model('Recipe', recipeSchema)
