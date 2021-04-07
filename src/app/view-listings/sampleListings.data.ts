export interface listing {
  id: string;
  name: string;
  email: string;
  phone: string;
  details: string;
  lat: string;
  lng: string;
}

let Listings:listing[] = [
  {
    id:"1",name:"Bill",email:"none@none.com",phone:"555-555-5555",details:"Yard sale!",lat:"33",lng:"-81"},
    {id:"2",name:"Tommy",email:"test@test.com",phone:"555-555-5555",details:"Garage Sale!",lat:"35",lng:"-80"},
    {id:"3",name:"Lionel's Antiques",email:"fake@fake.com",phone:"555-555-5555",details:"Going out of business sale!",lat:"33.9922408",lng:"-81.1035314"},

  ]

  export default Listings
