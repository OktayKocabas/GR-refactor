'use strict';

;(function(exports) {
  const _decreaseSellByDayValueByOne = Symbol("_decreaseSellByDayValueByOne");
  const _increaseQualityByOne = Symbol("_increaseQualityByOne");

  class AgedBrieItem {
    _item;

    constructor(item) {
      this._item = item;
    }

    [_decreaseSellByDayValueByOne]() {
      this._item.sell_in -= 1;
    }

    [_increaseQualityByOne]() {
      this._item.quality += 1;
    }

    updateState() {
      this[_decreaseSellByDayValueByOne]();
      this[_increaseQualityByOne]();
    }
  }
  exports.AgedBrieItem = AgedBrieItem;
})(this);
