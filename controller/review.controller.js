import reviews from './../data/book-reviews.js';

//write middleware function to access reviews and return them as part of the response ...
export const getReviews = async (req, res) => {
    const find = await reviews.findAll();

    const views = reviews.forEach(item => item.toJSON());

    res.status(200).json(views);
}