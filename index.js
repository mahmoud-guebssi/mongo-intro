import mongoose from "mongoose";
import colors from "colors";

// Connect to mongdb database

async function connectDB() {
  try {
    await mongoose.connect(
      'mongodb+srv://mahmoud:mahmoud1@cluster0.8np5ad5.mongodb.net/'
    );

    console.log("Successfully connected to MongoDB...");
  } catch (error) {
    console.log("We could not connect to MongoDB...", error.message);
  }
}

connectDB();
// 1 - create Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  rating: Number,
});

// 2- create Model

const Product = mongoose.model("Product", productSchema);

// 3- Create Document
async function createProduct(name, price, category, rating) {
  try {
    const p = new Product({
      name: name,
      price: price,
      category: category,
      rating: rating,
    });

    // asynchronous operation

    const result = await p.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  // p.save()
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log(err));
}

// Read
async function findProductById(id) {
  try {
    const product = await Product.findById(id);

    if (product) {
      console.log(product);
      return;
    }

    console.log("Product Not Found");
  } catch (error) {
    console.log(error);
  }
}

//createProduct("Phone", 250, "Electronics", 4.5);
//findProductById("68823cc20afa0e66baa0d9cc");

// get all the products
async function findProducts() {
  try {
    const products = await Product.find();

    cnsole.log(products);
  } catch (error) {
    console.log(error);
  }
}

//findProducts();
async function updateProduct(id, updateData) {
  try {
    // if product exist: update producr
    let result = await Product.findByIdAndUpdate(id, updateData);

    console.log(result);

    // else: send message: "Product Not found"
  } catch (error) {
    console.log(error);
  }
}



async function deleteProduct(id) {
  try {
    const result = await Product.findByIdAndDelete(id);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
deleteProduct("687e26d98f0caacd287c0e49")