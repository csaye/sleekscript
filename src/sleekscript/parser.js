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
    default: return keyword;
  }
}

// processes given token in javascript context
function processToken(token) {
  if (token.type === 'comment') code += `//${token.value}`;
  else if (token.type === 'string') code += `"${token.value}"`;
  else if (token.type === 'keyword') code += getKeyword(token.value);
  else if (token.type === 'word') code += token.value;
  else if (token.type === 'number') code += token.value;
  else if (token.type === 'symbol') code += token.value;
}

// returns code for given statement
function getStatementCode(inputStatement) {
  // set globals
  index = 0;
  statement = inputStatement;
  code = '';
  // read to end of statement
  while (index < statement.length) {
    // process token
    const token = statement[index];
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
    js += getStatementCode(statement) + '\n';
  }
  // return parsed javascript
  return js;
}
