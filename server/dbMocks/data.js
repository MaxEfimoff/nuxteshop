const moment = require('moment');
const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/product');
const Category = require('../models/category');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

const product1Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();

module.exports = {
  "users": {
    model: User,
    items: [
      {
      "_id": user1Id,
      "avatar": "https://b.kisscc0.com/20180718/urw/kisscc0-ninja-computer-icons-samurai-youtube-avatar-ninja-5b4ed903c2dd20.4931332915318940197982.jpg",
      "email": "max@gmail.com",
      "name": "Max Efi",
      "info": "Bla bla bla bla",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Rhonyn99",
      "password": "testtest",
      "role": 'admin',
      "products": [product1Id]
    },
    {
      "_id": user2Id,
      "avatar": "https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png",
      "email": "peter@gmail.com",
      "name": "Peter Green",
      "info": "Bla bla bla bla",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Petergreen",
      "password": "testtest1"
    },
    {
      "_id": user3Id,
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU",
      "email": "kevin@gmail.com",
      "name": "Kevin Rock",
      "info": "I have a famous name",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "username": "Kevin21",
      "password": "testtest2"
    }]
  },
  categories: {
    model: Category,
    items: [
      {
        "_id": category1Id,
        "name": "Road Bikes"
      },{
        "_id": category2Id,
        "name": "Gravel Bikes"
      }
    ]
  },
  products: {
    model: Product,
    items: [
      {
        "_id": product1Id,
        "slug": 'Canyon-dude',
        "title": "Super fatbike Canyon Dude",
        "subtitle": "Ride on sand or snow with Canyon Dude",
        "image": "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw3da07855/images/full/full_dude-/2018/full_dude-cf-9-unlimited_c1023.png?sw=416&sh=234&sm=fit&sfrm=png",
        "description": "Be it an expedition through sand or snow, a fast ride on your local singletrack or a laid-back cruise through the woods, there is nothing the Dude can’t do. It’s the ideal partner for exploring backyard trails and foreign frontiers alike.",
        "wsl": [
          {
            "value": "Carbon frame"
          },
          {
            "value": "SRAM GX Eagle Rear Derailleur"
          },
          {
            "value": "Disc Brakes"
          },
          {
            "value": "DT Swiss wheels"
          }
        ],
        "requirements": [
          {
            "value": "No previous experience is required!"
          },
          {
            "value": "Able to run on sand or snow!"
          }
        ],
        "promoVideoLink": "",
        "productLink": "https://www.canyon.com/en-us/mountain-bikes/fat-bikes/dude/dude-cf-9.0-unlimited/2593.html",
        "price": 999.99,
        "discountedPrice": 699.99,
        "status": "published",
        "createdAt": moment().toISOString(),
        "updatedAt": moment().toISOString(),
        "category": category2Id,
        "author": user1Id
      }
    ]
  }
};
