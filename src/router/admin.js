const admin = [
   {
      path: "",
      name: "Home",
      component: () => import("../components/Home.vue")
   },
   {
      path: "/About",
      name: "About",
      component: () => import("../components/About.vue")
   },
   {
      path: "/Shop",
      name: "Shop",
      component: () => import("../components/Shop.vue")
   },
   {
      path: "/Contact",
      name: "Contact",
      component: () => import("../components/Contact.vue")
   },
   {
      path: "/Product-Details/:id",
      name: "ProductDetails",
      component: () => import("../components/ProductDetails.vue")
   },
   {
      path: "/user",
      name: "user",
      component: () => import("../components/user.vue")
    },
    {
      path: "/usered",
      name: "usered",
      component: () => import("../components/usered.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../components/cart.vue")
    }
]

export default admin;