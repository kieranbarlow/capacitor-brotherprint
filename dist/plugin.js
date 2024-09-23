var BrotherPrint = (function (exports, core) {
    'use strict';

    class BrotherPrintWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'BrotherPrint',
                platforms: ['web'],
            });
        }
        /**
         * Print with Base64
         */
        async printImage(_options) {
            return {
                value: true,
            };
        }
        /**
         * Search Wifi Printer
         */
        async searchWiFiPrinter() { }
        /**
         * search Bluetooth Printer
         */
        async searchBLEPrinter() { }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BrotherPrintWeb: BrotherPrintWeb
    });

    const BrotherPrint = core.registerPlugin('BrotherPrint', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BrotherPrintWeb()),
    });

    exports.BrotherPrint = BrotherPrint;
    exports.BrotherPrintWeb = BrotherPrintWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map