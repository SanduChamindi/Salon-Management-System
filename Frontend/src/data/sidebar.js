import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { MdBallot } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const menu = [
  
  {
    title: "Admin Home",
    icon: <FaHome />,
    path: "/adminHome",
  },
  {
    title: "Service",
    icon: <FaPaintBrush/>,
    childrens: [
      {
        title: "All Service",
        icon: <MdBallot />,
        path: "/serall",
      },
      {
        title: "Add Service",
        icon: <BiImageAdd />,
        path: "/seradd",
      },
    ],
  },
  {
    title: "Inventory",
    icon: <FaStore/>,
    childrens: [
      {
        title: "Dashboard",
        icon: <FaTh />,
        path: "/dashboard",
      },
      {
        title: "Add Product",
        icon: <BiImageAdd />,
        path: "/add-product",
      },
    ],
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Contact Us",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },

  
];

export default menu;
