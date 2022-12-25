import {View, Text} from 'react-native';
import React from 'react';
import RouteApp from './SRC/Screens/RouteApp';
import {Provider} from 'react-redux';
import {store} from './SRC/Store/Redux/store';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <RouteApp />
      </Provider>
    </View>
  );
};

export default App;


// import React, {Component} from 'react';
// import {SafeAreaView, StatusBar, View} from 'react-native';
// import AdsRouter from './SRC/src/AdsRouter';
// import {Provider} from 'react-redux';
// import {store} from './SRC/src/redux/Store';

// export class App extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, backgroundColor: 'blue'}}>
//         <Provider store={store}>
//           <AdsRouter />
//         </Provider>
//       </View>
//     );
//   }
// }

// export default App;
