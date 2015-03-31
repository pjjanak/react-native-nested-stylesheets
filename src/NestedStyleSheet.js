'use strict';

var StyleSheetRegistry = require('StyleSheetRegistry');
var StyleSheetValidation = require('StyleSheetValidation');

var NestedStyleSheetValidation = require('./NestedStyleSheetValidation');

class NestedStyleSheet {
  static create(obj: {[key: string]: any}): {[key: string]: number} {
        var result = {};
        for (var key in obj) {
            var styleObj = obj[key];
            var styleObjKeys = Object.keys(styleObj);

            if (Object.prototype.toString.call(styleObj[styleObjKeys[0]]) === '[object Object]') {
              NestedStyleSheetValidation.validateIsNestedStyle(styleObj);
              result[key] = NestedStyleSheet.create(styleObj);
            } else {
              StyleSheetValidation.validateStyle(key, obj);
              result[key] = StyleSheetRegistry.registerStyle(styleObj);
            }
        }
        return result;
    }
}


module.exports = NestedStyleSheet;
