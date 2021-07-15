import lex from './lexer.js';
import analyze from './analyzer.js';
import parse from './parser.js';

// compiles given sleekscript into javascript
export function compile(code) {
  const tokens = lex(code); // lex code into tokens
  const tree = analyze(tokens); // analyze tokens into syntax tree
  const js = parse(tree); // parse tree into javascript
  return js; // return parsed javascript
}
