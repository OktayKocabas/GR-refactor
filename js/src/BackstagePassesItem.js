'use strict';

;(function(exports) {
  const _decreaseSellByDayValueByOne = Symbol("_decreaseSellByDayValueByOne");
  const _sellByDayValueIsOver = Symbol("_sellByDayValueIsOver");
  const _increaseQualityBy = Symbol("_increaseQualityBy");
  const _dropQualityToZero = Symbol("_dropQualityToZero");

  class BackstagePassesItem {
    _item;
    constructor(item) {
      this._item = item;
    }

    [_decreaseSellByDayValueByOne]() {
      this._item.sell_in -= 1;
    }

    [_sellByDayValueIsOver](dayNumber) {
      return this._item.sell_in > dayNumber;
    }

    [_increaseQualityBy](qualityValue) {
      this._item.quality += qualityValue;
    }

    [_dropQualityToZero]() {
      this._item.quality = 0;
    }

    updateState() {
      this[_decreaseSellByDayValueByOne]();
      if (this[_sellByDayValueIsOver](10)) {
        this[_increaseQualityBy](1);
      } else if (this[_sellByDayValueIsOver](5)) {
        this[_increaseQualityBy](2);
      } else if (this[_sellByDayValueIsOver](0)) {
        this[_increaseQualityBy](3);
      } else {
        this[_dropQualityToZero]();
      }
    }
  }
  exports.BackstagePassesItem = BackstagePassesItem;
})(this);
