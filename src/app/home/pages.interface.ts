interface page {
  key: string;
  title: string;
  icon: string;
  description: string;
  path: string;

};


const ViewListings: page = {
  key: "viewlistings",
  title: "View Listings",
  icon: 'map',
  description: "View All Listings",
  path: "/ViewListings"
};
const CreateListing: page = {
  key: "createlisting",
  title: "Create a Listing",
  icon: 'newspaper',
  description: "Create Your Own Listing",
  path: "/CreateListing"
};
const Pricing: page = {
  key:"pricing",
  title: "Pricing",
  icon: 'pricetags',
  description: "Browse The Various Plans",
  path: "/Pricing"
};
const Login: page = {
  key:"login",
  title: "Login",
  icon: 'log-in',
  description: "Login or Register",
  path: "/Login"
};
const ContactUs: page = {
  key:"contact",
  title: "Contact Us",
  icon: 'mail',
  description: "Send us a message.",
  path: "/ContactUs"
};

const Pages = [ViewListings,CreateListing,Pricing,ContactUs,Login]

export default Pages
