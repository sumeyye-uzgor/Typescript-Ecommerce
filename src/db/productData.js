
const productData = [
    {
        id: 1,
        name: 'Brown Brim',
        image: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
        category: 'hats',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 2,
        name: 'Blue Beanie',
        image: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
        category: 'hats',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 3,
        name: 'Brown Cowboy',
        image: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
        category: 'hats',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 4,
        name: 'Grey Brim',
        image: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
        category: 'hats',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 5,
        name: 'Green Beanie',
        image: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
        category: 'hats',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 6,
        name: 'Palm Tree Cap',
        image: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
        category: 'hats',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 7,
        name: 'Red Beanie',
        image: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
        category: 'hats',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 8,
        name: 'Wolf Cap',
        image: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
        category: 'hats',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 9,
        name: 'Blue Snapback',
        image: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
        category: 'hats',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 10,
        name: 'Adidas NMD',
        image: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
        category: "sneakers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 11,
        name: 'Adidas Yeezy',
        image: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
        category: "sneakers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 12,
        name: 'Black Converse',
        image: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
        category: "sneakers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 13,
        name: 'Nike White AirForce',
        image: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
        category: "sneakers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 14,
        name: 'Nike Red High Tops',
        image: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
        category: "sneakers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 15,
        name: 'Nike Brown High Tops',
        image: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
        category: "sneakers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 16,
        name: 'Air Jordan Limited',
        image: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
        category: "sneakers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 17,
        name: 'Timberlands',
        image: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
        category: "sneakers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 18,
        name: 'Black Jean Shearling',
        image: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
        category: "jackets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 19,
        name: 'Blue Jean Jacket',
        image: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
        category: "jackets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 20,
        name: 'Grey Jean Jacket',
        image: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
        category: "jackets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 21,
        name: 'Brown Shearling',
        image: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
        category: "jackets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 22,
        name: 'Tan Trench',
        image: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
        category: "jackets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 23,
        name: 'Blue Tanktop',
        image: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
        category: "women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 24,
        name: 'Floral Blouse',
        image: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
        category: "women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 25,
        name: 'Floral Dress',
        image: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
        category: "women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 26,
        name: 'Red Dots Dress',
        image: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
        category: "women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 27,
        name: 'Striped Sweater',
        image: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
        category: "women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 28,
        name: 'Yellow Track Suit',
        image: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
        category: "women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 29,
        name: 'White Blouse',
        image: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
        category: "women",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 30,
        name: 'Camo Down Vest',
        image: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
        category: "men",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 31,
        name: 'Floral T-shirt',
        image: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
        category: "men",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 32,
        name: 'Black & White Longsleeve',
        image: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
        category: "men",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 33,
        name: 'Pink T-shirt',
        image: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
        category: "men",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 34,
        name: 'Jean Long Sleeve',
        image: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
        category: "men",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    },
    {
        id: 35,
        name: 'Burgundy T-shirt',
        image: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
        category: "men",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo lacus eget tincidunt cursus. Pellentesque commodo diam nec erat lacinia consectetur. Morbi tempus non nibh a iaculis. Fusce molestie at mi luctus tempor. Donec et nunc elementum, feugiat magna a."
    }
]


export default productData;
