const guppies = [
  {
    id: 1,
    name: "Purple Berry Dragon",
    type: "Dragon",
    img: "/images/bluedragon/g.jpg",
    images: [
      "/images/bluedragon/bluedragon.jpg",
      "/images/bluedragon/bluedragon2.jpg",
    ],
    videos: ["/images/bluedragon/bluevideo.mp4", "/images/bluedragon/blud.mp4"],
    description:
      "Beautiful Blue Dragon ,Quality is good .Minimum quantity of 2 pair required to place order.",
    price: "₹150",
    delivery: "Delivery available in kannyakumari",
    stock: false,
  },
  {
    id: 2,
    name: "Red Dragon",
    type: "Dragon",
    price: "₹200",
    img: "/images/reddragon/reddragon.jpeg",
    images: [
      "/images/reddragon/reddragon.jpeg",
      "/images/reddragon/reddragon2.jpeg",
    ],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 3,
    name: "Platinum Redtail Dumbo Ear",
    type: "Dumbo ear",
    price: "₹150",
    img: "/images/dumboear/dumbo2.jpeg",
    images: [
      "/images/dumboear/dumboear.jpeg",
      "/images/dumboear/dumboear2.jpeg",
    ],
    videos: ["/images/dumboear/dumboear.mp4", "/images/dumboear/dumboear2.mp4"],
    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 4,
    name: "Platinum Koi Dumbo Ear",
    type: "Koi",
    price: "₹200",
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

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 5,
    name: "Dark Knight Dragon",
    type: "Dragon",
    price: "₹200",
    img: "/images/darkknight/knight2.jpeg",
    images: ["/images/darkknight/dark.jpeg", "/images/darkknight/dark2.jpeg"],
    videos: [
      "/images/darkknight/darkknight2.mp4",
      "/images/darkknight/darkknight3.mp4",
    ],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 6,
    name: "Albino Platinum White",
    type: "Albino",
    price: "₹80",
    img: "/images/platinumwhite/platwhite2.jpeg",
    images: [
      "/images/platinumwhite/platwhite.jpeg",
      "/images/platinumwhite/platwhite2.jpeg",
    ],

    description: "A nice quality Platinum White Albino type guppy.",
    delivery:
      "Delivery available all over Tamil Nadu.you will be charge ₹80 for delivery.",
    requirements:
      "You need Minimum 2 pair to place order.₹80 will be charged only once, even if you select more than one fish or other type fish No additional ₹80 for the second or third fish.",
    stock: true,
  },
  {
    id: 7,
    name: "Tuxedo Koi",
    type: "Koi",
    price: "₹200",
    img: "/images/koi/texudo7.jpeg",
    images: [
      "/images/koi/texkoi2.jpeg",
      "/images/koi/texkoi3.jpeg",
      "/images/koi/texkoi1.jpeg",
    ],
    videos: ["/images/koi/koi.mp4", "/images/koi/koi3.mp4"],
    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 8,
    name: "Chilli mosaic dumbo ear",
    type: "dumboear",
    price: "₹200",
    img: "/images/chilli/chilli4.jpeg",
    images: [
      "/images/chilli/chilli1.jpeg",
      "/images/chilli/chilli2.jpeg",
      "/images/chilli/chilli3.jpeg",
    ],
    videos: ["/images/chilli/chilli4.mp4", "/images/chilli/chilli3.mp4"],
    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 9,
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
      "A bright red texudo guppy easy to maintain but sensitive to water tempratures.",
    delivery:
      "Delivery available all over Tamil Nadu.You will be charged ₹80 for delivery",
    requirements:
      "₹80 will be charged only once, even if you select more than one fish or other type fish No additional ₹80 for the second or third fish.",

    stock: true,
  },
  {
    id: 10,
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
    id: 11,
    name: "Topaz Blue",
    type: "Albino",
    price: "₹80",
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
    delivery:
      "Delivery available all over Tamil Nadu.You will be charged ₹80 for delivery",
    requirements:
      "You need Minimum 2 pair to place order.₹80 will be charged only once, even if you select more than one fish or other type fish No additional ₹90 for the second or third fish.",
    stock: true,
  },
  {
    id: 12,
    name: "Red Lace",
    type: "",
    price: "₹60",
    img: "/images/redlace/redl.jpeg",
    images: [
      "/images/redlace/redlace3.jpeg",
      "/images/redlace/redlace2.jpeg",
      "/images/redlace/redlace.jpeg",
    ],
    videos: ["/images/redlace/redlace.mp4", "/images/redlace/redlace2.mp4"],
    description:
      "A bright Red Lace with premium quality.You will get 2 male and 4 females in 2 pair pack.It is not that sensitive and best for begineers",
    delivery:
      "Delivery available all over Tamil Nadu.You will be charged ₹80 for delivery",
    requirements:
      "You need Minimum 2 pair to place order.₹80 will be charged only once, even if you select more than one fish or other type fish No additional ₹90 for the second or third fish.",
    stock: true,
  },
  {
    id: 13,
    name: "Moscow Blue",
    type: "",
    price: "₹200",
    img: "/images/moscow/moscow.jpeg",
    images: [
      "/images/moscow/moscow.jpeg",
      "/images/moscow/moscow2.jpeg",
      "/images/moscow/moscow2.jpeg",
    ],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 14,
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
    id: 15,
    name: "Metal Red Rose",
    type: "",
    price: "₹200",
    img: "/images/metal/metal.jpeg",
    images: [
      "/images/metal/metal.jpeg",
      "/images/metal/metal.jpeg",
      "/images/metal/metal.jpeg",
    ],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 16,
    name: "Albino Red lace",
    type: "",
    price: "₹200",
    img: "/images/albredl/albredl1.jpeg",
    images: [
      "/images/albredl/albredl1.jpeg",
      "/images/albredl/albredl1.jpeg",
      "/images/albredl/albredl1.jpeg",
    ],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
  {
    id: 17,
    name: "Non Cap Koi",
    type: "",
    price: "₹200",
    img: "/images/noncap/plats.jpg",
    images: ["/images/noncap/platsjpg", "/images/noncap/platsjpg"],

    description: "A bright red dragon guppy. Keep in 20-25°C water.",
    delivery: "out of stock",
    stock: false,
  },
];

export default guppies;
