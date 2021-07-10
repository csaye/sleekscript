import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import { Controlled } from 'react-codemirror2';

import styles from './Editor.module.css';

export default function Editor() {
  const [code, setCode] = useState('');

  return (
    <div className={styles.container}>
      <Controlled
        value={code}
        onBeforeChange={(e, d, v) => setCode(v)}
        options={{
          lineWrapping: true,
          mode: 'javascript',
          theme: 'material'
        }}
      />
      <Controlled
        value={code}
        options={{
          lineWrapping: true,
          mode: 'javascript',
          theme: 'material'
        }}
      />
    </div>
  );
}
