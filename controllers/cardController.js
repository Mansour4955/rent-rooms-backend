const asyncHandler = require("express-async-handler");
const {
  Card,
  validateCreateCard,
  validateUpdateCard,
} = require("../models/Card");

/**
 * @desc Get all cards
 * @route /api/cards
 * @method Get
 * @access public
 */

// const query = JSON.parse(`{${!!minPrice ? {  price: { $gte: minPrice } } : {}}, 
// ${!!minPrice ? {  price: { $gte: minPrice } } : {}}, 
// ${!!minPrice ? {  price: { $gte: minPrice } } : {}}, 
// ${!!minPrice ? {  price: { $gte: minPrice } } : {}}}`) 
module.exports.getAllCards = asyncHandler(async (req, res) => {
  const { category, country, minPrice, maxPrice } = req.query;
  if (country && !category && !minPrice && !maxPrice) {
    const cards = await Card.find({ country });
    res.status(200).json(cards);
  } else if (category && !country && !minPrice && !maxPrice) {
    const cards = await Card.find({ category });
    res.status(200).json(cards);
  } else if (minPrice && !category && !country && !maxPrice) {
    const cards = await Card.find({ price: { $gte: minPrice } });
    res.status(200).json(cards);
  } else if (maxPrice && !category && !country && !minPrice) {
    const cards = await Card.find({ price: { $lte: maxPrice } });
    res.status(200).json(cards);
  } else if (minPrice && maxPrice && !category && !country) {
    const cards = await Card.find({
      price: { $gte: minPrice, $lte: maxPrice },
    });
    res.status(200).json(cards);
  } else if (country && category && !minPrice && !maxPrice) {
    const cards = await Card.find({ country, category });
    res.status(200).json(cards);
  } else if (country && minPrice && !maxPrice && !category) {
    const cards = await Card.find({ country, price: { $gte: minPrice } });
    res.status(200).json(cards);
  } else if (country && maxPrice && !minPrice && !category) {
    const cards = await Card.find({ country, price: { $lte: maxPrice } });
    res.status(200).json(cards);
  } else if (category && minPrice && !maxPrice && !country) {
    const cards = await Card.find({ category, price: { $gte: minPrice } });
    res.status(200).json(cards);
  } else if (category && !minPrice && maxPrice && !country) {
    const cards = await Card.find({ category, price: { $lte: maxPrice } });
    res.status(200).json(cards);
  } else if (category && minPrice && maxPrice && !country) {
    const cards = await Card.find({
      category,
      price: { $lte: maxPrice, $gte: minPrice },
    });
    res.status(200).json(cards);
  } else if (category && minPrice && !maxPrice && country) {
    const cards = await Card.find({
      country,
      category,
      price: { $gte: minPrice },
    });
    res.status(200).json(cards);
  } else if (category && !minPrice && maxPrice && country) {
    const cards = await Card.find({
      country,
      category,
      price: { $lte: maxPrice },
    });
    res.status(200).json(cards);
  } else if (category && minPrice && maxPrice && country) {
    const cards = await Card.find({
      country,
      category,
      price: { $lte: maxPrice, $gte: minPrice },
    });
    res.status(200).json(cards);
  } else {
    const cards = await Card.find();
    res.status(200).json(cards);
  }
});

/**
 * @desc Get card by id
 * @route /api/cards/:id
 * @method Get
 * @access public
 */
module.exports.getCardById = asyncHandler(async (req, res) => {
  const card = await Card.findById(req.params.id);
  res.status(200).json(card);
});

/**
 * @desc Craete Card
 * @route /api/cards
 * @method Post
 * @access public
 */
module.exports.createCard = asyncHandler(async (req, res) => {
  const { error } = validateCreateCard(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const card = new Card({
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    country: req.body.country,
    category: req.body.category,
    image: req.body.image,
  });
  const result = await card.save();
  res.status(201).json(result);
});

/**
 * @desc Update Card
 * @route /api/cards/:id
 * @method Put
 * @access public
 */
module.exports.updateCardById = asyncHandler(async (req, res) => {
  const { error } = validateUpdateCard(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
  }
  const card = await Card.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        desc: req.body.desc,
        price: req.body.price,
        country: req.body.country,
        category: req.body.category,
        image: req.body.image,
      },
    },
    { new: true }
  );
  res.status(200).json(card);
});

/**
 * @desc Delete Card
 * @route /api/cards/:id
 * @method Delete
 * @access public
 */
module.exports.deleteCardById = asyncHandler(async (req, res) => {
  const card = await Card.findById(req.params.id);
  if (card) {
    await Card.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Card Has Been Deleted" });
  } else {
    res.status(404).json({ message: "Card Not Found" });
  }
});
