"use strict";

(function(exports) {
  const ItemFactory = item => {
    let REGISTERED_TYPES = new Map();

    const TYPES = {
      "Sulfuras, Hand of Ragnaros": SulfurasItem,
      "Aged Brie": AgedBrieItem,
      "Backstage passes to a TAFKAL80ETC concert": BackstagePassesItem,
      Conjured: ConjuredItem
    };

    if (TYPES[item.name] && item instanceof Item) {
      REGISTERED_TYPES.set(TYPES[item.name], new TYPES[item.name](item));
    }

    const factory = {
      typeName: function() {
        return item.name;
      },
      isStandardItem: function() {
        return !REGISTERED_TYPES.get(TYPES[item.name]);
      },
      getItem: function() {
        if (this.isStandardItem(item)) {
          return new StandardItem(item);
        }
        return REGISTERED_TYPES.get(TYPES[item.name]);
      }
    };

    return factory;
  };
  exports.ItemFactory = ItemFactory;
})(this);
