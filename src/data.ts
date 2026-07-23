import { MenuItem } from "./types";

export const siteConfig = {
  name: "Purple Jasmine Cafe",
  description: "Experience the Language of Taste. All day cafe & lounge in Ikoyi.",
  address: "97 Awolowo Road, Ikoyi, Lagos 101251, Lagos, Nigeria",
  phone: "0814 824 7243",
  whatsapp: "2348148247243",
  whatsappUrl: "https://wa.me/2348148247243",
  email: "purplejasminecafe@gmail.com",
  instagram: "https://www.instagram.com/purplejasminecafe",
  facebook: "https://www.facebook.com/share/18ztJAeRZU/",
  tiktok: "https://www.tiktok.com/@purplejasminecafe?_r=1&_t=ZS-983faFtLBlU",
  zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST",
  zappieMainMenuUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST",
  zappieDrinksMenuUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?menu_id=87f8yWpF6XXh39fqr1nfK&menu_layout=LIST",
  hours: {
    weekdays: "08:30 AM - 10:00 PM",
    weekends: "08:30 AM - 10:00 PM",
  }
};

export const featuredMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Purple Jasmine Parmesan Chicken",
    description: "Herb seasoned chicken finished with parmesan, rich yet balanced",
    price: "₦ 13,500",
    category: "Meals",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWyb4e6ZPu1_XE9DAjl75YxgG34PO4TA7fr3j2FPbWBhSxsmJ8aOA0ad_zuQkkYrdGZ24iLttMIJ1qIJ0yV1vcXKvnhIxDK4e98x3ISZDNRWHjCVmqfyVgVoGhdrBRazGHC7nmdAjcH7ilywTWyuJFFeuwZSvXJMZiM6W59HAFS13fxvz_4ehmbGScygW7/s320/permessan.png",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=ou1mudzgt2PkUMqWVjFsI&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_F64ATuYTdFsssyhom248f"
  },
  {
    id: "2",
    name: "Truffle Shrimp Melt",
    description: "Sautéed shrimp, melted cheese and truffle aroma in toasted bread",
    price: "₦ 15,000",
    category: "Sandwiches",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwKrL1CJFydYAJsrzFBzFVZovBaHPh4kr-MLWaqgTLV2NMeDulbCsLsfYcTKzoG9iCGas3r7XAq69gADhD8Yr8fjKvZkfXtEVkMq5GMjQw3ztXcW8iWaQ_ADfv8KjH9xUajE4RzGgtqax1yyPi-s8Fdi4hB_UQMC143kiFULU7_JvdSW9YFjfle_uvzdXs/s320/tuffle.png",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=7gZSnJJsG4b8BgyEqrTBL&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_yG0C8KpdZ5nRHiXkrGccZ"
  },
  {
    id: "3",
    name: "Fluffy PJ Pancakes",
    description: "Soft fluffy pancakes served with berries and syrup",
    price: "₦ 8,500",
    category: "Meals",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuRf0kJ5o8IUPhbPXzLE4fbiPDFYdCNI94mvwRtVNrOgfDXvL88EJ1JCVlio9R_XBXOsk8nvir_t2YVOOIkOjDipdWcH2Alv0Km1dBimzT_X0ZASANwydpqc7J2Y-xQTIl0bVQ08J251v0D4ivCSmYCRNUcLxcKpgMD1Dk4IZ17k9lC8KigjddpHD7khfW/s320/fluffy%20pj%20pancakes%20.png",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=ou1mudzgt2PkUMqWVjFsI&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_USkNZsAdfLHLMfAXwNGOF"
  },
  {
    id: "4",
    name: "Chicken Herb Rice Bowl",
    description: "Herb grilled chicken served over fluffy rice",
    price: "₦ 16,500",
    category: "Meals",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1XIPfW7B5IGCct6OUDokn7imDDvfuIHjIFV6tDV39e9EOF3HLtR7Aoqz_voOB_2hWxF1l6htcoc1ViLig6P9Qkz_3cLQndbm3jgBnNrPRf4PSqVRde2jlIsHdDypZHLXuc0GcuUiZGaeJLKAR0NV15WrjxGpLqpifJBlbbQvKRu81TbpiBra8usYY1xqH/s320/Chicken%20Herb%20Rice%20Bowl.png",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=ou1mudzgt2PkUMqWVjFsI&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_5lh8ntFXSA3hfJh80dF5Z"
  }
];

export const allMenuItems: MenuItem[] = [
  ...featuredMenuItems,
  {
    id: "5",
    name: "Shrimp Basil Savory Waffle",
    description: "Crispy waffle topped with garlic shrimp, basil and melted cheese",
    price: "₦ 15,000",
    category: "Meals",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0bBWAKErgy-idlxmDBxj4lInWSPMDzX_V661_UvlXF_gDalG1tvpabuR2VIVoQGMM4KAe8f_9TrJQXSykDIpGtXAJZx97RNaY6VTzweTNWNWZnOujdPWihMZ6U5ubcvJwTjZpGF9zhThFRolpVXSV3UnsXgJnLdLurQEjd2Q_iBZLyFYozEGnlf7xVrN3/s320/1hiew2yyyy.jpg",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=7gZSnJJsG4b8BgyEqrTBL&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_sgItEw4AEBi4DItILjWsS"
  },
  {
    id: "6",
    name: "Classic Egg & Turkey Toast",
    description: "Soft scrambled eggs, turkey ham and melted cheese on toasted bread",
    price: "₦ 13,500",
    category: "Sandwiches",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5CDKD6XFz77snnDFDCBQBzwgylylCwVWJz-s7ItJHR81FdaPStvoc1x1qZuNA4z1QwOe1wwFIh-X6LA-WCd8-Xekn8X_mMNVv3CLkxZSMuN0BDVzv7QPE2WMtGdrF12bV4pFK0HFkxM9xpKbjrhI-cNYXW4YZbKTDV0ZE-8fSxacv9uKOPZbU24sQpK3j/s320/egg%20n%20turkey.jpg",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=7gZSnJJsG4b8BgyEqrTBL&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_4PyRhFGAL49AOxSe4n62X"
  },
  {
    id: "7",
    name: "English Breakfast",
    description: "Bacon, sausages, eggs, baked beans, mushrooms, tomatoes and toast",
    price: "₦ 17,000",
    category: "Meals",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDGf3sNRFjQ0K0ZhtuzHEde-R2ls9ew697VmKNcthlm5lV1Z14ZH2nvPxLk3s4m25tchHeLiscuPDJGZzW01M9ENSH07Omqwmc4jrHUFY9hBKcEnnAI8DfcUn190QzDVPzLf_nMUZiQuznQP-N-xMqsckLGPP6y1SAG6nROXsOyqauCRSlyiZGbzSuFcTq/s320/English%20Breakfast.jpg",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=ou1mudzgt2PkUMqWVjFsI&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_MSQmWIwXNg557kQl1iiPf"
  },
  {
    id: "8",
    name: "Lamb Chops",
    description: "Premium grilled lamb chops",
    price: "₦ 27,000",
    category: "Meals",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimRboFgQ4C7Q76IUBHN_IZaiI5XmZg1jHvo2Tbf3U3C2oFQPQ8h70VlOiVIY20VPqUlpADy6GkkL8Hy4Gh3vaxSFisLXRLAV7buMUuLrD9PXCbTNMs22F5B-CHfiVZGH4SUKgdcA80nzrUaSLHY2MJEHBe0LBYy55XnqPFo2xZBReyyOT9BxcgGiivW4Bu/s320/lambchop.jpg",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=ou1mudzgt2PkUMqWVjFsI&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_0zsjDu8GeronHCPQDYLKS"
  },
  {
    id: "9",
    name: "Shrimp Butter Rice Bowl",
    description: "Garlic butter shrimp over rice, rich and comforting",
    price: "₦ 19,500",
    category: "Meals",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXud5ax6wCNXox_UelU8vzMQzSEWY5Gt8xbP-ng1VPmm_oXtRWsQ8bYmA_Zn9ejqwbFka6AJDIUtnBw8M9atuzcSVYseiAe96NgU-_JZpePFX4RFFDGYxvi3YhEZUY-Taxv1P7ESrUT92ahz5pJF1S9gnohdOzrmYXh5KH1gt9en6v1Om1GNiPnDVY8lZo/s320/shrimp%20butter%20rice.jpg",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=ou1mudzgt2PkUMqWVjFsI&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_XOtUf0gxQ0GdQOYei4GTN"
  },
  {
    id: "10",
    name: "Turkey Mozzarella Panini",
    description: "Turkey ham, mozzarella and herbs, pressed till golden",
    price: "₦ 15,500",
    category: "Sandwiches",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJjyE6aqPkRrM8Gd5gR5t7e6ZCaoFSfXV8SEi2ABx5gqoGHW8iCGH9h64EF5o9i-Z58jQ2D9iggYOvFUWXg4P8U9PTGnzMY6YshchYrljK0cB_hk2-knVABeEOOg-Az6VTkSNR8fgTUvPit9e7rOp0gx2p9XSdITrghOf0FT6419fBMP6nuE57gKtou3SB/s320/Turkey%20and%20mozzarella.jpg",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=ou1mudzgt2PkUMqWVjFsI&menu_id=RTR20063JvJhPwZ7xLiaW&menu_layout=LIST&modal_id=product_QYY1LVb13mf7LaA934WLf"
  },
  {
    id: "11",
    name: "Sex on the beach",
    description: "A premium blend of Vodka, peach schnapps, cranberry juice, and orange juice.",
    price: "₦ 14,500",
    category: "Drinks",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiffO_PlTUEYhOSqQszbJAfg7OIE169ZkxuMrP1hBSg8LsWm8nYysZh4vJ8qHwlo3EYRwk9FVtOaVg2OjQG-JIIMMwmmI3zcb5AMWaVPj_SMBTs5oBxu_SRoB_KUGJFD-AjQ6qNK_gIPy66l6X1LFpsAZJ4kNKgmvtPnCiHxMmEML1QprFeNnKES4mNWCac/s320/Sex%20on%20the%20beach.png",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=tGJSlNsPIsoIvV7J6N46u&menu_id=87f8yWpF6XXh39fqr1nfK&menu_layout=LIST&modal_id=product_ZaIbkAngP5812szDmi7eA"
  },
  {
    id: "12",
    name: "Matcha Milkshake",
    description: "Creamy milkshake blended with premium Japanese ceremonial matcha green tea.",
    price: "₦ 11,000",
    category: "Drinks",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjU9hyphenhyphenxZ102jO5zwiD6LOrj4OI3cBBQ7ezowMCJmqGCM2SAT5TxBbVtakMCTV0NENxlawBHrQgFNkc5xW6zRpohqzsOpv4GEJwd4YiVORMPA3gkRZvQ4eC4N884Bw2_5Z3jAmGHRNwISIisVs8fWLDRCAEZixe9zCZZytLEfrfRHXanh8Bv07A0rERhaeGM/s320/Matcha%20Milkshake.png",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=VAMq8zaBiQwdvy6TZ2o1M&menu_id=87f8yWpF6XXh39fqr1nfK&menu_layout=LIST&modal_id=product_itF4ivlOXJPN4LFw2rptg"
  },
  {
    id: "13",
    name: "Cappuccino",
    description: "Rich espresso topped with a smooth, velvety layer of hot milk foam.",
    price: "₦ 8,000",
    category: "Drinks",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigd3eQ1U4kE-ZFhax36j_QzxT7InpXXyJlyhEDFIt62vHz_ArFr0qNTB3h77kdoTrMRli_kjQyWdLpp56_eO61ooTtmmr5RhR5tRqXhyJQRiDPTnWAFpDiZAioRAhl8kIfQpH4r5U2VwzEZFTK2xOwPL2Flwl1_MLf8IZzT7UzTRaCBLbHvihN9f6xw1Vj/s320/Cappuccino.png",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=rnoz42a7CWEveRFC4P6AQ&menu_id=87f8yWpF6XXh39fqr1nfK&menu_layout=LIST&modal_id=product_purgKPe9OkvyViGGkOJTY"
  },
  {
    id: "14",
    name: "The Hulk",
    description: "Fresh Mint Leaves, Ginger, Apple, Pineapple, Lemon Juice, Cucumber, Apple Cider, Honey",
    price: "₦ 13,000",
    category: "Drinks",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijY9zhI3paTDQotAWGx-oBVwntOFlW9jxUF2Gznh4B27WoDxvgAjukXqkybqcbHR5nyLDG4j_0VXILe7xnVZpXuvFKCTgDdEO7F2BJ3z1q4P-cbb0NNVmT8TICqr-s2upV9SmDf-khoFjInz1Mxvcxu0hVINeO7w1lYlDSZ0Rd5of3LwplkriSTTAEKF4S/s320/the%20hulk.jpg",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=M05Jz3EpZCUu214RcUV8P&menu_id=87f8yWpF6XXh39fqr1nfK&menu_layout=LIST&modal_id=product_5Bz93JIwsNKBGJGxAMDY4"
  },
  {
    id: "15",
    name: "Classic Kiwi",
    description: "Refreshing kiwi blend with light sweet elements",
    price: "₦ 14,000",
    category: "Drinks",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUNoJlXE1giIOe6FfrQ2MHSsKhaZqEu86GWnNDeyqJRP3fVDlxt_t3OWoZS_okpIb0qQaTDuUXtKZNaKlQK1eIHUYqZTU7dMX7nSFc_CPhFn3vJ13WrKYjpZzKWmnBbhNiXBADZgKZVXPbtlXbozHTlbcZ18X9S7uZ4V-Xh5rvBEm94G0kEZCq3arpUtVw/s320/kiwi.jpg",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=M05Jz3EpZCUu214RcUV8P&menu_id=87f8yWpF6XXh39fqr1nfK&menu_layout=LIST&modal_id=product_U0URIpaMOvL8aZy4cJ8wh"
  },
  {
    id: "16",
    name: "Long Island Iced Tea",
    description: "Vodka, gin, bacardi, tequila, triple sec, lemon juice, splash of cola",
    price: "₦ 15,000",
    category: "Drinks",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwq-vDbJl_9ZWjSy_QshlhRKXpPmve3MltT8wJPppdH4G9BnsJi3qYNUUzxX8um99dvKEHoV2CVjUCM5z5Zr2h1wS9tUhPQHPEJy97D6oTvuv2WIcPRE3tVP3vrJw93kr5_1dHEQXKFxZbpmVNDM6Xtg2dOsymyaFSh_W7W53f8LNWWdUQ3_MgmjfB7-yE/s320/long%20island.jpg",
    zappieUrl: "https://app.zappie.ai/order/purplejasmine/ikoyi?category_id=tGJSlNsPIsoIvV7J6N46u&menu_id=87f8yWpF6XXh39fqr1nfK&menu_layout=LIST&modal_id=product_5txd2YMg0QZAiin8zkKOW"
  }
];
