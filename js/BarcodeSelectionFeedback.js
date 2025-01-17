"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeSelectionFeedback = void 0;
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var BarcodeSelectionDefaults_1 = require("./private/BarcodeSelectionDefaults");
var BarcodeSelectionFeedback = /** @class */ (function (_super) {
    __extends(BarcodeSelectionFeedback, _super);
    function BarcodeSelectionFeedback() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selection = BarcodeSelectionDefaults_1.BarcodeSelectionDefaults.Feedback.selection;
        return _this;
    }
    Object.defineProperty(BarcodeSelectionFeedback, "default", {
        get: function () {
            return new BarcodeSelectionFeedback();
        },
        enumerable: false,
        configurable: true
    });
    return BarcodeSelectionFeedback;
}(Serializeable_1.DefaultSerializeable));
exports.BarcodeSelectionFeedback = BarcodeSelectionFeedback;
//# sourceMappingURL=BarcodeSelectionFeedback.js.map