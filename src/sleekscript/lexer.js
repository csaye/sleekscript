// globals
let index = 0;
let code = undefined;
let tokens = [];

// reads comment token to newline
function readComment() {
  let comment = '';
  index += 1;
  // read to end of code
  while (index < code.length) {
    // break if newline
    if (code[index] === '\n') {
      index -= 1;
      break;
    }
    // append char to comment
    comment += code[index];
    index++;
  }
  // push comment token
  tokens.push({ type: 'comment', value: comment });
}

// reads string to end quote
function readString() {
  let string = '';
  index += 1;
  // read to end of code
  while (index < code.length) {
    // break if unescaped close quote
    if (code[index] === '"' && code[index - 1] !== '\\') break;
    // append char to string
    string += code[index];
    index += 1;
  }
  // push string token
  tokens.push({ type: 'string', value: string });
}

// processes given character in token context
function processChar(char) {
  if (char === '#') readComment();
  else if (char === '"') readString();
}

// lexes given sleekscript into tokens
export default function lex(inputCode) {
  // set globals
  index = 0;
  code = inputCode;
  tokens = [];
  // read to end of code
  while (index < code.length) {
    // process character
    const char = code[index];
    processChar(char);
    index += 1;
  }
  // return lexed tokens
  return tokens;
}
