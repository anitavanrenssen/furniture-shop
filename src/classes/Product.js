export class Product {
  constructor(
    id,
    category,
    image,
    productname,
    description,
    cost,
    imageHomePath,
    newArrival
  ) {
    this.id = id;
    this.category = category;
    this.image = image;
    this.name = productname;
    this.description = description;
    this.cost = cost;
    this.imageHomePath = imageHomePath;
    this.newArrival = newArrival;
  }
}
