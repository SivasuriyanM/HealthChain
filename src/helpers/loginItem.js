import Profile from '../assets/profile.png'
import Records from '../assets/records.jpeg'
import { Link } from "react-router-dom"


export const loginItam = [
  {
    name: "Patient ",
    image: Profile,
    link: <Link to="/patlog">Login</Link>
  },
  {
    name: "Doctor ",
    image: Records,
    link: <Link to="/doclog">Login</Link>
  },
];