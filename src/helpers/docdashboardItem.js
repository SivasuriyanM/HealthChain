import Profile from '../assets/profile.png'
import Records from '../assets/records.jpeg'
import Doc from '../assets/appointment.jpeg'
import { Link } from "react-router-dom"

export const DocMenuList = [
  {
    name: "Profile",
    image: Profile,
    link: <Link to="/docrepo">View Profile</Link>
  },
  {
    name: "Patient Records",
    image: Records,
    link: <Link to="/disoth">View Patients</Link>
  },
  {
    name: "View Colleague",
    image: Doc ,
    link: <Link to="/docoth">View Doctors</Link>
  },
];