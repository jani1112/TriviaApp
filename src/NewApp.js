// import { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import  './App.css';
import App from './App';

export default function NewApp () {


  return (
    <div>
      <SplitPane split='vertical' minSize={50}>
        <Pane >
          <div>
            pane1
          </div>
        </Pane>
        <div>
          <App/>
          </div>
      </SplitPane>
    </div>
  );
};