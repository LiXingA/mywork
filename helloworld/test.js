(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = global || self, factory(global.test = global.test || {}));
}(this, function (exports) {
    exports.a = 12345;
    exports.b = "test require";

    Object.defineProperty(exports, '__esModule', { value: true });
}));