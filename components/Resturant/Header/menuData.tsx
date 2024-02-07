import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "Home",
  //   path: "/home",
  //   sectionId: "home",
  //   newTab: false,
  // },
  // {
  //   id: 2,
  //   title: "POS",
  //   newTab: false,
  //   sectionId: "product",
  //   submenu: [
      
      
      
  //   ],
  // },

  {
    id: 4,
    title: "Features",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Billing software",
        path: "/products",
        sectionId: "product",
        newTab: false,
      },
      {
        id: 42,
        title: "Online Ordering",
        path: "/products",
        sectionId: "product2",
        newTab: false,
      },
      {
        id: 43,
        title: "Real-time Reports",
        path: "/products",
        sectionId:"product3",
        newTab: false,
      },
      {
        id: 44,
        title: "Easy payments",
        path: "/products",
        sectionId: "product4",
        newTab: false,
        
      },
      {
        id: 45,
        title: "Uninterrupted billing operations",
        path: "/products",
        sectionId: "whyus",
        newTab: false,
       
      },
      {
        id: 46,
        title: "Inventory Management",
        path: "/products",
        sectionId: "Inventory",
        newTab: false,
      },
      {
        id: 47,
        title: "Prepare plan & Provide",
        path: "/products",
        sectionId: "Prepare",
        newTab: false,
      },
      {
        id: 48,
        title: "CRM & Loyalty",
        path: "/products",
        sectionId: "CRM",
        newTab: false,
      },
      {
        id: 49,
        title: "Accounting & GST",
        path: "/products",
        sectionId: "GST",
        newTab: false,
      },
      {
        id: 50,
        title: "Effortless food aggregator integration",
        path: "/products",
        sectionId: "food",
        newTab: false,
      },
      {
        id: 51,
        title: "Data Backup & Security",
        path: "/products",
        sectionId: "Data",
        newTab: false,
      },
      
    ],
  },
  {
    id: 3,
    title: "About us",
    path: "/about",
    sectionId: "about",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contacts",
    sectionId: "contact",
    newTab: false,
  },
];

export default menuData;
