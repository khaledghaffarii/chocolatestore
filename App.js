import React from 'react';
import Providers from './navigation';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './store/store';
//import {createStore} from 'redux';
//const store = createStore();
// const App = () => {
//   return <Providers />;
// };

// export default App;
export default function App() {
  //console.log(store.getState());
  return (
    <StoreProvider store={store}>
      <Providers />
    </StoreProvider>
  );
}
