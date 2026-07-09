// ---------------------------------------------------------------------------
// Central business/content configuration.
//
// PLACEHOLDER DATA: business.* below was NOT pulled from a Google Maps
// listing (Google Maps domains are blocked at this environment's network
// policy level, so a listing couldn't be fetched automatically). Replace
// every value in `business` with the real details for Keshari Food Plaza
// and Banquet before launch: name, address, phone, coordinates, opening
// hours and the map embed URL.
// ---------------------------------------------------------------------------

export const business = {
  name: "Keshari Food Plaza and Banquet",
  shortName: "Keshari",
  tagline: "Where Grand Celebrations Meet Great Taste",
  phoneDisplay: "+91 98765 43210", // PLACEHOLDER — replace with real number
  phoneHref: "+919876543210", // PLACEHOLDER — digits only, for tel: links
  whatsappNumber: "919876543210", // PLACEHOLDER — country code + number, no symbols
  email: "hello@kesharifoodplaza.com", // PLACEHOLDER
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
  mapsShareUrl: "https://maps.app.goo.gl/b2JbFNknNbppGSyk8", // PLACEHOLDER
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
  // Local-SEO targeting — update the city/area to match the real listing.
  city: "Bengaluru", // PLACEHOLDER
  serviceArea: ["Bengaluru", "Whitefield", "Indiranagar", "Koramangala"], // PLACEHOLDER
};

export const awards = [
  { year: "2024", title: "Times Food Excellence Award — Best Banquet & Event Venue" },
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
  isVeg: boolean;
  tag?: string;
  image?: string;
};

export const signatureDishes: Dish[] = [
  {
    slug: "shahi-butter-chicken",
    name: "Shahi Butter Chicken",
    description: "Char-grilled tandoori chicken simmered in a velvet tomato-butter gravy with fenugreek and cream.",
    price: "₹549",
    category: "mains",
    chefsPick: true,
    isVeg: false,
    image: "/images/dish-butter-chicken.jpg",
  },
  {
    slug: "hyderabadi-biryani",
    name: "Hyderabadi Dum Biryani",
    description: "Long-grain basmati layered with saffron, slow-cooked mutton and caramelised onions, sealed in dough.",
    price: "₹599",
    category: "mains",
    chefsPick: true,
    isVeg: false,
    image: "/images/dish-biryani.jpg",
  },
  {
    slug: "keshari-tandoori-platter",
    name: "Keshari Special Tandoori Platter",
    description: "A royal selection of seekh kebab, tandoori prawns, and murgh malai, finished over charcoal.",
    price: "₹749",
    category: "starters",
    chefsPick: true,
    isVeg: false,
    image: "/images/dish-tandoori-platter.jpg",
  },
  {
    slug: "paneer-lababdar",
    name: "Paneer Lababdar",
    description: "Silken cottage cheese in a rich cashew-tomato gravy, finished with cream and crushed kasuri methi.",
    price: "₹479",
    category: "mains",
    isVeg: true,
    image: "/images/dish-paneer.jpg",
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
        isVeg: false,
      },
      {
        slug: "amritsari-fish",
        name: "Amritsari Fish Tikka",
        description: "Basa fillets marinated in carom seed batter, fried golden.",
        price: "₹429",
        category: "starters",
        isVeg: false,
      },
      {
        slug: "keshari-tandoori-platter",
        name: "Keshari Special Tandoori Platter",
        description: "A royal selection of seekh kebab, tandoori prawns, and murgh malai.",
        price: "₹749",
        category: "starters",
        chefsPick: true,
        isVeg: false,
        image: "/images/dish-tandoori-platter.jpg",
      },
      {
        slug: "vegetable-galouti",
        name: "Vegetable Galouti Kebab",
        description: "Melt-in-the-mouth patties of slow-cooked lentils and warm spices.",
        price: "₹359",
        category: "starters",
        isVeg: true,
      },
      {
        slug: "paneer-tikka",
        name: "Paneer Tikka",
        description: "Charcoal-grilled cottage cheese marinated in yoghurt and spices.",
        price: "₹379",
        category: "starters",
        isVeg: true,
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
        isVeg: false,
        image: "/images/dish-butter-chicken.jpg",
      },
      {
        slug: "hyderabadi-biryani",
        name: "Hyderabadi Dum Biryani",
        description: "Saffron basmati, slow-cooked mutton, sealed in dough.",
        price: "₹599",
        category: "mains",
        chefsPick: true,
        isVeg: false,
        image: "/images/dish-biryani.jpg",
      },
      {
        slug: "paneer-lababdar",
        name: "Paneer Lababdar",
        description: "Cottage cheese in rich cashew-tomato gravy with kasuri methi.",
        price: "₹479",
        category: "mains",
        isVeg: true,
        image: "/images/dish-paneer.jpg",
      },
      {
        slug: "rogan-josh",
        name: "Kashmiri Rogan Josh",
        description: "Slow-braised lamb in a fragrant Kashmiri chilli and yoghurt curry.",
        price: "₹629",
        category: "mains",
        isVeg: false,
      },
      {
        slug: "dal-makhani",
        name: "Keshari Special Dal Makhani",
        description: "Black lentils simmered overnight with butter and cream.",
        price: "₹349",
        category: "mains",
        isVeg: true,
      },
      {
        slug: "veg-biryani",
        name: "Vegetable Dum Biryani",
        description: "Saffron basmati layered with garden vegetables and fried onions.",
        price: "₹399",
        category: "mains",
        isVeg: true,
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
        isVeg: true,
      },
      {
        slug: "royal-kulfi",
        name: "Royal Kulfi Falooda",
        description: "Saffron-pistachio kulfi with vermicelli and rose syrup.",
        price: "₹249",
        category: "desserts",
        chefsPick: true,
        isVeg: true,
        image: "/images/dessert-kulfi.jpg",
      },
      {
        slug: "gajar-halwa",
        name: "Gajar Ka Halwa",
        description: "Slow-cooked carrot halwa with khoya, nuts, and ghee.",
        price: "₹229",
        category: "desserts",
        isVeg: true,
      },
    ],
  },
  drinks: {
    label: "Drinks",
    items: [
      {
        slug: "masala-chai",
        name: "Keshari Special Masala Chai",
        description: "Hand-pounded spices, slow-brewed with milk.",
        price: "₹99",
        category: "drinks",
        isVeg: true,
        image: "/images/drink-chai.jpg",
      },
      {
        slug: "lassi",
        name: "Sweet Lassi",
        description: "Churned yoghurt, cream, and a whisper of saffron.",
        price: "₹149",
        category: "drinks",
        isVeg: true,
      },
      {
        slug: "virgin-mojito",
        name: "Rose Virgin Mojito",
        description: "Fresh mint, lime, and rose syrup over crushed ice.",
        price: "₹179",
        category: "drinks",
        isVeg: true,
      },
    ],
  },
};

export const galleryImages = [
  { id: "g1", alt: "Restaurant ambience — main dining hall", variant: "interior", tall: true, image: "/images/interior-dining.jpg" },
  { id: "g2", alt: "Signature biryani plating", variant: "food", tall: false, image: "/images/dish-biryani.jpg" },
  { id: "g3", alt: "Chef at work in the kitchen", variant: "chef", tall: false, image: "/images/chef-cooking-action.jpg" },
  { id: "g4", alt: "Indian wedding stage decorated in gold and floral for a reception", variant: "banquet", tall: false, image: "/images/banquet-bridal-dais.jpg" },
  { id: "g5", alt: "Butter chicken close-up", variant: "food", tall: true, image: "/images/dish-butter-chicken.jpg" },
  { id: "g6", alt: "Banquet stage flower wall backdrop for a sangeet night", variant: "banquet", tall: false, image: "/images/banquet-indian-stage.jpg" },
  { id: "g7", alt: "Portrait of one of our chefs", variant: "chef", tall: false, image: "/images/chef-portrait.jpg" },
  { id: "g8", alt: "Kebab platter over charcoal", variant: "food", tall: false, image: "/images/dish-tandoori-platter.jpg" },
  { id: "g9", alt: "Elegant table setting for a corporate gala", variant: "banquet", tall: true, image: "/images/banquet-gala.jpg" },
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
    text: "We hosted our wedding reception in the banquet hall and it was flawless — décor, food, and service all felt five-star.",
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
    text: "Booked the hall for our company's annual day — the events team handled everything, and the combo packages saved us so much planning.",
    date: "2 months ago",
  },
];

export const chef = {
  name: "Chef Arjun Kapoor", // PLACEHOLDER
  title: "Executive Chef",
  experience: "18+ Years",
  philosophy:
    "\"Every recipe on this menu has been passed down through generations of royal kitchens. My work isn't to reinvent them — it's to honour them, one plate at a time.\"",
  bio: "Trained in the kitchens of Rajasthan's heritage havelis before leading award-winning kitchens across three continents, Chef Arjun brings a rare devotion to slow-cooked, spice-forward Indian cuisine — reimagined for the modern fine-dining and banquet table.",
};

export const navLinks = [
  { href: "#dishes", label: "Signature" },
  { href: "#menu", label: "Menu" },
  { href: "#offers", label: "Offers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#banquet", label: "Banquets" },
  { href: "#reserve", label: "Reserve" },
  { href: "#contact", label: "Contact" },
];

export const eventTypes = [
  "Wedding & Reception",
  "Engagement",
  "Birthday Party",
  "Anniversary",
  "Corporate Event",
  "Kitty Party / Get-together",
  "Other",
];

export const banquetHalls = [
  { name: "Royal Grand Hall", capacity: "Up to 500 guests" },
  { name: "Emerald Banquet", capacity: "Up to 250 guests" },
  { name: "Rooftop Lawn", capacity: "Up to 150 guests" },
  { name: "Not sure yet", capacity: "We'll help you choose" },
];

export type Offer = {
  slug: string;
  title: string;
  description: string;
  badge: string;
  validity: string;
};

export const festivalOffers: Offer[] = [
  {
    slug: "wedding-season-special",
    title: "Wedding Season Special",
    description: "Book the banquet hall for your wedding and get a complimentary Sangeet night stage setup.",
    badge: "Save up to ₹25,000",
    validity: "Valid through wedding season",
  },
  {
    slug: "festive-family-thali",
    title: "Festive Family Thali Combo",
    description: "A royal 12-course thali for 4, crafted for festival celebrations at home or in-hall.",
    badge: "20% OFF",
    validity: "Diwali – New Year",
  },
  {
    slug: "corporate-lunch-package",
    title: "Corporate Lunch Package",
    description: "Daily buffet packages for offices and conferences, with banquet space for larger gatherings.",
    badge: "Starting ₹399/head",
    validity: "Weekdays only",
  },
  {
    slug: "weekend-combo-feast",
    title: "Weekend Combo Feast",
    description: "Any Signature main + starter + dessert + drink, bundled at a special weekend price.",
    badge: "Combo @ ₹699",
    validity: "Saturday – Sunday",
  },
];
