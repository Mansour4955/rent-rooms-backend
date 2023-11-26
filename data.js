const cards = [
  {
    title: "White Villa",
    desc: "White villa in rabat, it is near of the beach",
    price: "50",
    country: "Morocco",
    category: "Villa",
    image:
      "https://images.adsttc.com/media/images/5f58/34e6/b357/6580/c200/035a/slideshow/00FI_IMG_0353-1.jpg",
  },
  {
    title: "Beautiful Riad",
    desc: "Beautiful Riad in marrakech, and we have many activvities to make you enjoy",
    price: "70",
    country: "Morocco",
    category: "Riad",
    image:
      "https://www.deedeeparis.com/blog/wp-content/uploads/2018/05/riad-marrakech.jpg",
  },
  {
    title: "Modern Villa",
    desc: "Modern Villa in Barcelona, and there are servants for your comfort",
    price: "105",
    country: "Spain",
    category: "Villa",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11172338/World%E2%80%99s-15-Most-Beautiful-Houses-That-Will-Leave-You-Awestruck-featured-shutterstock_1182743467-1200x700-compressed.jpg",
  },
  {
    title: "French Villa",
    desc: "French villa in France, it is near of the beach",
    price: "65",
    country: "France",
    category: "Villa",
    image: "https://mygate.com/wp-content/uploads/2023/07/110.jpg",
  },
  {
    title: "House",
    desc: "House in Spain, it is near the stadum",
    price: "35",
    country: "Spain",
    category: "House",
    image:
      "https://www.newshub.co.nz/home/travel/2018/07/global-competition-reveals-world-s-most-beautiful-houses/_jcr_content/par/image.dynimg.full.q75.jpg/v1532489408970/0_CATERS_HGTV_ULTIMATE_HOUSE_HUNT_FINALS_01-Hawaii+Life-1120.jpg",
  },
  {
    title: "French Apartment",
    desc: "French Apartment, it is near the Hospital",
    price: "25",
    country: "France",
    category: "Apartment",
    image:
      "https://netstorage-legit.akamaized.net/images/fd7e084d8493203a.jpg?",
  },
  {
    title: "Spanish House",
    desc: "House in Spain, it is near the stadum",
    price: "33",
    country: "Spain",
    category: "House",
    image:
      "https://www.homoq.com/wp-content/uploads/2017/07/top-10-most-beautiful-houses-in-the-world-720x400.jpg",
  },
  {
    title: "Moroccain Villa",
    desc: "This Villa is in Rabat, it is a good choice",
    price: "41",
    country: "Morocco",
    category: "Villa",
    image:
      "https://cdn.homedit.com/wp-content/uploads/2017/05/America-Most-Expensive-Bel-Air-Los-Angeles-Residence.jpg",
  },
  {
    title: "Riad in Morocco",
    desc: "Riad in Morocco, it is near the stadum",
    price: "45",
    country: "Morocco",
    category: "Riad",
    image:
      "https://devvlsnxxkrq9.cloudfront.net/prod/assets/_950xAUTO_crop_center-center_none/1654105/Miram-House-Barnet-Header-Image_2022-11-10-102451_skhi.webp",
  },
  {
    title: "Spanish House",
    desc: "House in Spain, it is near the stadum",
    price: "33",
    country: "Spain",
    category: "House",
    image:
      "https://devvlsnxxkrq9.cloudfront.net/prod/assets/_950xAUTO_crop_center-center_none/1654105/Miram-House-Barnet-Header-Image_2022-11-10-102451_skhi.webp",
  },

  {
    title: "White Villa",
    desc: "White villa in Barcelona, it is near of the beach",
    price: "25",
    country: "Spain",
    category: "Villa",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/366226917.jpg",
  },
  {
    title: "Beautiful Riad",
    desc: "Beautiful Riad in france, and we have many activvities to make you enjoy",
    price: "53",
    country: "France",
    category: "Riad",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359540284.jpg",
  },
  {
    title: "Modern House",
    desc: "Modern House in Sale, and there are servants for your comfort",
    price: "75",
    country: "Morocco",
    category: "House",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11172338/World%E2%80%99s-15-Most-Beautiful-Houses-That-Will-Leave-You-Awestruck-featured-shutterstock_1182743467-1200x700-compressed.jpg",
  },
  {
    title: "Moroccain Villa",
    desc: "Moroccain villa in Morocco, it is near of the beach",
    price: "21",
    country: "Morocco",
    category: "Riad",
    image: "https://mygate.com/wp-content/uploads/2023/07/110.jpg",
  },
  {
    title: "Hotel",
    desc: "House in France, it is near the stadum",
    price: "47",
    country: "France",
    category: "Hotel",
    image:
      "https://www.newshub.co.nz/home/travel/2018/07/global-competition-reveals-world-s-most-beautiful-houses/_jcr_content/par/image.dynimg.full.q75.jpg/v1532489408970/0_CATERS_HGTV_ULTIMATE_HOUSE_HUNT_FINALS_01-Hawaii+Life-1120.jpg",
  },
  {
    title: "Spanish Apartment",
    desc: "Spanish Apartment, it is near the Hospital",
    price: "27",
    country: "Spain",
    category: "Apartment",
    image:
      "https://netstorage-legit.akamaized.net/images/fd7e084d8493203a.jpg?",
  },
  {
    title: "French Apartment",
    desc: "House in France, it is near the stadum",
    price: "19",
    country: "France",
    category: "Apartment",
    image:
      "https://www.homoq.com/wp-content/uploads/2017/07/top-10-most-beautiful-houses-in-the-world-720x400.jpg",
  },
  {
    title: "French Hotel",
    desc: "This Hotel is in Paris, it is a good choice",
    price: "43",
    country: "France",
    category: "Hotel",
    image:
      "https://cdn.homedit.com/wp-content/uploads/2017/05/America-Most-Expensive-Bel-Air-Los-Angeles-Residence.jpg",
  },
  {
    title: "Riad in France",
    desc: "Riad in France, it is near the stadum",
    price: "52",
    country: "France",
    category: "Riad",
    image:
      "https://devvlsnxxkrq9.cloudfront.net/prod/assets/_950xAUTO_crop_center-center_none/1654105/Miram-House-Barnet-Header-Image_2022-11-10-102451_skhi.webp",
  },
  {
    title: "Moroccain House",
    desc: "House in Morocco, it is near the stadum",
    price: "12",
    country: "Morocco",
    category: "House",
    image:
      "https://devvlsnxxkrq9.cloudfront.net/prod/assets/_950xAUTO_crop_center-center_none/1654105/Miram-House-Barnet-Header-Image_2022-11-10-102451_skhi.webp",
  },
];
module.exports = {
  cards,
};
