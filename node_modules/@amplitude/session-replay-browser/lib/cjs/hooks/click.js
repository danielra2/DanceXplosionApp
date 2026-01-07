"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickHandler = exports.clickBatcher = exports.clickNonBatcher = void 0;
var tslib_1 = require("tslib");
var rrweb_types_1 = require("@amplitude/rrweb-types");
var finder_1 = require("../libs/finder");
var analytics_core_1 = require("@amplitude/analytics-core");
var helpers_1 = require("../helpers");
var HOUR_IN_MILLISECONDS = 3600000;
var clickNonBatcher = function (_a) {
    var version = _a.version, events = _a.events;
    var clickEvents = [];
    events.forEach(function (evt) {
        var record = JSON.parse(evt);
        record.count = 1;
        if (record.type === 'click') {
            clickEvents.push(record);
        }
    });
    return { version: version, events: clickEvents };
};
exports.clickNonBatcher = clickNonBatcher;
var clickBatcher = function (_a) {
    var version = _a.version, events = _a.events;
    var clickEvents = [];
    events.forEach(function (evt) {
        var record = JSON.parse(evt);
        if (record.type === 'click') {
            clickEvents.push(record);
        }
    });
    var reduced = clickEvents.reduce(function (prev, curr) {
        var x = curr.x, y = curr.y, selector = curr.selector, timestamp = curr.timestamp;
        // round down to nearest hour.
        var hour = timestamp - (timestamp % HOUR_IN_MILLISECONDS);
        var k = "".concat(x, ":").concat(y, ":").concat(selector !== null && selector !== void 0 ? selector : '', ":").concat(hour);
        if (!prev[k]) {
            prev[k] = tslib_1.__assign(tslib_1.__assign({}, curr), { timestamp: hour, count: 1 });
        }
        else {
            prev[k].count += 1;
        }
        return prev;
    }, {});
    return { version: version, events: Object.values(reduced) };
};
exports.clickBatcher = clickBatcher;
var ClickHandler = /** @class */ (function () {
    function ClickHandler(logger, scrollWatcher) {
        var _this = this;
        this.createHook = function (_a) {
            var eventsManager = _a.eventsManager, sessionId = _a.sessionId, deviceIdFn = _a.deviceIdFn, mirror = _a.mirror, ugcFilterRules = _a.ugcFilterRules, performanceOptions = _a.performanceOptions;
            return function (e) {
                if (e.type !== rrweb_types_1.MouseInteractions.Click) {
                    return;
                }
                var globalScope = (0, analytics_core_1.getGlobalScope)();
                if (!globalScope) {
                    return;
                }
                var location = globalScope.location, innerHeight = globalScope.innerHeight, innerWidth = globalScope.innerWidth;
                // it only makes sense to send events if a pageUrl exists
                if (!location) {
                    return;
                }
                var x = e.x, y = e.y;
                if (x === undefined || y === undefined) {
                    return;
                }
                var node = mirror.getNode(e.id);
                var selector;
                if (node) {
                    try {
                        selector = (0, finder_1.finder)(node, performanceOptions);
                    }
                    catch (err) {
                        _this.logger.debug('error resolving selector from finder');
                    }
                }
                var pageUrl = (0, helpers_1.getPageUrl)(location.href, ugcFilterRules);
                var event = {
                    x: x + _this.scrollWatcher.currentScrollX,
                    y: y + _this.scrollWatcher.currentScrollY,
                    selector: selector,
                    viewportHeight: innerHeight,
                    viewportWidth: innerWidth,
                    pageUrl: pageUrl,
                    timestamp: Date.now(),
                    type: 'click',
                };
                var deviceId = deviceIdFn();
                if (deviceId) {
                    eventsManager.addEvent({ sessionId: sessionId, event: { type: 'interaction', data: JSON.stringify(event) }, deviceId: deviceId });
                }
            };
        };
        this.logger = logger;
        this.scrollWatcher = scrollWatcher;
    }
    return ClickHandler;
}());
exports.ClickHandler = ClickHandler;
//# sourceMappingURL=click.js.map