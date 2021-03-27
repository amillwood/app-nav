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
  description: "View All Got and Need Dirt Listings",
  path: "/ViewListings"
};
const CreateListing: page = {
  key: "createlisting",
  title: "Create a Listing",
  icon: 'newspaper',
  description: "Create Your Own Got or Need Dirt Listing",
  path: "/CreateListing"
};
const Pricing: page = {
  key:"pricing",
  title: "Pricing",
  icon: 'pricetags',
  description: "Browse The Various GotDirt.org Plans",
  path: "/Pricing"
};
const Login: page = {
  key:"login",
  title: "Login",
  icon: 'log-in',
  description: "Login or Register an Account",
  path: "/Login"
};
const Account: page = {
  key:"account",
  title: "Account",
  icon: 'person',
  description: "Manage My Account",
  path: "/Account"
};

const Pages = [ViewListings,CreateListing,Pricing,Login,Account]

export default Pages