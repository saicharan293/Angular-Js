import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products = [
    {
      id: 1,
      name: "Men's T-Shirt",
      img: "https://example.com/images/mens_tshirt.jpg",
      price: 19.99,
      category: "men"
    },
    {
      id: 2,
      name: "Women's Dress",
      img: "https://example.com/images/womens_dress.jpg",
      price: 49.99,
      category: "women"
    },
    {
      id: 3,
      name: "Smartphone",
      img: "https://example.com/images/smartphone.jpg",
      price: 299.99,
      category: "electronics"
    },
    {
      id: 4,
      name: "Gold Necklace",
      img: "https://example.com/images/gold_necklace.jpg",
      price: 199.99,
      category: "jewellary"
    },
    {
      id: 5,
      name: "Men's Jeans",
      img: "https://example.com/images/mens_jeans.jpg",
      price: 39.99,
      category: "men"
    },
    {
      id: 6,
      name: "Women's Handbag",
      img: "https://example.com/images/womens_handbag.jpg",
      price: 89.99,
      category: "women"
    },
    {
      id: 7,
      name: "Laptop",
      img: "https://example.com/images/laptop.jpg",
      price: 799.99,
      category: "electronics"
    },
    {
      id: 8,
      name: "Diamond Ring",
      img: "https://example.com/images/diamond_ring.jpg",
      price: 999.99,
      category: "jewellary"
    },
    {
      id: 9,
      name: "Men's Jacket",
      img: "https://example.com/images/mens_jacket.jpg",
      price: 69.99,
      category: "men"
    },
    {
      id: 10,
      name: "Women's Shoes",
      img: "https://example.com/images/womens_shoes.jpg",
      price: 59.99,
      category: "women"
    },
    {
      id: 11,
      name: "Tablet",
      img: "https://example.com/images/tablet.jpg",
      price: 199.99,
      category: "electronics"
    },
    {
      id: 12,
      name: "Silver Bracelet",
      img: "https://example.com/images/silver_bracelet.jpg",
      price: 79.99,
      category: "jewellary"
    },
    {
      id: 13,
      name: "Men's Sneakers",
      img: "https://example.com/images/mens_sneakers.jpg",
      price: 49.99,
      category: "men"
    },
    {
      id: 14,
      name: "Women's Blouse",
      img: "https://example.com/images/womens_blouse.jpg",
      price: 29.99,
      category: "women"
    },
    {
      id: 15,
      name: "Headphones",
      img: "https://example.com/images/headphones.jpg",
      price: 99.99,
      category: "electronics"
    },
    {
      id: 16,
      name: "Pearl Earrings",
      img: "https://example.com/images/pearl_earrings.jpg",
      price: 49.99,
      category: "jewellary"
    },
    {
      id: 17,
      name: "Men's Watch",
      img: "https://example.com/images/mens_watch.jpg",
      price: 129.99,
      category: "men"
    },
    {
      id: 18,
      name: "Women's Skirt",
      img: "https://example.com/images/womens_skirt.jpg",
      price: 39.99,
      category: "women"
    },
    {
      id: 19,
      name: "Smartwatch",
      img: "https://example.com/images/smartwatch.jpg",
      price: 199.99,
      category: "electronics"
    },
    {
      id: 20,
      name: "Gold Earrings",
      img: "https://example.com/images/gold_earrings.jpg",
      price: 129.99,
      category: "jewellary"
    }
  ];
  
}
