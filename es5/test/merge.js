"use strict";
var $__traceur_64_0_46_0_46_7__,
    $___46__46__47_lib_47_merge_46_js__,
    $__chai__;
($__traceur_64_0_46_0_46_7__ = require("traceur"), $__traceur_64_0_46_0_46_7__ && $__traceur_64_0_46_0_46_7__.__esModule && $__traceur_64_0_46_0_46_7__ || {default: $__traceur_64_0_46_0_46_7__});
var merge = ($___46__46__47_lib_47_merge_46_js__ = require("../lib/merge.js"), $___46__46__47_lib_47_merge_46_js__ && $___46__46__47_lib_47_merge_46_js__.__esModule && $___46__46__47_lib_47_merge_46_js__ || {default: $___46__46__47_lib_47_merge_46_js__}).merge;
var chai = ($__chai__ = require("chai"), $__chai__ && $__chai__.__esModule && $__chai__ || {default: $__chai__}).default;
var should = chai.should();
var object1 = {
  'foo': 'foo value',
  'bar': 'bar value'
};
var object2 = {
  'bar': 'override bar',
  'baz': 'baz value'
};
describe('basic merge test', function() {
  it('should merge correctly', function() {
    var mergedObject = merge([object1, object2]);
    mergedObject.foo.should.equal('foo value');
    mergedObject.bar.should.equal('override bar');
    mergedObject.baz.should.equal('baz value');
    object1.bar.should.equal('bar value');
    object2.bar.should.equal('override bar');
  });
});
