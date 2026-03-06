// data/products.js

const SEEDS = {
  Electronics:[
    {b:'Apple',     items:['iPhone 15','iPhone 15 Pro','iPhone 14','iPhone 13','iPad Air M2','iPad Pro 12.9"','MacBook Air M3','MacBook Pro 14" M3','Apple Watch Series 9','AirPods Pro 2nd Gen','AirPods 3rd Gen','Apple TV 4K'],   emoji:'📱', mrpRange:[6999,279900]},
    {b:'Samsung',   items:['Galaxy S24 Ultra','Galaxy S24+','Galaxy S23 FE','Galaxy A54','Galaxy Tab S9','Galaxy Watch 6','55" 4K QLED TV','65" OLED TV','Galaxy Buds 2 Pro','Galaxy Fold 5'],   emoji:'📱', mrpRange:[9999,199900]},
    {b:'OnePlus',   items:['12 5G','Nord CE 3','11R 5G','Open Foldable','Buds Z2','Nord Buds 2','Watch 2'], emoji:'📱', mrpRange:[3999,139900]},
    {b:'Sony',      items:['WH-1000XM5','WF-1000XM5','WH-XB910N','PlayStation 5 Slim','PS5 Digital Edition','Bravia 55" 4K','Alpha 7C II Camera','ZV-E10 Camera'], emoji:'🎧', mrpRange:[4999,189900]},
    {b:'Bose',      items:['QuietComfort 45','QuietComfort Earbuds 2','SoundLink Flex','SoundLink Mini II'], emoji:'🎧', mrpRange:[8999,39900]},
    {b:'boAt',      items:['Airdopes 141','Airdopes 411','Rockerz 450','Wave Sigma','Storm Pro Watch','Bassheads 242'], emoji:'🎧', mrpRange:[599,5999]},
    {b:'Dell',      items:['XPS 15','Inspiron 15','Vostro 14','G15 Gaming Laptop','UltraSharp 27" Monitor'], emoji:'💻', mrpRange:[34999,189900]},
    {b:'HP',        items:['Pavilion 15','Omen 16 Gaming','Spectre x360','EliteBook 840 G10'], emoji:'💻', mrpRange:[39999,199900]},
    {b:'Canon',     items:['EOS R50','EOS R8','EOS 250D','Pixma MG3620 Printer','EOS R100'], emoji:'📷', mrpRange:[14999,129900]},
    {b:'Asus',      items:['ROG Strix G15','VivoBook 15','ZenBook 14','ROG Ally Gaming Handheld'], emoji:'💻', mrpRange:[29999,149900]},
  ],
  Fashion:[
    {b:'Nike',      items:['Air Max 270','Air Force 1','React Infinity Run','Dri-FIT T-Shirt','Pro Training Shorts','Windrunner Jacket','Air Zoom Pegasus 40','Tanjun Casual'], emoji:'👟', mrpRange:[1999,22999]},
    {b:'Adidas',    items:['Ultraboost 22','NMD R1','Stan Smith','Forum 84','Tiro 23 Tracksuit','Squadra T-Shirt','Terrex Free Hiker'], emoji:'👟', mrpRange:[2499,19999]},
    {b:'Puma',      items:['RS-X3','Suede Classic','Softride Run','ESS Logo Tee','Training Shorts','Bmw Motorsport Jacket'], emoji:'👟', mrpRange:[1499,12999]},
    {b:"Levi's",    items:['511 Slim Jeans','502 Taper Fit','501 Original','Trucker Jacket','Barstow Western Shirt','Tapered Chinos'], emoji:'👖', mrpRange:[1999,8999]},
    {b:'H&M',       items:['Floral Midi Dress','Wide-Leg Trousers','Oversized Blazer','Ribbed Polo','Linen Blend Shirt','Printed Wrap Dress'], emoji:'👗', mrpRange:[999,5999]},
    {b:'Zara',      items:['Straight Leg Jeans','Asymmetric Mini Dress','Wool Blend Coat','Ribbed Knit Sweater','Leather Ankle Boots'], emoji:'👗', mrpRange:[1999,12999]},
    {b:'Allen Solly',items:['Formal Shirt','Slim Fit Chinos','Striped Polo','Casual Blazer','Formal Trousers'], emoji:'👔', mrpRange:[1299,6999]},
    {b:'Fabindia',  items:['Kurta Set','Cotton Saree','Block Print Dupatta','Handloom Cushion','Kantha Jacket'], emoji:'👗', mrpRange:[799,8999]},
  ],
  'Home & Kitchen':[
    {b:'Instant Pot',items:['Duo 7-in-1 6L','Duo Crisp 11-in-1','Pro Plus 10-in-1','Duo Mini 3L','Viva 6L'], emoji:'🍳', mrpRange:[7999,24999]},
    {b:'Philips',   items:['Air Fryer 2.4L','Hand Blender','Citrus Press','Coffee Maker','Garment Steamer','LED Desk Lamp'], emoji:'🏠', mrpRange:[1499,12999]},
    {b:'Dyson',     items:['V11 Cordless Vacuum','V8 Absolute','Airwrap Styler','SuperSonic Dryer','TP07 Air Purifier'], emoji:'🧹', mrpRange:[19999,64900]},
    {b:'Prestige',  items:['Pressure Cooker 5L','Induction Cooktop','Non-Stick Cookware Set','Electric Kettle','Mixer Grinder'], emoji:'🍳', mrpRange:[999,9999]},
    {b:'IKEA',      items:['KALLAX Shelf Unit','BILLY Bookcase','LACK Coffee Table','POÄNG Armchair','HEMNES Daybed'], emoji:'🛋️', mrpRange:[2999,34999]},
    {b:'Godrej',    items:['Refrigerator 261L','Washing Machine 7kg','Microwave 23L','Air Conditioner 1.5T'], emoji:'🏠', mrpRange:[14999,59999]},
    {b:'Pigeon',    items:['Pressure Cooker 3L','Induction Base Kadai','Mixer Grinder 750W','Electric Kettle 1.5L'], emoji:'🍳', mrpRange:[799,5999]},
  ],
  Beauty:[
    {b:'Lakme',     items:['Absolute Matte Lipstick','9 to 5 Foundation','Cushion Matte Compact','Eyeconic Kajal','True Wear Foundation','Color Crush Eyeshadow'], emoji:'💄', mrpRange:[249,1499]},
    {b:'Mamaearth', items:['Vitamin C Serum 30ml','Onion Hair Oil 250ml','Ubtan Face Mask','Retinol Night Cream','Turmeric Sunscreen'], emoji:'💊', mrpRange:[299,999]},
    {b:'Forest Essentials',items:['Sandalwood Soap','Almond & Rose Sugar Scrub','Facial Tonic Mist','Hair Cleanser Shikakai'], emoji:'🌿', mrpRange:[499,2999]},
    {b:'Nykaa Beauty',items:['Matte-iful Pro Lipstick','Eyes On Me Kajal','SKINgenius Foundation','Wanderlust Body Lotion'], emoji:'💄', mrpRange:[299,1299]},
    {b:'Biotique',  items:['Bio Papaya Face Wash','Bio Almond Underarm Roll-On','Bio Wheat Germ Age Repair Cream'], emoji:'🌿', mrpRange:[149,699]},
    {b:"L'Oreal",   items:['Revitalift Serum','True Match Foundation','Elvive Shampoo','Men Expert Moisturiser','Extraordinary Oil'], emoji:'💊', mrpRange:[299,2499]},
    {b:'Himalaya',  items:['Neem Face Wash','Protein Hair Cream','Soothing & Moisturizing Lip Balm','Oil Clear Lemon Face Wash'], emoji:'🌿', mrpRange:[99,499]},
  ],
  Sports:[
    {b:'Decathlon', items:['Kiprun KS500 Running Shoes','300 Fitness T-Shirt','Swimming Goggles','Trek 100 Hiking Shoes','Essential Yoga Mat','Domyos 500 Dumbbell Set','FB100 Football'], emoji:'⚽', mrpRange:[299,9999]},
    {b:'Nivia',     items:['Dominator Basketball','Storm Football','Pro Cricket Bat','Carbonite Web Badminton Racket','Encounter 2 Sport Shoes'], emoji:'🏀', mrpRange:[399,7999]},
    {b:'Cosco',     items:['Meteor Plus Table Tennis Set','Pivot Badminton Racket','Speed Tennis Racket','Volleyball','Basketball Size 7'], emoji:'🏸', mrpRange:[299,4999]},
    {b:'Reebok',    items:['Nano X3 Cross Trainer','Floatride Energy 5','Zig Dynamica 4','Classic Leather Shoes'], emoji:'👟', mrpRange:[2999,14999]},
    {b:'Under Armour',items:['HOVR Machina 3','Project Rock 4','UA Tech 2.0 T-Shirt','Threadborne Seamless Legging'], emoji:'🏃', mrpRange:[1999,16999]},
  ],
  Books:[
    {b:'Penguin',   items:['Atomic Habits','The Psychology of Money','Ikigai','Rich Dad Poor Dad','Sapiens','The Alchemist','Zero to One','Deep Work'], emoji:'📚', mrpRange:[199,799]},
    {b:'HarperCollins',items:['The 48 Laws of Power','Educated','The Subtle Art of Not Giving a F*ck','Why We Sleep','Thinking Fast and Slow'], emoji:'📖', mrpRange:[249,699]},
    {b:'Scholastic', items:['Harry Potter Box Set','Percy Jackson Series','Diary of a Wimpy Kid Set','Goosebumps Collection'], emoji:'📚', mrpRange:[599,4999]},
    {b:'Westland',  items:['The 3 Mistakes of My Life','Five Point Someone','Half Girlfriend','2 States','Revolution 2020'], emoji:'📖', mrpRange:[199,499]},
  ],
  Toys:[
    {b:'LEGO',      items:['Technic Bugatti Chiron','City Police Station','Classic Creative Brick Box','Star Wars Millennium Falcon','Botanical Collection Bonsai Tree'], emoji:'🧩', mrpRange:[1499,49999]},
    {b:'Fisher-Price',items:['3-in-1 Sit-to-Stand','Rock-A-Stack Rings','Laugh & Learn Smart Stages','Linkimals Cool Beats Penguin'], emoji:'🧸', mrpRange:[799,4999]},
    {b:'Hot Wheels', items:['Ultimate Garage Playset','Track Builder Unlimited','20-Car Gift Pack','Monster Trucks Mayhem'], emoji:'🚗', mrpRange:[499,3999]},
    {b:'Funskool',  items:['Chess Board Game','Scrabble','UNO Card Game','Monopoly India','Carrom Board 24"'], emoji:'♟️', mrpRange:[299,2999]},
    {b:'Barbie',    items:['Dreamhouse','Careers Doll Set','Color Reveal Doll','Extra Doll 26 Accessories'], emoji:'🪆', mrpRange:[799,9999]},
  ],
  Grocery:[
    {b:'Tata',      items:['Tata Tea Premium 500g','Tata Salt 1kg','Tata Sampann Dal 500g','Tata Soulfull Millet Muesli'], emoji:'🛒', mrpRange:[49,499]},
    {b:'Amul',      items:['Amul Butter 500g','Amul Gold Milk 1L','Amul Cheese Slices 750g','Amul Ghee 1L','Amul Taaza Milk 500ml'], emoji:'🧈', mrpRange:[29,699]},
    {b:'Patanjali', items:['Desi Ghee 1L','Aloe Vera Juice 1L','Chyawanprash 1kg','Honey 500g','Atta 5kg'], emoji:'🌾', mrpRange:[49,599]},
    {b:'Nestle',    items:['KitKat Bulk Pack','Munch 20-Pack','Maggi 2-Minute Noodles 12-Pack','MILO Chocolate Drink Powder','KitKat Senses'], emoji:'🍫', mrpRange:[49,799]},
  ],
  Gaming:[
    {b:'Sony',      items:['PlayStation 5 Slim','PS5 Digital Edition','DualSense Controller','PlayStation VR2','PlayStation 5 Spider-Man 2 Bundle'], emoji:'🎮', mrpRange:[29999,64990]},
    {b:'Microsoft', items:['Xbox Series X','Xbox Series S','Xbox Wireless Controller','Xbox Elite Series 2 Controller'], emoji:'🎮', mrpRange:[9999,59999]},
    {b:'Nintendo',  items:['Nintendo Switch OLED','Switch Lite','Joy-Con Pair','Pro Controller','Ring Fit Adventure'], emoji:'🕹️', mrpRange:[4999,39999]},
    {b:'Razer',     items:['BlackWidow V3 Keyboard','DeathAdder V3 Mouse','Kraken Ultimate Headset','Hammerhead True Wireless X'], emoji:'⌨️', mrpRange:[2999,24999]},
    {b:'Logitech',  items:['G502 HERO Gaming Mouse','G915 TKL Keyboard','G733 Lightspeed Headset','G920 Racing Wheel'], emoji:'🖱️', mrpRange:[2999,29999]},
  ],
  Automotive:[
    {b:'Bosch',     items:['Car Battery 55Ah','Wiper Blades Set','OBD2 Diagnostic Scanner','Car Charger Fast','Spark Plugs Set 4-Pack'], emoji:'🚗', mrpRange:[299,8999]},
    {b:'3M',        items:['Car Shampoo 1L','Dashboard Polish','Headlight Restoration Kit','Car Wax Paste','Auto Sunshade'], emoji:'🚙', mrpRange:[199,1999]},
    {b:"Meguiar's", items:['Ultimate Compound','Gold Class Car Wash','Mirror Glaze Leather Conditioner','G-Treaz Engine Degreaser'], emoji:'🚗', mrpRange:[499,3999]},
    {b:'Michelin',  items:['Pilot Sport 4S 225/45R17','Energy Saver+ 195/65R15','Primacy 4 ST 205/55R16'], emoji:'🛞', mrpRange:[4999,19999]},
  ],
  'Baby & Kids':[
    {b:'Pampers',   items:['Pants Style XL 56-Pack','New Born Soft Diapers','Dry Pants XXL 42-Pack','Premium Care L 44-Pack'], emoji:'👶', mrpRange:[399,1499]},
    {b:"Johnson's", items:['Baby Lotion 500ml','Baby Shampoo 500ml','Baby Powder 200g','Baby Wipes 80-Pack','Top-to-Toe Wash'], emoji:'🍼', mrpRange:[149,799]},
    {b:'Pigeon',    items:['Feeding Bottle 240ml','Anti-Colic Bottle','Baby Nose Cleaner','Spoon & Fork Set'], emoji:'🍼', mrpRange:[199,1499]},
    {b:'Mee Mee',   items:['Baby Walker','Rocking Horse','Baby Rocker Chair','Soft Crib Toys Set'], emoji:'🧸', mrpRange:[999,7999]},
  ],
  'Health & Wellness':[
    {b:'Omron',     items:['Blood Pressure Monitor HEM-7124','Glucose Monitor','Nebulizer NE-C28','Thermometer MC-246'], emoji:'🏥', mrpRange:[999,7999]},
    {b:'Patanjali', items:['Ashwagandha Capsules 60-Pack','Triphala Churna 100g','Neem Ghanvati 60 Tabs','Giloy Ghanvati'], emoji:'💊', mrpRange:[59,499]},
    {b:'Optimum Nutrition',items:['Gold Standard Whey 2.27kg','Serious Mass 2.7kg','Amino Energy 270g','Creatine 300g'], emoji:'💪', mrpRange:[2999,9999]},
    {b:'MuscleBlaze',items:['Whey Protein 2kg','Biozyme Whey 1kg','Mass Gainer XXL 3kg','Pre Workout Intense'], emoji:'💪', mrpRange:[1799,7999]},
    {b:'Himalaya',  items:['Ashvagandha 60 Tablets','Liv 52 100 Tablets','Septilin 100 Tablets','Confido 60 Tablets'], emoji:'💊', mrpRange:[99,499]},
  ],
  'PC Accessories':[
    {b:'Logitech',  items:['MX Master 3S Mouse','MX Keys Keyboard','C920 Webcam','G703 Gaming Mouse','MK850 Wireless Combo','Z623 Speakers'], emoji:'🖥️', mrpRange:[1499,12999]},
    {b:'HP',        items:['Spectre x360 Pen','USB-C Dock G5','P27h G4 Monitor','v150w 32GB USB Drive'], emoji:'💻', mrpRange:[599,34999]},
    {b:'WD',        items:['My Passport 2TB','Elements 4TB','Black SN850X 2TB NVMe','Blue 1TB SSD','Black 6TB Desktop'], emoji:'💾', mrpRange:[1999,19999]},
    {b:'Seagate',   items:['Expansion 2TB','BarraCuda 2TB HDD','One Touch 4TB','FireCuda 530 2TB NVMe'], emoji:'💾', mrpRange:[2499,17999]},
  ],
};

const PLATFORMS_PER_CAT = {
  Electronics: ['amazon','flipkart','croma','tatacliq','jiomart'],
  Fashion: ['amazon','flipkart','myntra','meesho','ajio'],
  'Home & Kitchen': ['amazon','flipkart','jiomart','tatacliq','snapdeal'],
  Beauty: ['amazon','nykaa','flipkart','meesho','jiomart'],
  Sports: ['amazon','flipkart','meesho','snapdeal','tatacliq'],
  Books: ['amazon','flipkart','snapdeal','jiomart'],
  Toys: ['amazon','flipkart','meesho','snapdeal'],
  Grocery: ['amazon','jiomart','flipkart','meesho'],
  Gaming: ['amazon','flipkart','croma','tatacliq'],
  Automotive: ['amazon','flipkart','snapdeal','meesho'],
  'Baby & Kids': ['amazon','flipkart','meesho','jiomart'],
  'Health & Wellness': ['amazon','flipkart','nykaa','jiomart'],
  'PC Accessories': ['amazon','flipkart','croma','tatacliq'],
};

const DELIVERY_OPTS = {
  amazon:   ['Same Day','1 Day','1 Day','2-3 Days'],
  flipkart: ['Same Day','1 Day','2-3 Days','2-3 Days'],
  myntra:   ['2-3 Days','3-5 Days','3-5 Days','5-7 Days'],
  meesho:   ['4-7 Days','5-7 Days','5-7 Days','7-10 Days'],
  snapdeal: ['3-5 Days','4-7 Days','5-7 Days','7-10 Days'],
  nykaa:    ['1 Day','2-3 Days','3-5 Days','3-5 Days'],
  jiomart:  ['Same Day','1 Day','2-3 Days','3-5 Days'],
  ajio:     ['2-3 Days','3-5 Days','3-5 Days','5-7 Days'],
  tatacliq: ['2-3 Days','3-5 Days','4-7 Days','5-7 Days'],
  croma:    ['Same Day','1 Day','2-3 Days','3-5 Days'],
};

const TAGS = ['deal','hot','new','top',''];
const rnd  = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
const pick = arr  => arr[Math.floor(Math.random()*arr.length)];

const CATEGORIES  = Object.keys(SEEDS);
let   uid         = 1;
const PRODUCTS    = [];
const BRANDS_SET  = new Set();

Object.entries(SEEDS).forEach(([cat, brandList]) => {
  const pltKeys = PLATFORMS_PER_CAT[cat] || ['amazon','flipkart'];
  brandList.forEach(({b, items, emoji, mrpRange}) => {
    BRANDS_SET.add(b);
    items.forEach(name => {
      const mrp = rnd(mrpRange[0], mrpRange[1]);
      const numPlatforms = rnd(2, Math.min(4, pltKeys.length));
      const usedPlatforms = [...pltKeys].sort(()=>Math.random()-.5).slice(0,numPlatforms);
      const prices={}, stock={}, delivery={};
      const baseDisc = rnd(5, 65);
      usedPlatforms.forEach((p,i) => {
        const extraDisc = rnd(0,12);
        const discAmt   = Math.max(0.05, (baseDisc - extraDisc*i)/100);
        prices[p]   = Math.round(mrp*(1-Math.min(discAmt,0.75))/5)*5;
        stock[p]    = Math.random() > 0.12;
        const opts  = DELIVERY_OPTS[p] || ['3-5 Days'];
        delivery[p] = pick(opts);
      });
      const tag = TAGS[rnd(0,4)];
      PRODUCTS.push({
        id: uid++, emoji, b,
        name: `${b} ${name}`, cat, mrp,
        prices, stock, delivery,
        rating:  Math.round((rnd(30,50)/10)*2)/2,
        reviews: rnd(100, 150000),
        tag: tag || null,
      });
    });
  });
});
