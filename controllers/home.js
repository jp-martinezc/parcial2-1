const { db } = require("../lib/utils/mongo_root");
const [getRoomsByHome] = require("./room");
const COLLECTION_NAME = "homes";

async function getHomes() {
  const homes = await db().collection(COLLECTION_NAME).find({}).toArray();
  console.log(homes);
  return homes;
 
}

async function getHomeById(id) {
  const home = await db().collection(COLLECTION_NAME).findOne({ id: id });
  const roomsByHome = await getRoomsByHome(id);
  return { ...home, rooms: roomsByHome };
}

/* async function insertProduct(product) {
  await db().collection(COLLECTION_NAME)
    .insertOne(product)
  return;
}

async function getOneById(id) {
  const product = await db().collection(COLLECTION_NAME)
    .findOne({id: id})
  return product;
} */

module.exports = [getHomes, getHomeById];
