const authorInfo = {
  author: "Swadesh Behera",
  facebookAuthorPage: `https://www.facebook.com/codenx`,
  facebookPageName: "codenx",
  githubPage: "itswadesh",
  linkedinProfile: "itswadesh",
  telegramUsername: "itswadesh",
  twitterUsername: "itswadesh"
};
const sorts = [
  { name: "Recomended", val: null },
  { name: "Latest First", val: "-updatedAt" },
  { name: "Highest Rated", val: "-ratings" },
  { name: "Most Viewed", val: "-views" }
];
const currency = { symbol: "\u20B9", code: "INR" };
const WWW_URL = "http://localhost:3000";
const DOMAIN = "zapvi.in";
const stripePublishableKey = { "VITE_DOMAIN": "zapvi.in", "VITE_WWW_URL": "http://localhost:3000", "VITE_PINCODES_API": "https://indian-pincodes.vercel.app", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_51HXxXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXqXq";
export {
  DOMAIN as D,
  WWW_URL as W,
  authorInfo as a,
  sorts as b,
  currency as c,
  stripePublishableKey as s
};
