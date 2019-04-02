'use strict';

;(function(exports) {
  class ConjuredItem extends StandardItem {
    constructor(item) {
      super(item);
    }

    decreasingValueOverZeroDaysToSell() {
      return 2;
    }
  }

  exports.ConjuredItem = ConjuredItem;
})(this);
