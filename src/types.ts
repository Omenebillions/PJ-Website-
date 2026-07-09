export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "Meals" | "Sandwiches" | "Drinks" | "Specials" | "Brunch";
  image?: string;
  zappieUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}
