
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:8800/blog/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT   I-IGDTUW</span>
        <img
          src="https://www.pngarts.com/files/4/Astronaut-PNG-Photo.png"
          alt=""
          height="250px"
          margin = "12px"
        />
        <p>
          I-IGDTUW is a platform for the students of IGDTUW to share their experiences and knowledge with the world.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">TAGS</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
           
          <a href="https://www.facebook.com"><i className="sidebarIcon fab fa-facebook-square"></i></a>
        <a href="https://twitter.com/home"><i className="sidebarIcon fab fa-twitter-square"></i></a>
        <a href="https://in.pinterest.com"><i className="sidebarIcon fab fa-pinterest-square"></i></a>
        <a href="https://www.instagram.com"><i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
