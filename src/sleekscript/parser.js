// globals
let index = 0;
let statement = undefined;
let code = '';

// returns javascript version of given keyword
function getKeyword(keyword) {
  switch (keyword) {
    case 'and': return '&&';
    case 'or': return '||';
    case 'is': return '===';
    case 'isnt': return '!==';
    case 'not': return '!';

    case 'yes': return 'true';
    case 'no': return 'false';
    case 'on': return 'true';
    case 'off': return 'false';

    case 'print': return 'console.log';

    default: return keyword;
  }
}

// processes given token in javascript context
function processToken(token) {
  if (token.type === 'comment') code += `//${token.value}`;
  else if (token.type === 'string') code += `"${token.value}"`;
  else if (token.type === 'keyword') code += getKeyword(token.value);
  else code += token.value;
}

// returns whether to pad given token
function doPad(token, prevToken) {
  if (token.type === 'symbol') {
    if (prevToken.type !== 'operator') return false;
  }
  if (
    (prevToken.type === 'symbol' && prevToken.value !== ')') ||
    (prevToken.type === 'keyword' && prevToken.value === 'not')
  ) {
    if (token.type !== 'operator') return false;
  }
  return true;
}

// returns code for given statement
function getStatementCode(inputStatement) {
  // set globals
  index = 0;
  statement = inputStatement;
  code = '';
  // read to end of statement
  while (index < statement.length) {
    // pad token
    const token = statement[index];
    if (index && doPad(token, statement[index - 1])) code += ' ';
    // process token
    processToken(token);
    index += 1;
  }
  // return statement code
  return code;
}

// parses given syntax tree into javascript
export default function parse(tree) {
  let js = '';
  // for each statement in tree
  for (const statement of tree) {
    // append statement code
    js += getStatementCode(statement) + ';\n';
  }
  // return parsed javascript
  return js;
}
