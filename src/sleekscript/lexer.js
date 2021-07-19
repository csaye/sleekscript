// globals
let index = 0;
let code = undefined;
let tokens = [];

// processes given character in token context
function processChar(char) {
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
