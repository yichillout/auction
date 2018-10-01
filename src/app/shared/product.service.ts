import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, "first product", 1.99, 2.5, "This is first product", ["food", "house"]),
    new Product(2, "second product", 2.99, 1.5, "This is second product", ["book", "education"]),
    new Product(3, "third product", 3.99, 4.5, "This is third product", ["food", "house"]),
    new Product(4, "fourth product", 4.99, 3.5, "This is fourth product", ["fashion", "phone"]),
    new Product(5, "fifth product", 5.99, 2.5, "This is fifth product", ["food", "health"]),
    new Product(6, "sixth product", 6.99, 3.5, "This is sixth product", ["book"]),
  ];

  private comments: Comment[] = [
    new Comment(1, 1, "2017-02-28 22:22:22", "Jasper", 3, "good! the first product."),
    new Comment(2, 1, "2017-02-28 22:22:22", "Jack", 2, "good! the second product."),
    new Comment(3, 1, "2017-02-28 22:22:22", "Penny", 4, "good! the third product."),
    new Comment(4, 2, "2017-02-28 22:22:22", "Mike", 5, "good! the fourth product."),
    new Comment(5, 2, "2017-02-28 22:22:22", "Jasper", 3, "good! the fifth product."),
  ];

  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }

  public getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  public getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {
  }
}