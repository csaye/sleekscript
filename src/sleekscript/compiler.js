import lex from './lexer.js';
import parse from './parser.js';

// compiles given sleekscript into javascript
export function compile(code) {
  const tokens = lex(code); // lex code into tokens
  const js = parse(tokens); // parse tokens into javascript
  return js; // return parsed javascript
}
