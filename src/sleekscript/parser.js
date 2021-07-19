// globals
let index = 0;
let statement = undefined;
let code = '';

// processes given token in javascript context
function processToken(token) {
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
