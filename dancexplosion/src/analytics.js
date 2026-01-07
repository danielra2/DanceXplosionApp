import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

// Replace 'YOUR_FICTIONAL_API_KEY' with your actual key later
const AMPLITUDE_API_KEY = '71877f985de6e4b8c8fb11ae17a76e4a';

export const initAmplitude = () => {
  amplitude.init(AMPLITUDE_API_KEY, undefined, {
    defaultTracking: {
      pageViews: true,        // Tracks when users view different pages
      sessions: true,         // Tracks how long users stay on the site
      formInteractions: true, // Tracks form starts/submissions (like your signup form)
    },
    autocapture: {
      elementInteractions: true, // Tracks all button and link clicks automatically
    }
  });

  // Initialize Session Replay to watch user behavior
  const sessionReplayTracking = sessionReplayPlugin({
    sampleRate: 1.0, // 1.0 captures 100% of sessions (use a lower number in production)
  });

  amplitude.add(sessionReplayTracking);
};