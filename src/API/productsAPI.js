import {
  AirJordanMid,
  AirJordanMid1,
  AirJordanMid2,
  AirJordanMid3,
  AirJordanRetro4,
  AirJordanRetro41,
  AirJordanRetro42,
  AirJordanRetro43,
  AirJordanRetro6,
  AirJordanRetro61,
  AirJordanRetro62,
  AirJordanRetro63,
  AirJordanRetro13,
  AirJordanRetro131,
  AirJordanRetro132,
  AirJordanRetro133,
  CurlyJacket,
  CurlyJacket1,
  CurlyJacketVid,
  GRAINLEATHER,
  GRAINLEATHER1,
  GRAINLEATHERVid,
  JordanSpizike,
  JordanSpizike1,
  JordanSpizike2,
  JordanSpizike3,
  EVENINGDRESS,
  EVENINGDRESS1,
  EVENINGDRESSVid,
  EVENINGDRESSSATINVNECK,
  EVENINGDRESSSATINVNECK1,
  EVENINGDRESSSATINVNECKVid,
  LEATHERJACKET,
  LEATHERJACKET1,
  LEATHERJACKETVid,
  SOFTSILKKAFTAN,
  SOFTSILKKAFTAN1,
  SOFTSILKKAFTANVid,
  VISCOSESATIN,
  VISCOSESATIN1,
  VISCOSESATINVid,
} from "../assets/New Arrivals";

const products = {
  newArrivals: [
    {
      id: 1,
      name: "Air Jordan 13 Retro 'Dune Red'",
      mainImage: AirJordanRetro13,
      subImages: [AirJordanRetro131, AirJordanRetro132, AirJordanRetro133],
      sizes: [8, 9, 10, 11, 12],
      type: "shoes",
      price: 200,
      description:
        "The Air Jordan 13 Retro brings back the stealthy, shrouded design with a fresh mix of colors and textures. Crafted to the '98 specs as designed by Tinker Hatfield, you're getting the panther paw outsole, the holographic eye, and everything else that made these kicks iconic in the first place. MJ rode the original AJ13 all the way to his 6th ring—how are you gonna make this edition famous?",
      category: "men",
      stock: 10,
    },
    {
      id: 2,
      name: "Jordan Spizike Low",
      mainImage: JordanSpizike,
      subImages: [JordanSpizike1, JordanSpizike2, JordanSpizike3],
      sizes: [8, 9, 10, 11, 12],
      type: "shoes",
      price: 160,
      description:
        "The Spizike takes elements of five classic Jordans, combines them, and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great looking pair of kicks with some history. What more can you ask for? Ya dig?",
      category: "men",
      stock: 10,
    },
    {
      id: 3,
      name: "JoAir Jordan 4 Retro 'Oxidized Green'",
      mainImage: AirJordanRetro4,
      subImages: [AirJordanRetro41, AirJordanRetro42, AirJordanRetro43],
      sizes: [8, 9, 10, 11, 12],
      type: "shoes",
      price: 215,
      description:
        "Step into a classic. This AJ4 throws it back with full-grain and synthetic leathers and premium textiles. Lush colors and metallic pops update the icon, while original design elements—like floating eyestays and mesh-inspired accents—feel just as fresh as they did in '89.",
      category: "men",
      stock: 10,
    },
    {
      id: 4,
      name: `Air Jordan 6 Retro "White/Black"`,
      mainImage: AirJordanRetro6,
      subImages: [AirJordanRetro61, AirJordanRetro62, AirJordanRetro63],
      sizes: [8, 9, 10, 11, 12],
      type: "shoes",
      price: 200,
      description:
        "MJ wore 'em when he claimed his first championship and you'll be wearing 'em for—well, whatever you want. Laden with dynamic design lines and those iconic lace locks, these sneakers bring throwback style to any 'fit. Lace up, and let your kicks do the talking.",
      stock: 10,
    },
    {
      id: 5,
      name: `Air Jordan 6 Retro "White/BlackAir Jordan 1 Mid`,
      mainImage: AirJordanMid,
      subImages: [AirJordanMid1, AirJordanMid2, AirJordanMid3],
      sizes: [8, 9, 10, 11, 12],
      type: "shoes",
      price: 110,
      description:
        "This iteration of the AJ1 reimagines Mike's first signature model with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.",
      stock: 10,
    },
    {
      id: 6,
      name: "VISCOSE SATIN STRETCH JERSEY KAFTAN",
      mainImage: VISCOSESATIN,
      subImages: [VISCOSESATIN1, VISCOSESATINVid],
      sizes: [34, 36, 38, 40, 42],
      type: "dress",
      price: 4790,
      description: "",
      category: "women",
      stock: 15,
    },
    {
      id: 7,
      name: "SATIN STRETCH JERSEY DEEP V-NECK KAFTAN",
      mainImage: `${EVENINGDRESSSATINVNECK}`,
      subImages: [EVENINGDRESSSATINVNECK1, EVENINGDRESSSATINVNECKVid],
      sizes: [34, 36, 38, 40, 42],
      type: "dress",
      price: 4790,
      description: "",
      category: "women",
      stock: 15,
    },
    {
      id: 8,
      name: "SOFT SILK STRETCH CADY KAFTAN",
      mainImage: `${SOFTSILKKAFTAN}`,
      subImages: [SOFTSILKKAFTAN1, SOFTSILKKAFTANVid],
      sizes: [34, 36, 38, 40, 42],
      type: "dress",
      price: 5290,
      description: "",
      category: "women",
      stock: 15,
    },
    {
      id: 9,
      name: "KNITTED STRETCH JERSEY CRISS-CROSS EVENING DRESS",
      mainImage: `${EVENINGDRESS}`,
      subImages: [EVENINGDRESS1, EVENINGDRESSVid],
      sizes: [34, 36, 38, 40, 42],
      type: "dress",
      price: 4590,
      description: "",
      category: "women",
      stock: 15,
    },
    {
      id: 10,
      name: "CURLY SHEARLING JACKET",
      mainImage: CurlyJacket,
      subImages: [CurlyJacket1, CurlyJacketVid],
      sizes: [34, 36, 38, 40, 42],
      type: "jacket",
      price: 4980,
      description: "",
      category: "women",
      stock: 15,
    },
    {
      id: 11,
      name: "CURLY SHEARLING SHEARLING & LEATHER WESTERN JACKET",
      mainImage: `${LEATHERJACKET}`,
      subImages: [LEATHERJACKET1, LEATHERJACKETVid],
      sizes: [34, 36, 38, 40, 42],
      type: "jacket",
      price: 6890,
      description: "",
      category: "women",
      stock: 15,
    },
    {
      id: 12,
      name: "GRAIN LEATHER TARA MEDIUM CROSSBODY",
      mainImage: GRAINLEATHER,
      subImages: [GRAINLEATHER1, GRAINLEATHERVid],
      sizes: [],
      type: "bag",
      price: 2290,
      description: "",
      category: "women",
      stock: 15,
    },

    // Add more products as needed
  ],
  Men: [
    {
      id: 3,
      name: "Men's Suit",
      mainImage: "path/to/main-image.jpg",
      subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
      sizes: ["M", "L", "XL", "XXL"],
      type: "suit",
      price: 199.99,
      description: "A sleek and modern suit for formal occasions.",
      category: "Men",
      stock: 5,
    },
    {
      id: 4,
      name: "Men's Running Shoes",
      mainImage: "path/to/main-image.jpg",
      subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
      sizes: [8, 9, 10, 11, 12],
      type: "shoes",
      price: 79.99,
      description: "Lightweight and durable running shoes.",
      category: "Men",
      stock: 20,
    },
    // Add more products as needed
  ],
  Women: [
    {
      id: 5,
      name: "Women's Knit Sweater",
      mainImage: "path/to/main-image.jpg",
      subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
      sizes: ["S", "M", "L", "XL"],
      type: "sweater",
      price: 49.99,
      description: "A cozy knit sweater for chilly days.",
      category: "Women",
      stock: 12,
    },
    {
      id: 6,
      name: "Women's High Heels",
      mainImage: "path/to/main-image.jpg",
      subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
      sizes: [6, 7, 8, 9, 10],
      type: "shoes",
      price: 69.99,
      description: "Elegant high heels for special occasions.",
      category: "Women",
      stock: 8,
    },
    // Add more products as needed
  ],
  Kids: [
    {
      id: 7,
      name: "Kids' T-Shirt",
      mainImage: "path/to/main-image.jpg",
      subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
      sizes: ["XS", "S", "M", "L"],
      type: "t-shirt",
      price: 19.99,
      description: "A fun and colorful t-shirt for kids.",
      category: "Kids",
      stock: 25,
    },
    {
      id: 8,
      name: "Kids' Sneakers",
      mainImage: "path/to/main-image.jpg",
      subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
      sizes: [1, 2, 3, 4, 5],
      type: "shoes",
      price: 29.99,
      description: "Comfortable sneakers for active kids.",
      category: "Kids",
      stock: 30,
    },
    // Add more products as needed
  ],
};

export { products };

// const imagePath = (folder, name) => `/src/assets/${folder}/${name}`;

// const products = {
//   newArrivals: [
//     {
//       id: 1,
//       name: "Air Jordan 13 Retro 'Dune Red'",
//       mainImage: imagePath("New Arrivals", "Air Jordan 13 Retro Dune Red.jfif"),
//       subImages: [
//         imagePath("New Arrivals", "Air Jordan 13 Retro Dune Red 1.png"),
//         imagePath("New Arrivals", "Air Jordan 13 Retro Dune Red 2.jfif"),
//         imagePath("New Arrivals", "Air Jordan 13 Retro Dune Red 3.png"),
//       ],
//       sizes: [8, 9, 10, 11, 12],
//       type: "shoes",
//       price: 200,
//       description:
//         "The Air Jordan 13 Retro brings back the stealthy, shrouded design with a fresh mix of colors and textures. Crafted to the '98 specs as designed by Tinker Hatfield, you're getting the panther paw outsole, the holographic eye, and everything else that made these kicks iconic in the first place. MJ rode the original AJ13 all the way to his 6th ring—how are you gonna make this edition famous?",
//       category: "men",
//       stock: 10,
//     },
//     {
//       id: 2,
//       name: "Jordan Spizike Low",
//       mainImage: imagePath("New Arrivals", "Jordan Spizike Low.png"),
//       subImages: [
//         imagePath("New Arrivals", "Jordan Spizike Low 2.png"),
//         imagePath("New Arrivals", "Jordan Spizike Low 3.png"),
//         imagePath("New Arrivals", "Jordan Spizike Low 4.png"),
//       ],
//       sizes: [8, 9, 10, 11, 12],
//       type: "shoes",
//       price: 160,
//       description:
//         "The Spizike takes elements of five classic Jordans, combines them, and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great looking pair of kicks with some history. What more can you ask for? Ya dig?",
//       category: "men",
//       stock: 10,
//     },
//     {
//       id: 3,
//       name: "JoAir Jordan 4 Retro 'Oxidized Green'",
//       mainImage: imagePath(
//         "New Arrivals",
//         "Air Jordan 4 Retro Oxidized Green.jfif",
//       ),
//       subImages: [
//         imagePath("New Arrivals", "Air Jordan 4 Retro Oxidized Green 1.png"),
//         imagePath("New Arrivals", "Air Jordan 4 Retro Oxidized Green 2.jfif"),
//         imagePath("New Arrivals", "Air Jordan 4 Retro Oxidized Green 3.png"),
//       ],
//       sizes: [8, 9, 10, 11, 12],
//       type: "shoes",
//       price: 215,
//       description:
//         "Step into a classic. This AJ4 throws it back with full-grain and synthetic leathers and premium textiles. Lush colors and metallic pops update the icon, while original design elements—like floating eyestays and mesh-inspired accents—feel just as fresh as they did in '89.",
//       category: "men",
//       stock: 10,
//     },
//     {
//       id: 4,
//       name: `Air Jordan 6 Retro "White/Black"`,
//       mainImage: imagePath(
//         "New Arrivals",
//         "Air Jordan 6 Retro White and Black.png",
//       ),
//       subImages: [
//         imagePath("New Arrivals", "Air Jordan 6 Retro White and Black 1.png"),
//         imagePath("New Arrivals", "Air Jordan 6 Retro White and Black 2.png"),
//         imagePath("New Arrivals", "Air Jordan 6 Retro White and Black 3.png"),
//       ],
//       sizes: [8, 9, 10, 11, 12],
//       type: "shoes",
//       price: 200,
//       description:
//         "MJ wore 'em when he claimed his first championship and you'll be wearing 'em for—well, whatever you want. Laden with dynamic design lines and those iconic lace locks, these sneakers bring throwback style to any 'fit. Lace up, and let your kicks do the talking.",
//       stock: 10,
//     },
//     {
//       id: 5,
//       name: `Air Jordan 1 Mid`,
//       mainImage: imagePath("New Arrivals", "Air Jordan 1 Mid.png"),
//       subImages: [
//         imagePath("New Arrivals", "Air Jordan 1 Mid 1.png"),
//         imagePath("New Arrivals", "Air Jordan 1 Mid 2.png"),
//         imagePath("New Arrivals", "Air Jordan 1 Mid 3.png"),
//       ],
//       sizes: [8, 9, 10, 11, 12],
//       type: "shoes",
//       price: 110,
//       description:
//         "This iteration of the AJ1 reimagines Mike's first signature model with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.",
//       stock: 10,
//     },
//     {
//       id: 6,
//       name: "VISCOSE SATIN STRETCH JERSEY KAFTAN",
//       mainImage: imagePath(
//         "New Arrivals",
//         "VISCOSE SATIN STRETCH JERSEY KAFTAN.jfif",
//       ),
//       subImages: [
//         imagePath("New Arrivals", "VISCOSE SATIN STRETCH JERSEY KAFTAN 2.jfif"),
//         imagePath("New Arrivals", "VISCOSE SATIN STRETCH JERSEY KAFTAN.mp4"),
//       ],
//       sizes: [34, 36, 38, 40, 42],
//       type: "dress",
//       price: 4790,
//       description: "",
//       category: "women",
//       stock: 15,
//     },

//     {
//       id: 7,
//       name: "SATIN STRETCH JERSEY DEEP V-NECK KAFTAN",
//       mainImage: imagePath(
//         "New Arrivals",
//         "KNITTED STRETCH JERSEY CRISS-CROSS EVENING DRESS.jfif",
//       ),
//       subImages: [
//         imagePath(
//           "New Arrivals",
//           "KNITTED STRETCH JERSEY CRISS-CROSS EVENING DRESS 1.jfif",
//         ),
//         imagePath(
//           "New Arrivals",
//           "KNITTED STRETCH JERSEY CRISS-CROSS EVENING DRESS.mp4",
//         ),
//       ],
//       sizes: [34, 36, 38, 40, 42],
//       type: "dress",
//       price: 4790,
//       description: "",
//       category: "women",
//       stock: 15,
//     },
//     {
//       id: 8,
//       name: "SOFT SILK STRETCH CADY KAFTAN",
//       mainImage: imagePath(
//         "New Arrivals",
//         "SOFT SILK STRETCH CADY KAFTAN.jfif",
//       ),
//       subImages: [
//         imagePath("New Arrivals", "SOFT SILK STRETCH CADY KAFTAN 2.jfif"),
//         imagePath("New Arrivals", "SOFT SILK STRETCH CADY KAFTAN.mp4"),
//       ],
//       sizes: [34, 36, 38, 40, 42],
//       type: "dress",
//       price: 5290,
//       description: "",
//       category: "women",
//       stock: 15,
//     },
//     {
//       id: 9,
//       name: "KNITTED STRETCH JERSEY CRISS-CROSS EVENING DRESS",
//       mainImage: imagePath(
//         "New Arrivals",
//         "KNITTED STRETCH JERSEY CRISS-CROSS EVENING DRESS.jfif",
//       ),
//       subImages: [
//         imagePath(
//           "New Arrivals",
//           "KNITTED STRETCH JERSEY CRISS-CROSS EVENING DRESS 1.jfif",
//         ),
//         imagePath(
//           "New Arrivals",
//           "KNITTED STRETCH JERSEY CRISS-CROSS EVENING DRESS.mp4",
//         ),
//       ],
//       sizes: [34, 36, 38, 40, 42],
//       type: "dress",
//       price: 4590,
//       description: "",
//       category: "women",
//       stock: 15,
//     },
//     {
//       id: 10,
//       name: "CURLY SHEARLING JACKET",
//       mainImage: imagePath("New Arrivals", "CURLY SHEARLING JACKET.jfif"),
//       subImages: [
//         imagePath("New Arrivals", "CURLY SHEARLING JACKET 2.jfif"),
//         imagePath("New Arrivals", "CURLY SHEARLING JACKET.mp4"),
//       ],
//       sizes: [34, 36, 38, 40, 42],
//       type: "jacket",
//       price: 4980,
//       description: "",
//       category: "women",
//       stock: 15,
//     },
//     {
//       id: 11,
//       name: "CURLY SHEARLING JACKET",
//       mainImage: imagePath("New Arrivals", "CURLY SHEARLING JACKET.jfif"),
//       subImages: [
//         imagePath("New Arrivals", "CURLY SHEARLING JACKET 2.jfif"),
//         imagePath("New Arrivals", "CURLY SHEARLING JACKET.mp4"),
//       ],
//       sizes: [34, 36, 38, 40, 42],
//       type: "jacket",
//       price: 6890,
//       description: "",
//       category: "women",
//       stock: 15,
//     },
//     {
//       id: 12,
//       name: "GRAIN LEATHER TARA MEDIUM CROSSBODY",
//       mainImage: imagePath(
//         "New Arrivals",
//         "GRAIN LEATHER TARA MEDIUM CROSSBODY.jfif",
//       ),
//       subImages: [
//         imagePath("New Arrivals", "GRAIN LEATHER TARA MEDIUM CROSSBODY 2.jfif"),
//         imagePath("New Arrivals", "GRAIN LEATHER TARA MEDIUM CROSSBODY.mp4"),
//       ],
//       sizes: [], // Assuming no sizes are specified
//       type: "bag",
//       price: 2290,
//       description: "",
//       category: "women",
//       stock: 15,
//     },

//     // Add more products as needed
//   ],
//   Men: [
//     {
//       id: 3,
//       name: "Men's Suit",
//       mainImage: "path/to/main-image.jpg",
//       subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
//       sizes: ["M", "L", "XL", "XXL"],
//       type: "suit",
//       price: 199.99,
//       description: "A sleek and modern suit for formal occasions.",
//       category: "Men",
//       stock: 5,
//     },
//     {
//       id: 4,
//       name: "Men's Running Shoes",
//       mainImage: "path/to/main-image.jpg",
//       subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
//       sizes: [8, 9, 10, 11, 12],
//       type: "shoes",
//       price: 79.99,
//       description: "Lightweight and durable running shoes.",
//       category: "Men",
//       stock: 20,
//     },
//     // Add more products as needed
//   ],
//   Women: [
//     {
//       id: 5,
//       name: "Women's Knit Sweater",
//       mainImage: "path/to/main-image.jpg",
//       subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
//       sizes: ["S", "M", "L", "XL"],
//       type: "sweater",
//       price: 49.99,
//       description: "A cozy knit sweater for chilly days.",
//       category: "Women",
//       stock: 12,
//     },
//     {
//       id: 6,
//       name: "Women's High Heels",
//       mainImage: "path/to/main-image.jpg",
//       subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
//       sizes: [6, 7, 8, 9, 10],
//       type: "shoes",
//       price: 69.99,
//       description: "Elegant high heels for special occasions.",
//       category: "Women",
//       stock: 8,
//     },
//     // Add more products as needed
//   ],
//   Kids: [
//     {
//       id: 7,
//       name: "Kids' T-Shirt",
//       mainImage: "path/to/main-image.jpg",
//       subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
//       sizes: ["XS", "S", "M", "L"],
//       type: "t-shirt",
//       price: 19.99,
//       description: "A fun and colorful t-shirt for kids.",
//       category: "Kids",
//       stock: 25,
//     },
//     {
//       id: 8,
//       name: "Kids' Sneakers",
//       mainImage: "path/to/main-image.jpg",
//       subImages: ["path/to/sub-image1.jpg", "path/to/sub-image2.jpg"],
//       sizes: [1, 2, 3, 4, 5],
//       type: "shoes",
//       price: 29.99,
//       description: "Comfortable sneakers for active kids.",
//       category: "Kids",
//       stock: 30,
//     },
//     // Add more products as needed
//   ],
// };

// export default products;