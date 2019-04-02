"use strict";

(function(exports) {
  class QualityValue {
    static highestValuePossible(item) {
      if (item.name === ItemFactory(item).typeName()) {
        return 80;
      }
      return 50;
    }
  }
  exports.QualityValue = QualityValue;
})(this);
