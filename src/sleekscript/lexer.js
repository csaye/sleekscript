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

// processes given character in token context
function processChar(char) {
  if (char === '#') readComment();
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
