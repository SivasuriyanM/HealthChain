import Profile from '../assets/profile.png'
import Records from '../assets/records.jpeg'
import { Link } from "react-router-dom"


export const signInItam = [
  {
    name: "Patient",
    image: Profile,
    link: <Link to="/regpat">Sigin</Link>
  },
  {
    name: "Doctor",
    image: Records,
    link: <Link to="/regdoc">Sigin</Link>
  },
];