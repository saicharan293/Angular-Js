import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      img: "https://example.com/images/johndoe.jpg",
      address: {
        street: "123 Main St",
        suite: "Apt. 1",
        city: "Anytown",
        zipcode: "12345",
        geo: {
          lat: "40.7128",
          lng: "-74.0060"
        }
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      img: "https://example.com/images/janesmith.jpg",
      address: {
        street: "456 Oak St",
        suite: "Suite 200",
        city: "Othertown",
        zipcode: "67890",
        geo: {
          lat: "34.0522",
          lng: "-118.2437"
        }
      }
    },
    {
      id: 3,
      name: "Mike Johnson",
      username: "mikejohnson",
      email: "mike.johnson@example.com",
      img: "https://example.com/images/mikejohnson.jpg",
      address: {
        street: "789 Pine St",
        suite: "Unit 5",
        city: "Somewhere",
        zipcode: "10101",
        geo: {
          lat: "37.7749",
          lng: "-122.4194"
        }
      }
    },
    {
      id: 4,
      name: "Emily Davis",
      username: "emilydavis",
      email: "emily.davis@example.com",
      img: "https://example.com/images/emilydavis.jpg",
      address: {
        street: "101 Maple St",
        suite: "Floor 3",
        city: "Anycity",
        zipcode: "20202",
        geo: {
          lat: "51.5074",
          lng: "-0.1278"
        }
      }
    },
    {
      id: 5,
      name: "David Brown",
      username: "davidbrown",
      email: "david.brown@example.com",
      img: "https://example.com/images/davidbrown.jpg",
      address: {
        street: "202 Elm St",
        suite: "Apt. 10",
        city: "Everytown",
        zipcode: "30303",
        geo: {
          lat: "48.8566",
          lng: "2.3522"
        }
      }
    }
  ];
  
}
