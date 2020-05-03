import React, {useState} from 'react';
import A from './components/A';
import B from './components/B';
import {sub, pub} from './components/pubsub';

function App() {

  let [text, setText] = useState("");

  function handlePub() {
    pub(text);
  }

  function onChangeText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <button onClick={handlePub}>pub a text</button>
      <input onChange={onChangeText} value={text} />
      <A />
      <B />

      <a href="https://github.com/stevemu/pub-sub-demo">source code</a>
    </div>
  );
}

export default App;
