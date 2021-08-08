import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//Here is where the application formally starts.
AppRegistry.registerComponent(appName, () => App);
