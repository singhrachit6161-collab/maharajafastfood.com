// ---------------------------------------------------------------------------
// Central business/content configuration.
//
// PLACEHOLDER DATA: business.* below was NOT pulled from the Google Maps
// listing (the sandbox this site was built in has Google Maps domains
// blocked at the network policy level, so the listing couldn't be fetched
// automatically). Replace every value in `business` with the real details
// from https://maps.app.goo.gl/b2JbFNknNbppGSyk8 before launch: name,
// address, phone, coordinates, opening hours and the embed URL.
// ---------------------------------------------------------------------------

export const business = {
  name: "Maharaja Fast Food",
  shortName: "Maharaja",
  tagline: "Royal Indian Flavors, Fast & Fine",
  phoneDisplay: "+91 98765 43210", // PLACEHOLDER — replace with real number
  phoneHref: "+919876543210", // PLACEHOLDER — digits only, for tel: links
  whatsappNumber: "919876543210", // PLACEHOLDER — country code + number, no symbols
  email: "hello@maharajafastfood.com", // PLACEHOLDER
  address: {
    line1: "123 MG Road, Near City Mall", // PLACEHOLDER
    line2: "Bengaluru, Karnataka 560001", // PLACEHOLDER
    full: "123 MG Road, Near City Mall, Bengaluru, Karnataka 560001",
  },
  coordinates: {
    lat: 12.9716, // PLACEHOLDER
    lng: 77.5946, // PLACEHOLDER
  },
  // PLACEHOLDER embed — swap for the real "Share > Embed a map" src from the
  // Google Maps listing once it can be retrieved.
  mapEmbedSrc:
    "https://www.google.com/maps?q=12.9716,77.5946&z=16&output=embed",
  mapsShareUrl: "https://maps.app.goo.gl/b2JbFNknNbppGSyk8",
  hours: [
    { day: "Monday", time: "11:00 AM – 11:00 PM" },
    { day: "Tuesday", time: "11:00 AM – 11:00 PM" },
    { day: "Wednesday", time: "11:00 AM – 11:00 PM" },
    { day: "Thursday", time: "11:00 AM – 11:00 PM" },
    { day: "Friday", time: "11:00 AM – 12:00 AM" },
    { day: "Saturday", time: "11:00 AM – 12:00 AM" },
    { day: "Sunday", time: "11:00 AM – 11:00 PM" },
  ],
  rating: {
    value: 4.6, // PLACEHOLDER
    count: 812, // PLACEHOLDER
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://x.com/",
    youtube: "https://youtube.com/",
  },
};

export const awards = [
  { year: "2024", title: "Times Food Excellence Award — Best Indian Fine Dining" },
  { year: "2023", title: "City Food Critics' Choice — Signature Biryani" },
  { year: "2022", title: "Certificate of Excellence — Google Guest Favorite" },
];

export type Dish = {
  slug: string;
  name: string;
  description: string;
  price: string;
  category: "starters" | "mains" | "desserts" | "drinks";
  chefsPick?: boolean;
  tag?: string;
};

export const signatureDishes: Dish[] = [
  {
    slug: "shahi-butter-chicken",
    name: "Shahi Butter Chicken",
    description: "Char-grilled tandoori chicken simmered in a velvet tomato-butter gravy with fenugreek and cream.",
    price: "₹549",
    category: "mains",
    chefsPick: true,
  },
  {
    slug: "hyderabadi-biryani",
    name: "Hyderabadi Dum Biryani",
    description: "Long-grain basmati layered with saffron, slow-cooked mutton and caramelised onions, sealed in dough.",
    price: "₹599",
    category: "mains",
    chefsPick: true,
  },
  {
    slug: "tandoori-platter",
    name: "Maharaja Tandoori Platter",
    description: "A royal selection of seekh kebab, tandoori prawns, and murgh malai, finished over charcoal.",
    price: "₹749",
    category: "starters",
    chefsPick: true,
  },
  {
    slug: "paneer-lababdar",
    name: "Paneer Lababdar",
    description: "Silken cottage cheese in a rich cashew-tomato gravy, finished with cream and crushed kasuri methi.",
    price: "₹479",
    category: "mains",
  },
];

export const menu: Record<Dish["category"], { label: string; items: Dish[] }> = {
  starters: {
    label: "Starters",
    items: [
      {
        slug: "seekh-kebab",
        name: "Seekh Kebab",
        description: "Minced lamb, ginger, and green chilli, grilled on skewers over charcoal.",
        price: "₹399",
        category: "starters",
      },
      {
        slug: "amritsari-fish",
        name: "Amritsari Fish Tikka",
        description: "Basa fillets marinated in carom seed batter, fried golden.",
        price: "₹429",
        category: "starters",
      },
      {
        slug: "tandoori-platter",
        name: "Maharaja Tandoori Platter",
        description: "A royal selection of seekh kebab, tandoori prawns, and murgh malai.",
        price: "₹749",
        category: "starters",
        chefsPick: true,
      },
      {
        slug: "vegetable-galouti",
        name: "Vegetable Galouti Kebab",
        description: "Melt-in-the-mouth patties of slow-cooked lentils and warm spices.",
        price: "₹359",
        category: "starters",
      },
    ],
  },
  mains: {
    label: "Main Course",
    items: [
      {
        slug: "shahi-butter-chicken",
        name: "Shahi Butter Chicken",
        description: "Char-grilled tandoori chicken in velvet tomato-butter gravy.",
        price: "₹549",
        category: "mains",
        chefsPick: true,
      },
      {
        slug: "hyderabadi-biryani",
        name: "Hyderabadi Dum Biryani",
        description: "Saffron basmati, slow-cooked mutton, sealed in dough.",
        price: "₹599",
        category: "mains",
        chefsPick: true,
      },
      {
        slug: "paneer-lababdar",
        name: "Paneer Lababdar",
        description: "Cottage cheese in rich cashew-tomato gravy with kasuri methi.",
        price: "₹479",
        category: "mains",
      },
      {
        slug: "rogan-josh",
        name: "Kashmiri Rogan Josh",
        description: "Slow-braised lamb in a fragrant Kashmiri chilli and yoghurt curry.",
        price: "₹629",
        category: "mains",
      },
      {
        slug: "dal-makhani",
        name: "Maharaja Dal Makhani",
        description: "Black lentils simmered overnight with butter and cream.",
        price: "₹349",
        category: "mains",
      },
    ],
  },
  desserts: {
    label: "Desserts",
    items: [
      {
        slug: "gulab-jamun",
        name: "Gulab Jamun",
        description: "Warm milk dumplings soaked in cardamom-rose syrup.",
        price: "₹199",
        category: "desserts",
      },
      {
        slug: "royal-kulfi",
        name: "Royal Kulfi Falooda",
        description: "Saffron-pistachio kulfi with vermicelli and rose syrup.",
        price: "₹249",
        category: "desserts",
        chefsPick: true,
      },
      {
        slug: "gajar-halwa",
        name: "Gajar Ka Halwa",
        description: "Slow-cooked carrot halwa with khoya, nuts, and ghee.",
        price: "₹229",
        category: "desserts",
      },
    ],
  },
  drinks: {
    label: "Drinks",
    items: [
      {
        slug: "masala-chai",
        name: "Maharaja Masala Chai",
        description: "Hand-pounded spices, slow-brewed with milk.",
        price: "₹99",
        category: "drinks",
      },
      {
        slug: "lassi",
        name: "Sweet Lassi",
        description: "Churned yoghurt, cream, and a whisper of saffron.",
        price: "₹149",
        category: "drinks",
      },
      {
        slug: "virgin-mojito",
        name: "Rose Virgin Mojito",
        description: "Fresh mint, lime, and rose syrup over crushed ice.",
        price: "₹179",
        category: "drinks",
      },
    ],
  },
};

export const galleryImages = [
  { id: "g1", alt: "Restaurant ambience — main dining hall", variant: "interior", tall: true },
  { id: "g2", alt: "Signature biryani plating", variant: "food", tall: false },
  { id: "g3", alt: "Chef finishing a tandoori dish", variant: "chef", tall: false },
  { id: "g4", alt: "Private dining nook", variant: "interior", tall: false },
  { id: "g5", alt: "Butter chicken close-up", variant: "food", tall: true },
  { id: "g6", alt: "Bar and lounge seating", variant: "interior", tall: false },
  { id: "g7", alt: "Chef plating dessert", variant: "chef", tall: false },
  { id: "g8", alt: "Kebab platter over charcoal", variant: "food", tall: false },
  { id: "g9", alt: "Evening courtyard seating", variant: "interior", tall: true },
] as const;

export type Testimonial = {
  name: string;
  rating: number;
  text: string;
  date: string;
};

// PLACEHOLDER reviews — replace with real Google review excerpts once the
// listing is accessible.
export const testimonials: Testimonial[] = [
  {
    name: "Ananya R.",
    rating: 5,
    text: "The butter chicken tastes like it belongs in a palace kitchen. Ambience is stunning and the service was flawless from start to finish.",
    date: "2 weeks ago",
  },
  {
    name: "Vikram S.",
    rating: 5,
    text: "Booked a table for our anniversary — the tandoori platter and the live grilling station made the night unforgettable.",
    date: "1 month ago",
  },
  {
    name: "Priya M.",
    rating: 4,
    text: "Best biryani in the city, hands down. A little wait on weekends but completely worth it.",
    date: "1 month ago",
  },
  {
    name: "Karan D.",
    rating: 5,
    text: "Every dish felt curated. The dessert platter with kulfi falooda is a must-try. Will be back.",
    date: "2 months ago",
  },
];

export const chef = {
  name: "Chef Arjun Kapoor", // PLACEHOLDER
  title: "Executive Chef",
  experience: "18+ Years",
  philosophy:
    "\"Every recipe on this menu has been passed down through generations of royal kitchens. My work isn't to reinvent them — it's to honour them, one plate at a time.\"",
  bio: "Trained in the kitchens of Rajasthan's heritage havelis before leading award-winning kitchens across three continents, Chef Arjun brings a rare devotion to slow-cooked, spice-forward Indian cuisine — reimagined for the modern fine-dining table.",
};

export const navLinks = [
  { href: "#dishes", label: "Signature" },
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#chef", label: "Chef" },
  { href: "#reserve", label: "Reserve" },
  { href: "#contact", label: "Contact" },
];
