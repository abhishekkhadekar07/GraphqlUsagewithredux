import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import DisplayData from './component/DisplayData';
import DisplayDatar from './component/DisplayDataRedux.js';
import { Provider } from 'react-redux';
import Store from './Store';
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/"
  });
  console.log("store", Store.getState());
  return (
    <ApolloProvider client={client}>
      <Provider store={Store}>
        <div className="App">
          {/* <DisplayData/> */}
          <DisplayDatar />
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
