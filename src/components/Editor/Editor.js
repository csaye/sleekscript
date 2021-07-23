import { useEffect, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/coffeescript/coffeescript.js';
import 'codemirror/mode/javascript/javascript.js';
import { Controlled } from 'react-codemirror2';
import { compile } from '../../sleekscript/compiler.js';

import styles from './Editor.module.css';

// delay in milliseconds for compiling
const compileDelay = 0;

// default code to be displayed
const defaultCode =
`a = yes # var a
b = a # var b
c = no # var c

if a is b then print("a is b")
if b isnt c then print("b is not c")
if a is b or a is c then print("a is b or c")

# print result
print(a and b and c)
`;

export default function Editor() {
  const [inCode, setInCode] = useState(defaultCode);
  const [outCode, setOutCode] = useState('');

  // compile code when updated
  useEffect(() => {
    const timeout = setTimeout(() => {
      const compiled = compile(inCode);
      setOutCode(compiled);
    }, compileDelay);
    return () => clearTimeout(timeout);
  }, [inCode]);

  return (
    <div className={styles.container}>
      <Controlled
        value={inCode}
        onBeforeChange={(e, d, v) => setInCode(v)}
        options={{
          lineWrapping: true,
          mode: 'coffeescript',
          theme: 'material'
        }}
      />
      <Controlled
        value={outCode}
        options={{
          lineWrapping: true,
          mode: 'javascript',
          theme: 'material'
        }}
      />
    </div>
  );
}
