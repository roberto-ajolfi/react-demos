import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './SimpleForm';
import FullForm from './FullForm';


import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import ValidatedForm from './ValidatedForm';

const reducer = combineReducers({
  form: reduxFormReducer
});

const store = createStore(reducer);

const showResults = (values: any) =>
  new Promise(resolve => {
    setTimeout(() => {
      // delayed for Test purposes
      const attachmentCount = values.attachment !== undefined && values.attachment.length;
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}\n\n(Attachments: ${attachmentCount})`);
      resolve();
    }, 500);
  });

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <SimpleForm onSubmit={showResults} /> */} {/* message="Hello Rob!" /> */}
          {/* <FullForm onSubmit={showResults} /> */}
          <ValidatedForm onSubmit={showResults}></ValidatedForm>
        </header>
      </div>
    </Provider>
  );
};

export default App;
