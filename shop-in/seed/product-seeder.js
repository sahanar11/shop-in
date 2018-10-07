// // to seed some data into database
// var mongoose = require('mongoose');
// mongoose.connect('localhost:3000/shopping');
// var Product = require('../models/product');
// var products = [
//     new Product({
//         imagePath: "https://en.wikipedia.org/wiki/Gothic_(video_game)#/media/File:Gothiccover.png",
//         title: "Gothic video game",
//         description: "Awesome.. Cool game",
//         price: 20
//     }),

//     new Product({
//         imagePath: "https://en.wikipedia.org/wiki/Angry_Birds_(video_game)#/media/File:Angry_Birds_promo_art.png",
//         title: "Angry Bird game",
//         description: "Crazy game",
//         price: 10
//     }),
//     new Product({
//         imagePath: "https://en.wikipedia.org/wiki/Eggomania#/media/File:Eggomania.jpg",
//         title: "Egg catching game",
//         description: "Eggomania",
//         price: 50
//     }),
//     new Product({
//         imagePath: "https://upload.wikimedia.org/wikipedia/en/b/b9/Subway_Surfers_app_logo.png",
//         title: "Subway Surf game",
//         description: "Thriling",
//         price: 40
//     }),
//     new Product({
//         imagePath: "https://en.wikipedia.org/wiki/Temple_Run#/media/File:TempleRun.jpg",
//         title: "Temple Run game",
//         description: "Awesome.. Exciting game",
//         price: 30
//     }),
//     new Product({
//         imagePath: "https://en.wikipedia.org/wiki/Ludo_(board_game)#/media/File:Ludo_Pieces.JPG",
//         title: "Ludo game",
//         description: "Best Time passing game",
//         price: 20
//     })
// ];
// var done = 0;

// for (var i = 0; i < products.length; i++) {
//     products[i].save(function (err, result) {
//         done++;
//         if (done === products.length) {
//             exit();
//         }
//     });
// }
// function exit() {
//     mongoose.disconnect();
// }