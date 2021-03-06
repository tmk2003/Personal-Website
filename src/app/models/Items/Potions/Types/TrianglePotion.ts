import {Potion} from "../Potion";
import { PotionColor } from "../../../../enums/Potions/PotionColor";
import { ImageRoutes } from "src/app/constants/ImageRoutes";


/**
 * A yellow potion
 */
export class TrianglePotion extends Potion {
  /**
   * Creates the default Blue Potion and sets the required name and resource name
   * @param color is the color within this potion
   */
  constructor(color: PotionColor) {
    super(ImageRoutes.TRIANGLE + color, "Mana Potion");
    this.color = color;
  }

}
