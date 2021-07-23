import Editor from '../Editor/Editor.js';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';

import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>SleekScript</h1>
        <div className={styles.links}>
          <a
            href="https://github.com/csaye/sleekscript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://github.com/csaye/sleekscript#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://csaye.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PersonIcon />
          </a>
        </div>
      </div>
      <Editor />
    </div>
  );
}
