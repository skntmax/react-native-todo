/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { configureFonts, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStore } from 'redux';
import store from './Redux/store';
import { Provider } from 'react-redux';
const fontConfig = {
  customVariant: {
    fontFamily: Platform.select({
      web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'System',
      default: 'sans-serif',
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  }
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({config: fontConfig}),
};




export default function Main() {
    return (
      <Provider store={store}>
      <PaperProvider  theme={theme} >
      <App />
      </PaperProvider>
      </Provider>
    );
  }


AppRegistry.registerComponent(appName, () => Main);
