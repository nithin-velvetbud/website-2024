import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  
  {
    id: 4,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Books",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Inventory",
        path: "/contact",
        newTab: false,
      },
      {
        id: 41,
        title: "Payroll",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Invoice",
        path: "/contact",
        newTab: false,
      },
      {
        id: 41,
        title: "Billing",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Expense",
        path: "/contact",
        newTab: false,
      },

    ],
  }, ,
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },

];
export default menuData;
