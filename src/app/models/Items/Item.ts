export class Item {
  protected imagePath: string;
  protected name: string;

  constructor(imagePath: string, name: string) {
    this.imagePath = imagePath;
    this.name = name;
  }

  public getImagePath(): string {
    return this.imagePath;
  }

  public getNamePath(): string {
    return this.name;
  }
}