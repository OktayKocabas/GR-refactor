"use strict ";
(function(exports) {
  function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }

  var items = [];
  class GildedRose {
    _MIN_LIMIT;
    _MAX_LIMIT;
    _items;

    constructor(items) {
      this._MAX_LIMIT = 50;
      this._MIN_LIMIT = 0;
      this._items = items;
    }

    _manageItem(item) {
      return ItemFactory(item).getItem(item);
    }

    get minLimit() {
      return this._MIN_LIMIT;
    }

    hasReachedLowestQualityValue(item) {
      return item.quality < this._MIN_LIMIT;
    }

    hasReachedHighestQualityValue(item) {
      return item.quality > QualityValue.highestValuePossible(item);
    }

    updateQuality() {
      for (let item of this._items) {
        this._manageItem(item).updateState();
        if (this.hasReachedLowestQualityValue(item)) {
          item.quality = this.minLimit();
        } else if (this.hasReachedHighestQualityValue(item)) {
          item.quality = QualityValue.highestValuePossible(item);
        }
      }
    }
  }

  exports.GildedRose = GildedRose;
  exports.Item = Item;
})(this);
