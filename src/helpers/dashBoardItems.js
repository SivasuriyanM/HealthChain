import Profile from '../assets/profile.png'
import Records from '../assets/records.jpeg'
import Doc from '../assets/appointment.jpeg'
import { Link } from "react-router-dom"

export const MenuList = [
  {
    name: "Profile",
    image: Profile,
    link: <Link to="/patpro">View Profile</Link>
  },
  {
    name: "Records",
    image: Records,
    link: <Link to="/disrep">View Record</Link>
  },
  {
    name: "Search Doctors",
    image: Doc ,
    link: <Link to="/docoth">Search </Link>
  },
];