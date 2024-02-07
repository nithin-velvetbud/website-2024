import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "Home",
  //   path: "/home",
  //   sectionId:"home",
  //   newTab: false,
  // },
  
  {
    id: 2,
    title: "Products",
    newTab: false,
    
    submenu: [
      {
        id: 21,
        title: "Arvat Restaurant",
        path: "/restaurant",
       
        newTab: false,
      },
      {
        id: 22,
        title: "Arvat Finance",
        path: "/finance",
        newTab: false,
        
      },

    ],
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    sectionId:"blog",
    submenu: [
      {
        id: 31,
        title: "Web Development",
        path: "/home/services/webdevelopment",
        sectionId:"blog",
        newTab: false,
      },
      {
        id: 32,
        title: "Enterprise Mobility",
        path: "/home/services/enterprisemobility",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 33,
        title: "Cloud compouting",
        path: "/home/services/cloudcomputing",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 34,
        title: "AI & ML",
        path: "/home/services/ai&ml",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 35,
        title: "Data Analytics",
        path: "/home/services/dataanalytics",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 36,
        title: "Internet of Things (IOT)",
        path: "/home/services/iot",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 37,
        title: "Block Chain",
        path: "/home/services/blockchain",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 38,
        title: "Data Science",
        path: "/home/services/datascience",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 39,
        title: "QA & Testing",
        path: "/home/services/qa&testing",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 40,
        title: "UI & UX Design",
        path: "/home/services/uiuxdesign",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 41,
        title: "IMS",
        path: "/home/services/ims",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 42,
        title: "Devops",
        path: "/home/services/devops",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 43,
        title: "ERP",
        path: "/home/services/erp",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 44,
        title: "Internet Marketing",
        path: "/home/services/internetmarketing",
        sectionId:"aboutone",
        newTab: false,
      },
      {
        id: 45,
        title: "Software Consulting",
        path: "/home/services/softwareconsulting",
        sectionId:"aboutone",
        newTab: false,
      },

    ],
  }, ,
  {
    id: 4,
    title: "Industries",
    path: "/abouts" ,
    sectionId:"features",
    newTab: false,
  },
  
  {
    id: 5,
    title: "About",
    path: "/abouts" ,
    sectionId:"aboutone",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contact",
    sectionId:"contact",
    newTab: false,
  },

];
export default menuData;
