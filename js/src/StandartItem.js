"use strict";

(function(exports) {
  const _decreaseSellByDayValueByOne = Symbol("_decreaseSellByDayValueByOne");

  const _sellByDayValueIsOverZero = Symbol("_sellByDayValueIsOverZero");
  const _decreaseQualityBy = Symbol("_decreaseQualityBy");
  const _decreasingValueForZeroOrLessDaysToSell = Symbol(
    "_decreasingValueForZeroOrLessDaysToSell"
  );

  class StandardItem {
    _item;

    constructor(item) {
      this._item = item;
    }

    updateState() {
      this[_decreaseSellByDayValueByOne]();
      if (this[_sellByDayValueIsOverZero]()) {
        this[_decreaseQualityBy](this.decreasingValueOverZeroDaysToSell());
      } else {
        this[_decreaseQualityBy](this[_decreasingValueForZeroOrLessDaysToSell]());
      }
    }

    decreasingValueOverZeroDaysToSell() {
      return 1;
    }

    [_decreaseSellByDayValueByOne]() {
      this._item.sell_in -= 1;
    }

    [_sellByDayValueIsOverZero]() {
      return this._item.sell_in > 0;
    }

    [_decreaseQualityBy](qualityValue) {
      this._item.quality -= qualityValue;
    }

    [_decreasingValueForZeroOrLessDaysToSell]() {
      return this.decreasingValueOverZeroDaysToSell() * 2;
    }
  }

  exports.StandardItem = StandardItem;
})(this);
