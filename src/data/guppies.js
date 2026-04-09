const guppies = [
  {
    id: 1,
    name: "Purple berry Dragon",
    type: "Dragon",
    img: "/images/bluedragon/purple.jpeg",
    images: [
      "/images/bluedragon/purple.jpeg",
      "/images/bluedragon/purple2.jpeg",
      "/images/bluedragon/purple3.jpeg",
    ],
    videos: ["/images/bluedragon/bluevideo.mp4", "/images/bluedragon/blud.mp4"],
    description:
      "Beautiful Blue Dragon ,Quality is good .The price mentioned is for 1 pair",
    price: "₹90",
    delivery: "Delivery available all over Tamilnadu",
    stock: true,
  },
  {
    id: 2,
    name: "Albino Red Lace",
    type: "Dragon",
    price: "₹200",
    img: "/images/alb/alb.jpeg",
    images: ["/images/alb/alb.jpeg", "/images/alb/alb.jpeg"],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 3,
    name: "Platinum Redtail Dumbo Ear",
    type: "Dumbo ear",
    price: "₹100",
    img: "/images/dumboear/dumbo2.jpeg",
    images: [
      "/images/dumboear/dumboear.jpeg",
      "/images/dumboear/dumboear2.jpeg",
    ],
    videos: ["/images/dumboear/dumboear.mp4", "/images/dumboear/dumboear2.mp4"],
    description:
      "A bright red dragon guppy. Keep in 20-25°C water.Price mentioned is for 1 pair guppy",
    delivery: "shipping available all over Tamilnadu",

    stock: true,
  },
  {
    id: 4,
    name: "Platinum Koi Dumbo Ear",
    type: "Koi",
    price: "₹100",
    img: "/images/platinumkoi/plats.jpg",
    images: [
      "/images/platinumkoi/pltkoi.jpeg",
      "/images/platinumkoi/pltkoi2.jpeg",
    ],
    videos: [
      "/images/platinumkoi/redkoi3.mp4",
      "/images/platinumkoi/platinumkoi2.mp4",
      "/images/platinumkoi/platinumkoi3.mp4",
    ],

    description:
      "A bright red dragon guppy. Keep in 20-25°C water.price mentioned is for 1 pair",
    delivery: "Available All over Tamilnadu",
    stock: true,
  },

  {
    id: 5,
    name: "Albino Platinum White",
    type: "Albino",
    price: "₹90",
    img: "/images/platinumwhite/platwhite2.jpeg",
    images: [
      "/images/platinumwhite/platwhite.jpeg",
      "/images/platinumwhite/platwhite2.jpeg",
    ],

    description: "A nice quality Platinum White Albino type guppy.",
    delivery: "Available all over Tamilnadu",
    requirements: "You need Minimum 2 pair to place order",
    stock: true,
  },
  {
    id: 6,
    name: "Tuxedo Koi",
    type: "Koi",
    price: "₹100",
    img: "/images/koi/texudo7.jpeg",
    images: [
      "/images/koi/texkoi2.jpeg",
      "/images/koi/texkoi3.jpeg",
      "/images/koi/texkoi1.jpeg",
    ],
    videos: ["/images/koi/koi.mp4", "/images/koi/koi3.mp4"],
    description:
      "A bright red dragon guppy. Keep in 20-25°C water.Price mentioned is for 1 pair guppy",
    delivery: "Delivery available all over Tamilnadu",
    stock: true,
  },

  {
    id: 7,
    name: "Red Texudo Dumbo Ear",
    type: "Dumbo ear",
    price: "₹100",
    img: "/images/redtex/redtex4.jpeg",
    images: [
      "/images/redtex/reddumbo.jpg",
      "/images/redtex/reddumbo3.jpg",
      "/images/redtex/reddumbo2.jpg",
    ],
    videos: ["/images/redtex/reddumbo.mp4", "/images/redtex/reddumbo2.mp4"],

    description:
      "A bright red texudo guppy easy to maintain but sensitive to wateer tempratures.Price mentioned is for 1 pair",
    delivery: "Delivery available all over Tamilnadu",
    requirements: "only 1 pair available",
    stock: false,
  },
  {
    id: 8,
    name: "AFR flower dorsal big body",
    type: "Albino",
    price: "₹200",
    img: "/images/afr/afr1.jpeg",
    images: ["/images/afr/afr1.jpeg"],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 9,
    name: "Topaz Blue",
    type: "Albino",
    price: "₹120",
    img: "/images/topazblue/top.jpeg",
    images: [
      "/images/topazblue/topaz2.jpeg",
      "/images/topazblue/topaz.jpeg",
      "/images/topazblue/topaz3.jpeg",
      "/images/topazblue/topaz4.jpeg",
      "/images/topazblue/topaz5.jpeg",
    ],
    videos: [
      "/images/topazblue/topaz.mp4",
      "/images/topazblue/topaz2.mp4",
      "/images/topazblue/topaz3.mp4",
      "/images/topazblue/topaz4.mp4",
    ],
    description:
      "Topaz blue it shines blue when a light hit on it.Sensitive to water temperatures.",
    delivery: "Delivery available all over Tamilnadu",
    requirements: "You need Minimum 2 pair to place order",
    stock: true,
  },

  {
    id: 10,
    name: "Moscow Blue",
    type: "",
    price: "₹100",
    img: "/images/moscow/moscow.jpeg",
    images: [
      "/images/moscow/moscow.jpeg",
      "/images/moscow/moscow2.jpeg",
      "/images/moscow/moscow2.jpeg",
    ],

    description: "A bright moscow blue guppy. Keep in 20-25°C water.",
    delivery: "All over Tamil nadu shipping possible",
    stock: true,
  },
  {
    id: 11,
    name: "Full Gold",
    type: "",
    price: "₹200",
    img: "/images/gold/gold.jpeg",
    images: [
      "/images/gold/gold.jpeg",
      "/images/gold/fullgold.jpeg",
      "/images/gold/gold.jpeg",
    ],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },

  {
    id: 12,
    name: "Albino red ear koi",
    type: "",
    price: "₹200",
    img: "/images/redearkoi/redearkoi.jpeg",
    images: [
      "/images/redearkoi/redearkoi.jpeg",
      "/images/redearkoi/redearkoi2.jpeg",
    ],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 13,
    name: "platinum koi dumbo ear c fin ribbon",
    type: "",
    price: "₹200",
    img: "/images/pltcfin/pltrib.jpeg",
    images: ["/images/pltcfin/pltrib.jpeg", "/images/pltcfin/pltrib.jpeg"],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 14,
    name: "platinum blue dragon dumbo ear",
    type: "",
    price: "₹200",
    img: "/images/pltblued/pltdb.jpeg",
    images: ["/images/pltblued/pltdb.jpeg", "/images/pltblued/pltdb.jpeg"],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },

  {
    id: 15,
    name: "wild koi super short body",
    type: "",
    price: "₹200",
    img: "/images/wild/wild.jpeg",
    images: ["/images/wild/wild.jpeg", "/images/wild/wild.jpeg"],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 16,
    name: "Blue panda c fin ribbon",
    type: "",
    price: "₹200",
    img: "/images/bluepri/bluepan.jpeg",
    images: ["/images/bluepri/bluepan.jpeg", "/images/bluepri/bluepan.jpeg"],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 17,
    name: "Albino Full red purple ear",
    type: "",
    price: "₹200",
    img: "/images/albpurpleear/albredp.jpeg",
    images: [
      "/images/albpurpleear/albredp.jpeg",
      "/images/albpurpleear/albredp.jpeg",
    ],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 18,
    name: "Albino Full red Ribbon",
    type: "",
    price: "₹200",
    img: "/images/afrribbon/ribbon.jpeg",
    images: ["/images/afrribbon/ribbon.jpeg", "/images/afrribbon/ribbon.jpeg"],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
];

export default guppies;
