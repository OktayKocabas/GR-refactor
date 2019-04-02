"use strict";

let items;

describe("GildedRose", function() {
  beforeEach(function() {
    items = [];
  });

  it("decreases by 1 the quality and remaining sell_in days of 'regular items' ", function() {
    items.push(new Item("+5 Dexterity Vest", 10, 20));
    items.push(new Item("Conjured Mana Cake", 3, 6));

    const gRose = new GildedRose(items);
    gRose.updateQuality();

    const expected = [{ sell_in: 9, quality: 19 }, { sell_in: 2, quality: 5 }];
    expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sell_in).toBe(testCase.sell_in);
    });
  });

  it("increases the quality by one, of the products that get better as they age", function () {
    items.push(new Item("Aged Brie", 20, 30));
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30));
    const gRose = new GildedRose(items);
    gRose.updateQuality();

    var expected = [{ sell_in: 19, quality: 31 }, { sell_in: 19, quality: 31 }];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sell_in).toBe(testCase.sell_in);
    });
  });

  it("increases the quality of Backstage Passes by two, of the products that get better as they age, when there are 10 days or less left", function () {
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 8, 30));
    const gRose = new GildedRose(items);
    gRose.updateQuality();

    var expected = [{ sell_in: 7, quality: 32 }];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sell_in).toBe(testCase.sell_in);
    });
  });

  it("increases the quality of Backstage Passes by three, of the products that get better as they age, when there are 5 days or less left", function () {
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 15));
    const gRose = new GildedRose(items);
    gRose.updateQuality();

    var expected = [{ sell_in: 4, quality: 18 }];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sell_in).toBe(testCase.sell_in);
    });
  });

  it("decreases the quality and the sell_in of the produts twice as fast when we have passed the sell_in date", function () {
    items.push(new Item("+5 Dexterity Vest", 0, 20));
    items.push(new Item("Conjured Mana Cake", 0, 6));
    const gRose = new GildedRose(items);
    gRose.updateQuality();

    var expected = [{ sell_in: -1, quality: 18 }, { sell_in: -1, quality: 4 }];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sell_in).toBe(testCase.sell_in);
    });
  });

  it("updates the quality of Backstage Passes to zero when we have passed the sell_in date", function () {
    items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20));
    const gRose = new GildedRose(items);
    gRose.updateQuality();

    var expected = [{ sell_in: -1, quality: 0 }];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sell_in).toBe(testCase.sell_in);
    });
  });

  it("does not alter the quality of 'Sulfuras', wich is always 80", function () {
    items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
    const gRose = new GildedRose(items);
    gRose.updateQuality();

    expect(items[0].quality).toBe(80);
    expect(items[0].sell_in).toBe(0);
  });

  it("does not increase quality over 50", function () {
    items.push(new Item("Aged Brie", 4, 49));
    const gRose = new GildedRose(items);
    gRose.updateQuality();

    expect(items[0].quality).toBe(50);
    expect(items[0].sell_in).toBe(3);
  });
});
