export class Product {
  constructor(id, category, image, productname, description, cost, isHidden) {
    this.id = id;
    this.category = category;
    this.image = image;
    this.name = productname;
    this.description = description;
    this.cost = cost;
    this.isHidden = isHidden;
  }
}
