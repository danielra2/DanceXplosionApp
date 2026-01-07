import type { mouseInteractionCallBack } from '@amplitude/rrweb-types';
import { Mirror } from '../utils/rrweb';
import { SessionReplayEventsManager as AmplitudeSessionReplayEventsManager } from '../typings/session-replay';
import { PayloadBatcher } from '../track-destination';
import { ILogger } from '@amplitude/analytics-core';
import { UGCFilterRule, InteractionPerformanceConfig } from '../config/types';
import { ScrollWatcher } from './scroll';
export type ClickEvent = {
    timestamp: number;
    x: number;
    y: number;
    viewportWidth: number;
    viewportHeight: number;
    pageUrl: string;
    selector?: string;
    type: 'click';
};
export type ClickEventWithCount = ClickEvent & {
    count: number;
};
type Context = {
    sessionId: string | number;
    deviceIdFn: () => string | undefined;
    eventsManager: AmplitudeSessionReplayEventsManager<'interaction', string>;
    mirror: Mirror;
    ugcFilterRules: UGCFilterRule[];
    performanceOptions?: InteractionPerformanceConfig;
};
export declare const clickNonBatcher: PayloadBatcher;
export declare const clickBatcher: PayloadBatcher;
export declare class ClickHandler {
    private readonly logger;
    private readonly scrollWatcher;
    constructor(logger: ILogger, scrollWatcher: ScrollWatcher);
    createHook: (context: Context) => mouseInteractionCallBack;
}
export {};
//# sourceMappingURL=click.d.ts.map