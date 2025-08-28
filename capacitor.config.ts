import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e3fd8fe301004d7c968223effc7a4278',
  appName: 'terapiapalvelu-yhdistaja',
  webDir: 'dist',
  server: {
    url: 'https://e3fd8fe3-0100-4d7c-9682-23effc7a4278.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;