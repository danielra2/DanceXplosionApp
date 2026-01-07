import { __assign } from "tslib";
import { MouseInteractions } from '@amplitude/rrweb-types';
import { finder } from '../libs/finder';
import { getGlobalScope } from '@amplitude/analytics-core';
import { getPageUrl } from '../helpers';
var HOUR_IN_MILLISECONDS = 3600000;
export var clickNonBatcher = function (_a) {
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
export var clickBatcher = function (_a) {
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
            prev[k] = __assign(__assign({}, curr), { timestamp: hour, count: 1 });
        }
        else {
            prev[k].count += 1;
        }
        return prev;
    }, {});
    return { version: version, events: Object.values(reduced) };
};
var ClickHandler = /** @class */ (function () {
    function ClickHandler(logger, scrollWatcher) {
        var _this = this;
        this.createHook = function (_a) {
            var eventsManager = _a.eventsManager, sessionId = _a.sessionId, deviceIdFn = _a.deviceIdFn, mirror = _a.mirror, ugcFilterRules = _a.ugcFilterRules, performanceOptions = _a.performanceOptions;
            return function (e) {
                if (e.type !== MouseInteractions.Click) {
                    return;
                }
                var globalScope = getGlobalScope();
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
                        selector = finder(node, performanceOptions);
                    }
                    catch (err) {
                        _this.logger.debug('error resolving selector from finder');
                    }
                }
                var pageUrl = getPageUrl(location.href, ugcFilterRules);
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
export { ClickHandler };
//# sourceMappingURL=click.js.map