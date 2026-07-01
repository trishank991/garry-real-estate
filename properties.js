/* ============================================================
   Garry Singh Real Estate — PROPERTY LISTINGS DATA (fallback)
   ============================================================

   HOW THIS WORKS
   --------------
   • When the Firebase backend is connected, the website loads
     listings LIVE from there (Garry edits them in his admin page).
   • If Firebase is ever unavailable, the site falls back to the
     listings in THIS file so it never looks empty.

   You normally won't need to touch this file once Firebase is set
   up — Garry manages everything from his admin page. It's kept in
   sync as a safety net / starting point.

   COMPLIANCE NOTE
   ---------------
   Photos and marketing copy on barfoot.co.nz belong to Barfoot &
   Thompson. We therefore link to the official Barfoot listing
   ("View full listing") instead of copying their photos/text.
   The `images` arrays are left empty so Garry can upload his OWN
   photos via the admin page. Sold properties are shown exactly as
   Barfoot attributes them (Garry was a marketing agent on each).

   FIELDS
   ------
   id, title(address), price(number or null), priceText(optional, e.g.
   "For Sale by Negotiation"), location(suburb), type, beds, baths,
   garage, sqft(0 if unknown), status("For Sale"|"Pending"|"Sold"),
   featured(true/false), soldDate, soldPrice, coMarketedWith,
   description, images[], barfootUrl, video
   ============================================================ */

window.GARRY_PROPERTIES = [

  /* ---------------- FOR SALE ---------------- */
  {
    id: "12-st-lucia-place-unsworth-heights",
    title: "12 St Lucia Place, Unsworth Heights",
    price: null,
    priceText: "For Sale by Negotiation",
    location: "Unsworth Heights, Auckland",
    type: "House",
    beds: 4, baths: 3, garage: 2, sqft: 0,
    status: "For Sale",
    featured: true,
    description: "A spacious four-bedroom, three-bathroom family home in sought-after Unsworth Heights, on Auckland's North Shore. Open home available — view the full listing, photos and details on Barfoot & Thompson.",
    images: [],
    barfootUrl: "https://www.barfoot.co.nz/property/residential/north-shore-city/unsworth-heights/house/931833",
    video: ""
  },
  {
    id: "2-3-ronald-macken-place-windsor-park",
    title: "2/3 Ronald Macken Place, Windsor Park",
    price: 1068000,
    priceText: "",
    location: "Windsor Park, Auckland",
    type: "House",
    beds: 4, baths: 2, garage: 3, sqft: 0,
    status: "For Sale",
    featured: true,
    description: "A well-presented four-bedroom home (cross-lease) in Windsor Park, North Shore. Open home available — view the full listing, photos and details on Barfoot & Thompson.",
    images: [],
    barfootUrl: "https://www.barfoot.co.nz/property/residential/north-shore-city/windsor-park/house-on-cross-lease/931038",
    video: ""
  },

  /* ---------------- RECENT SALES (marketed by Garry) ---------------- */
  {
    id: "39-gazelle-avenue-beach-haven",
    title: "39 Gazelle Avenue, Beach Haven",
    price: 810000,
    location: "Beach Haven, Auckland",
    type: "House",
    beds: 3, baths: 1, garage: 5, sqft: 0,
    status: "Sold",
    featured: false,
    soldDate: "April 2026", soldPrice: 810000,
    coMarketedWith: "Andy Ling",
    description: "Three-bedroom home in Beach Haven. Marketed by Andy Ling & Garry Singh, Barfoot & Thompson.",
    images: [],
    barfootUrl: "https://www.barfoot.co.nz/our-people/garry.singh?tab=Sold",
    video: ""
  },
  {
    id: "1-77-santiago-crescent-unsworth-heights",
    title: "1/77 Santiago Crescent, Unsworth Heights",
    price: 975000,
    location: "Unsworth Heights, Auckland",
    type: "House",
    beds: 3, baths: 1, garage: 1, sqft: 0,
    status: "Sold",
    featured: false,
    soldDate: "November 2025", soldPrice: 975000,
    coMarketedWith: "Andy Ling",
    description: "Three-bedroom home in Unsworth Heights. Marketed by Andy Ling & Garry Singh, Barfoot & Thompson.",
    images: [],
    barfootUrl: "https://www.barfoot.co.nz/our-people/garry.singh?tab=Sold",
    video: ""
  },
  {
    id: "2-16-caribbean-drive-unsworth-heights",
    title: "2/16 Caribbean Drive, Unsworth Heights",
    price: 915000,
    location: "Unsworth Heights, Auckland",
    type: "House",
    beds: 3, baths: 1, garage: 2, sqft: 0,
    status: "Sold",
    featured: false,
    soldDate: "November 2025", soldPrice: 915000,
    coMarketedWith: "Gurvik Singh",
    description: "Three-bedroom home in Unsworth Heights. Marketed by Gurvik Singh & Garry Singh, Barfoot & Thompson.",
    images: [],
    barfootUrl: "https://www.barfoot.co.nz/our-people/garry.singh?tab=Sold",
    video: ""
  },
  {
    id: "13a-kia-ora-road-beach-haven",
    title: "13a Kia Ora Road, Beach Haven",
    price: 910000,
    location: "Beach Haven, Auckland",
    type: "House",
    beds: 3, baths: 1, garage: 3, sqft: 0,
    status: "Sold",
    featured: false,
    soldDate: "September 2025", soldPrice: 910000,
    coMarketedWith: "Liz Hurley",
    description: "Three-bedroom home in Beach Haven. Marketed by Liz Hurley & Garry Singh, Barfoot & Thompson.",
    images: [],
    barfootUrl: "https://www.barfoot.co.nz/our-people/garry.singh?tab=Sold",
    video: ""
  },
  {
    id: "29a-hogans-road-glenfield",
    title: "29A Hogans Road, Glenfield",
    price: 712500,
    location: "Glenfield, Auckland",
    type: "House",
    beds: 2, baths: 1, garage: 3, sqft: 0,
    status: "Sold",
    featured: false,
    soldDate: "August 2025", soldPrice: 712500,
    coMarketedWith: "Andy Ling",
    description: "Two-bedroom home in Glenfield. Marketed by Andy Ling & Garry Singh, Barfoot & Thompson.",
    images: [],
    barfootUrl: "https://www.barfoot.co.nz/our-people/garry.singh?tab=Sold",
    video: ""
  },
  {
    id: "10-merida-place-unsworth-heights",
    title: "10 Merida Place, Unsworth Heights",
    price: 1124000,
    location: "Unsworth Heights, Auckland",
    type: "House",
    beds: 3, baths: 2, garage: 1, sqft: 0,
    status: "Sold",
    featured: false,
    soldDate: "January 2025", soldPrice: 1124000,
    coMarketedWith: "Gurvik Singh",
    description: "Three-bedroom home in Unsworth Heights. Marketed by Gurvik Singh & Garry Singh, Barfoot & Thompson.",
    images: [],
    barfootUrl: "https://www.barfoot.co.nz/our-people/garry.singh?tab=Sold",
    video: ""
  },
  {
    id: "83-albany-highway-unsworth-heights",
    title: "83 Albany Highway, Unsworth Heights",
    price: 1015000,
    location: "Unsworth Heights, Auckland",
    type: "House",
    beds: 4, baths: 2, garage: 2, sqft: 0,
    status: "Sold",
    featured: false,
    soldDate: "November 2024", soldPrice: 1015000,
    coMarketedWith: "Gurvik Singh",
    description: "Four-bedroom home in Unsworth Heights. Marketed by Gurvik Singh & Garry Singh, Barfoot & Thompson.",
    images: [],
    barfootUrl: "https://www.barfoot.co.nz/our-people/garry.singh?tab=Sold",
    video: ""
  }
];
