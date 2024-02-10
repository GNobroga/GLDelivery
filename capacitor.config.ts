import { Keyboard, KeyboardResize } from '@capacitor/keyboard';
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'GLFood',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
    },
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
