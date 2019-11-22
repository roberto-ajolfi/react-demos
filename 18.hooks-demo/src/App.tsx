import React, { useState } from 'react';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import AppStyles from './Styles';
import { withStyles } from '@material-ui/styles';

const App: React.FC = (props: any) => {
  const { classes } = props;
  const [showClassComponent, setShowClassComponent] = useState(true);
  const [showFunctionComponent, setShowFunctionComponent] = useState(true);

  const classComponent = showClassComponent && 
  (
    <ClassComponent>
      <h3>Class Component</h3>
    </ClassComponent>
  )

  const functionComponent = showFunctionComponent && 
  (
    <FunctionComponent>
      <h3>Function Component</h3>
    </FunctionComponent>
  )

  return (
    <div className={classes.app}>
      <div>
        <button onClick={() => setShowClassComponent(!showClassComponent)}>Toggle ClassComponent</button>&nbsp;&nbsp;
        <button onClick={() => setShowFunctionComponent(!showFunctionComponent)}>Toggle FunctionComponent</button>
      </div>
      <div>&nbsp;</div>
      {classComponent}
      {functionComponent}
    </div>
  );
}

//export default App;
export default withStyles(AppStyles)(App);