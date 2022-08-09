//This is in the format our API data would be after initial destructuring (which would happen in getPlacesData.js)
// You can check the correctness of this format by comparing it to the console.dir in index.js
export const places = [
  {
    category: "restaurant",
    name: "The Breakfast Club Soho",
    rating: "5.0",
    photo:
      "https://thebreakfastclubcafes.com/wp-content/uploads/2019/10/Berwick-St-6.jpg",
    address: "12 Greek Street, W1 6KG",
    longitude: "-0.13521278619092814",
    latitude: "51.51226090514994",
      accessible: true,
      eye: true,
      hearing: true,
      brain: true,
    phone_number: "+44 (0) 9845754223",
    web_address: "www.breakfastclub.com",
    opening_times: "7am-7pm",
  },
  {
    category: "restaurant",
    name: "My Big Fat Greek Restaurant",
    rating: "4.0",
    photo:
      "https://www.mazi.co.uk/wp-content/uploads/2022/02/mazi-slider-01-scaled.jpg",
    address: "18 Poland Street, W1 2VH",
    longitude: "-0.13621278619092814",
    latitude: "51.51286090514994",
      accessible: true,
      eye: true,
      hearing: true,
      brain: false, 
    phone_number: "+44 (0) 9845754223",
    web_address: "www.greek.com",
    opening_times: "7am-7pm",
  },
  {
    category: "restaurant",
    name: "Luigi's Ristorantino",
    rating: "3.0",
    photo:
      "http://www.boccadilupo.com/images/home_image/large/bocca-di-lupo-home_image_image-154272912518571647.jpg",
    address: "420 Spaghetti Row, W1 6IT",
    longitude: "-0.13481278619092814",
    latitude: "51.51246090514994",

      accessible: true,
      eye: true,
      hearing: false,
      brain: false,

    phone_number: "+44 (0) 9845754223",
    web_address: "www.luigi.com",
    opening_times: "7am-7pm",
  },
  {
    category: "restaurant",
    name: "Katya's Stolovaya",
    rating: "2.0",
    photo:
      "https://static01.nyt.com/images/2019/12/15/travel/04moscow-restaurants-nostalgia14/merlin_164050035_f02f14a5-a9be-49bc-bea0-926aa064a13e-mobileMasterAt3x.jpg",
    address: "19/84 Orwell Street, W1 6CO",
    longitude: "-0.13321278619092814",
    latitude: "51.51226090514994",
      accessible: false,
      eye: false,
      hearing: false,
      brain: false,
    phone_number: "+44 (0) 9845754223",
    web_address: "www.katya.com",
    opening_times: "7am-7pm",
  },
  {
    category: "restaurant",
    name: "The Elevensies Club Soho",
    rating: "1.0",
    photo:
      "https://www.thespruceeats.com/thmb/1UnyPp_02WC5KjATQM-9-QAAKo4=/1885x1414/smart/filters:no_upscale()/Cream-tea-GettyImages-183814030-58c5ae3e3df78c353c570344.jpg",
    address: "12 Duke Street, W1 4RF",
    longitude: "-0.13421278619092814",
    latitude: "51.51026090514994",
      accessible: false,
      eye: false,
      hearing: false,
      brain: false,
    phone_number: "+44 (0) 9845754223",
    web_address: "www.breakfastclub.com",
    opening_times: "7am-7pm",
  },
  {
    category: "cinema",
    name: "Prince Charles Cinema",
    rating: "5.0",
    photo: "https://images.savoysystems.co.uk/PCH/9504007.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13042340946513464",
    latitude: "51.51184071143942",
      accessible: true,
      eye: true,
      hearing: true,
      brain: true,
    phone_number: "+44 (0) 9845754223",
    web_address: "www.princecharles.com",
    opening_times: "7am-7pm",
  },
  {
    category: "cinema",
    name: "Picturehouse Central",
    rating: "4.0",
    photo:
      "https://s3picturehouses.s3.eu-central-1.amazonaws.com/cinema/ph_15651810625d4ac486695e1.jpg",

    address:
      "Piccadilly Circus, Corner of Great Windmill Street and, Shaftesbury Ave, London W1D 7DH",

    longitude: "-0.1337454595132821",
    latitude: "51.510816147883446",
      accessible: true,
      eye: true,
      hearing: true,
      brain: false,
    phone_number: "+44 (0) 9372837291",
    web_address: "www.picturehousecentral.com",
    opening_times: "7am-9pm",
  },
  {
    category: "cinema",
    name: "Rio Cinema",
    rating: "2.0",
    photo:
      "https://images.squarespace-cdn.com/content/54f84e69e4b021b24483c6ef/1426513826276-B26Q5RJV1J9QR2YOP7N6/image-asset.jpeg?content-type=image%2Fjpeg",

    address: "99 Shaftesbury Ave, London W1D 5DY",
    longitude: "-0.1305654284984301",
    latitude: "51.512851727291334",
      accessible: true,
      eye: true,
      hearing: false,
      brain: false,
    phone_number: "+44 (0) 9473820988",
    web_address: "www.riocinema.com",
    opening_times: "7am-10pm",
  },
  {
    category: "cinema",
    name: "Curzon Mayfair",
    rating: "1.0",
    photo:
      "https://c8.alamy.com/comp/2CC0M9P/a-lone-woman-walks-past-he-curzon-mayfair-cinema-in-curzon-street-mayfair-london-england-uk-2CC0M9P.jpg",

    address: "14 D'Arblay St, London W1F 8DY",
    longitude: "-0.1364835015108443",
    latitude: "51.51471926727698",
      accessible: true,
      eye: false,
      hearing: false,
      brain: false,
    phone_number: "+44 (0) 9874449382",
    web_address: "www.curzonmayfair.com",
    opening_times: "7am-7pm",
  },
  {
    category: "cinema",
    name: "Cineworld Leicester Square",
    rating: "4.0",
    photo:
      "https://i2-prod.birminghammail.co.uk/incoming/article17247369.ece/ALTERNATES/s1200c/3_Broad-Street-roadworks.jpg",

    address: "17 Berwick St, London W1F 0PT",
    longitude: "-0.1346889861692242",
    latitude: "51.51377201661237",
      accessible: true,
      eye: true,
      hearing: true,
      brain: true,
    phone_number: "+44 (0) 9112283742",
    web_address: "www.cineworld.com",
    opening_times: "7am-5pm",
  },
  {
    category: "cinema",
    name: "Electric Cinema",
    rating: "3.0",
    photo:
      "https://lh5.googleusercontent.com/p/AF1QipPfGBw5lUaPbrobd3Hlu9lbKUGunHG4_J3VXFcz=w1920-h1080-k-no",

    address: "11/18 Panton St, London SW1Y 4DP",
    longitude: "-0.13128621685259437",
    latitude: "51.50971082851679",
      accessible: true,
      eye: true,
      hearing: true,
      brain: true,
    phone_number: "+44 (0) 9499327304",
    web_address: "www.electriccinema.com",
    opening_times: "7am-7pm",
  },
  {
    category: "shop",
    name: "The Monocle Shop",
    rating: "5.0",
    photo:
      "https://www.hipshops.com/img/shopPhotos/333/2.jpeg",

    address: "34 Chiltern St, London W1U 7QH",
    longitude: "-0.154891203358562",
    latitude: "51.51913678809084",
      accessible: true,
      eye: true,
      hearing: false,
      brain: false,
    phone_number: "020 7486 8770",
    web_address: "https://monocle.com/shop/",
    opening_times: "11am-7pm",
  },
  {
    category: "shop",
    name: "Liberty London",
    rating: "4.0",
    photo:
      "https://d53bpfpeyyyn7.cloudfront.net/Pictures/380x253/9/1/8/3079918_libertyoflondon_925602_crop.jpg",

    address: "Regent St., Carnaby, London W1B 5AH",
    longitude: "-0.1401228705907921",
    latitude: "51.513945059519074",
      accessible: true,
      eye: true,
      hearing: true,
      brain: false,
    phone_number: "020 3893 3062",
    web_address: "https://www.libertylondon.com/",
    opening_times: "10am-7pm",
  },
  {
    category: "shop",
    name: "Disney Store",
    rating: "3.0",
    photo:
      "https://media.nbcchicago.com/2021/03/disney-store-generica.jpg?quality=85&strip=all&crop&resize=1200%2C675",

    address: "350-352 Oxford St, London W1C 1JH",
    longitude: "-0.14834630151083233",
    latitude: "51.51481899708076",
      accessible: true,
      eye: true,
      hearing: true,
      brain: true,
    phone_number: "020 7491 9136",
    web_address: "https://www.shopdisney.co.uk/",
    opening_times: "9am-10pm",
  },
  {
    category: "shop",
    name: "National Gallery Shop",
    rating: "2.0",
    photo:
      "https://www.nationalgallery.org.uk/media/29323/shopping-feature-page-header.gif",

    address: "National Gallery, London WC2N 5DN",
    longitude: " -0.13005764175658302",
    latitude: "51.50862555612391",
      accessible: true,
      eye: true,
      hearing: false,
      brain: false,
    phone_number: "020 7747 2870",
    web_address: "https://shop.nationalgallery.org.uk/",
    opening_times: "10am-6pm",
  },
  {
    category: "shop",
    name: "Whole Foods Market",
    rating: "1.0",
    photo:
      "https://media.timeout.com/images/103584667/1372/772/image.jpg",

    address: "20 Glasshouse St, London W1B 5AR",
    longitude: "-0.13618508801715443",
    latitude: "51.51071162558321",
    acessibility: {
      accessible: true,
      eye: true,
      hearing: false,
      brain: false,
      other1: null,
      other2: null,
    },
    phone_number: "020 7406 3100",
    web_address: "https://www.wholefoodsmarket.co.uk/stores/piccadilly/",
    opening_times: "8am-10pm",
  },
  {
    category: "gym",
    name: "Alpha Lobster Gym",
    rating: "5.0",
    photo:
      "https://www.firmdalehotels.com/media/863517/0166-sh-gym.jpg?a=1&anchor=center&mode=crop&width=1596&height=1088&bgcolor=fff&sig=2491ab2ab237c0021a1dadf66ff4295e",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13119588562767506",
    latitude: "51.51683492491375",
      accessible: true,
      eye: true,
      hearing: true,
      brain: true,
    phone_number: "+44 (0) 9845754223",
    web_address: "www.all-hail-the-lobster.com",
    opening_times: "7am-7pm",
  },
  {
    category: "gym",
    name: "PureGym London Borough",
    rating: "4.0",
    photo:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pure-gym-in-lewisham-seen-with-shut-doors-gyms-indoors-news-photo-1613991986.?crop=1xw:0.74963xh;center,top&resize=1200:*",

    address: "13-16, Empire Square West, Long Ln, London SE1 4NA",
    longitude: "-0.0907702865000979",
    latitude: "51.50074553962888",
      accessible: true,
      eye: true,
      hearing: true,
      brain: false,
    phone_number: "+44 (0) 9488525573",
    web_address: "www.puregym.com",
    opening_times: "7am-7pm",
  },
  {
    category: "gym",
    name: "The Gym Group London Waterloo",
    rating: "2.0",
    photo:
      "https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-Basildon-Entrance?fmt=auto&h=250&w=412&sm=c&qlt=default&$qlt$&$poi$",

    address: "195-203 Waterloo Rd, Baron's Pl, London SE1 8UX",
    longitude: "-0.10698782773308783",
    latitude: "51.50100720425664",
      accessible: true,
      eye: false,
      hearing: true,
      brain: false,
    phone_number: "+44 (0) 9890078921",
    web_address: "thegymgroup",
    opening_times: "7am-11pm",
  },
  {
    category: "gym",
    name: "King's Sport - London Bridge Gym",
    rating: "1.0",
    photo:
      "https://www.kcl.ac.uk/newimages/sport/featureimages/gds-feature.png",
    address: "135 Borough High St, London SE1 1NP",
    longitude: "-0.08928129869433117",
    latitude: "51.503993178313614",
      accessible: true,
      eye: false,
      hearing: false,
      brain: false,
    phone_number: "+44 (0) 9213544278",
    web_address: "www.kings-sport.com",
    opening_times: "7am-1am",
  },
  {
    category: "gym",
    name: "CrossFit Central London",
    rating: "3.0",
    photo: "https://img.grouponcdn.com/deal/4YfqedHvgywidijhgqGh/eT-1000x600/v1/t600x362.jpg",
    address: "56, 57 Ewer St, London SE1 0NR",
    longitude: "-0.09915182744825717",
    latitude: "51.50460757520947",
      accessible: true,
      eye: false,
      hearing: true,
      brain: false,
    phone_number: "+44 (0) 9235647564",
    web_address: "www.cross-fit-central-london.com",
    opening_times: "7am-10pm",
  },
  {
    category: "gym",
    name: "Fitness First London Bridge (The Shard)",
    rating: "2.0",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWCzheZsdVQY8qs_Mtx5p1TYUUthRQU0AWQ&usqp=CAU",
    address:
      "Bridge Hotel, Basement Level, 8-18 London Bridge St, London SE1 9SG",
    longitude: "-0.08799383842212893",
    latitude: "51.505996615916146",
      accessible: true,
      eye: false,
      hearing: true,
      brain: false,
    phone_number: "+44 (0) 9564475632",
    web_address: "www.firtnessfirst.com",
    opening_times: "7am-11pm",
  },
  {
    category: "cafe",
    name: "Ace Cafe London",
    rating: "5.0",
    photo: 'https://www.bikesure.co.uk/bikesureblog/wp-content/uploads/2018/06/unnamed.jpg',
    address: "17 Berwick St, London W1F 0PT",
    longitude: "-0.1338628658429789",
    latitude: "51.51371860186969",
      accessible: true,
      eye: true,
      hearing: true,
      brain: true,
    phone_number: "020 8961 1000",
    web_address: "https://london.acecafe.com/",
    opening_times: "8am-10:30pm",
  },
  {
    category: "cafe",
    name: "Caffè Tropea",
    rating: "4.0",
    photo: 'https://www.euansguide.com/remote.axd/nucleusimagery.blob.core.windows.net%2flive%2f1753051f-8a71-4a15-b538-76ba7cd346a2?width=840&height=378&mode=crop',
    address: "3 Green's Ct, London W1F 0HD",
    longitude: "-0.13453641870033906",
    latitude: " 51.51264477396607",
      accessible: true,
      eye: true,
      hearing: true,
      brain: false,
    phone_number: "020 7637 5093",
    web_address: "https://caffetropea.co.uk/",
    opening_times: "7am-6pm",
  },
  {
    category: "cafe",
    name: "Lilly's cafe",
    rating: "3.0",
    photo:'https://eqtrneuprod01coventsa.blob.core.windows.net/cache/3/2/4/2/d/f/3242dfdd1bc43cfb68d0476a6cfb4f04ed2f4d58.webp',
    address: "3 Henrietta St, London WC2E 8LU",
    longitude: "-0.12288749966307208",
    latitude: " 51.51144940062013",
      accessible: true,
      eye: true,
      hearing: false,
      brain: false,
    phone_number: "020 3325 5275",
    web_address: "https://lillys-cafe.com/",
    opening_times: "9am-10pm",
  },
  {
    category: "cafe",
    name: "Caffè Concerto ",
    rating: "2.0",
    photo: "https://www.caffeconcerto.co.uk/images-branches/kings-2-jpg_1465827697.jpg",
    address: "34 Old Compton St, London W1D 4TS",
    longitude: "-0.13113938801707892",
    latitude: "51.513520548040034",
      accessible: true,
      eye: true,
      hearing: true,
      brain: false,
    phone_number: "020 7494 6856",
    web_address: "https://www.caffeconcerto.co.uk/restaurants/",
    opening_times: "7am-11pm",
  },
  {
    category: "cafe",
    name: "Starbucks",
    rating: "1.0",
    photo: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/70/49/00/starbucks-oxford-road.jpg',

    address: "G13, 381 Oxford St, London W1C 2JS",
    longitude: "-0.14852962536166095",
    latitude: "51.51426534836615",
      accessible: false,
      eye: true,
      hearing: false,
      brain: false,
    phone_number: "020 7629 5404",
    web_address: "https://www.starbucks.co.uk/",
    opening_times: "7am-8pm",
  },
];

/*Big card (master template):
-Name ✅ 
-Category (cinema, restaurant, gym, shop, café) ✅ 
- Street address (with postcode) ✅ 
-Accessibility badges (step-free, braille, sing_language, quiet_space) ✅ 
-Accesibility labels (one for each badge) ✅ 
-phone number ✅
-web address ✅
-opening times ✅
-picture ✅ */
