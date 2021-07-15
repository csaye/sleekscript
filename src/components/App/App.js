import Editor from '../Editor/Editor.js';
import Docs from '../Docs/Docs.js';

import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <Editor />
      <Docs />
    </div>
  );
}
