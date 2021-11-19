class PropertyManager {
  /**
   * Get value or default if property is undefined
   * @param property property to check
   * @param defaultVal default value
   */
  static getValueOrDefault = <T>(property: T, defaultVal: T): T => {
    let retProperty = property;
    if (typeof property === "undefined") {
      retProperty = defaultVal;
    }
    return retProperty;
  };

  /**
   * Check if an object is null or undefined
   */
  static isDefined = (value: any) =>
    value !== null && typeof value !== "undefined";

  /**
   * hasProperty
   */
  static hasProperty = (obj: any, propertyName: string) => {
    if (
      !PropertyManager.isDefined(obj) ||
      !PropertyManager.isDefined(propertyName)
    ) {
      return false;
    }
    const postDot = propertyName.indexOf(".");
    if (postDot === -1) {
      return Object.prototype.hasOwnProperty.call(obj, propertyName);
    }

    if (postDot > 0 && postDot < propertyName.length - 1) {
      return Object.prototype.hasOwnProperty.call(
        obj,
        propertyName.substring(0, postDot)
      );
    }
    console.log(`Invalid use PropertyManager.hasProperty [${propertyName}]`);
    return false;
  };

  /**
   * get value of a property (for object you can use also dot in property name)
   */
  static getValue(model: any, propertyName: any): any {
    if (!model) {
      throw new Error("PropertyManager.getValue model is undefined");
    }
    if (!propertyName) {
      throw new Error("PropertyManager.getValue propertyName is undefined");
    }
    const postDot = propertyName.indexOf(".");
    if (postDot === -1) {
      return model[propertyName];
    }
    if (postDot > 0 && postDot < propertyName.length - 1) {
      const propFirstBlock = propertyName.substring(0, postDot); // 1 is len of "."
      const propSecondBlock = propertyName.substring(
        postDot + 1,
        propertyName.length
      );
      const subModel = model[propFirstBlock];
      // When subModel is null then return default value
      // manage error that prevents from rendering slots
      if (subModel) {
        return PropertyManager.getValue(subModel, propSecondBlock);
      }
      return "";
    }
    throw new Error(`PropertyManager.hasProperty [${propertyName}]`);
  }
}

export default PropertyManager;
