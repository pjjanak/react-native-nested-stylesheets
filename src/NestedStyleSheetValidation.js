var invariant = require('invariant');

class NestedStyleSheetValidation {
    static validateIsNestedStyle(nestedStyles) {
        if (!__DEV__) {
            return;
        }

        // if you are nesting styles no parent element may have anything but
        // objects ({}) as children
        for (var prop in nestedStyles) {
            var styleObj = nestedStyles[prop];
            if (Object.prototype.toString.call(styleObj) !== '[object Object]') {
                styleError('"' + styleObj + '" is not a plain Javascript object', prop,
                  'StyleSheet ' + prop, 'Parents of nested styles can only have plain '
                  + 'Javascript objects ({...}) as children');
            }
        }
    }
}

var styleError = function(message1, style, caller?, message2?) {
    invariant(
        false,
        message1 + '\n' + (caller || '<<unknown>>') + ': ' +
        JSON.stringify(style, null, '  ') + (message2 || '')
    );
};

module.exports = NestedStyleSheetValidation;
