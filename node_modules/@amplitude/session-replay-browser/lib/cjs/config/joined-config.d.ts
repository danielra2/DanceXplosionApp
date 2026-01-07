import { ILogger, IRemoteConfigClient } from '@amplitude/analytics-core';
import { SessionReplayOptions } from '../typings/session-replay';
import { SessionReplayLocalConfig as ISessionReplayLocalConfig, PrivacyConfig, SessionReplayConfigs } from './types';
export declare const removeInvalidSelectorsFromPrivacyConfig: (privacyConfig: PrivacyConfig, loggerProvider: ILogger) => PrivacyConfig;
export declare class SessionReplayJoinedConfigGenerator {
    private readonly localConfig;
    private readonly remoteConfigClient;
    constructor(remoteConfigClient: IRemoteConfigClient, localConfig: ISessionReplayLocalConfig);
    generateJoinedConfig(): Promise<SessionReplayConfigs>;
}
export declare const createSessionReplayJoinedConfigGenerator: (apiKey: string, options: SessionReplayOptions) => Promise<SessionReplayJoinedConfigGenerator>;
//# sourceMappingURL=joined-config.d.ts.map