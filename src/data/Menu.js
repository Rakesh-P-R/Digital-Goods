const HeaderMenu = [
    {
        name: "Home",
        url: "#",
       
    },
    {
        name: "Rules&Regulations",
        url: "#",
       
    },
   
    {
        name: "Contact",
        url: "/contact",
        hasChildren: false,
        
    },
    
]

const CateMenu = [
    {
        name: "Fashion",
        url: "/shop?category=fashion",
        icon: "/images/product/categories/cat-01.png",
    }
]

const DashboardAsideMenu = [
    {
      icon: "fas fa-th-large",
      name: "Dashboard",
      slug: ""
    },
    {
      icon: "fas fa-shopping-basket",
      name: "Orders",
      slug: "orders"
    },
    {
      icon: "fas fa-file-download",
      name: "Downloads",
      slug: "downloads"
    },
    {
      icon: "fas fa-home",
      name: "Addresses",
      slug: "addresses-edit"
    },
    {
      icon: "fas fa-user",
      name: "Account Details",
      slug: "account-details" 
    }
]

export {HeaderMenu, CateMenu, DashboardAsideMenu};