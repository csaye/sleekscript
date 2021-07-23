// globals
let index = 0;
let statement = undefined;
let code = '';

// returns javascript version of given keyword
function getKeyword(keyword) {
  switch (keyword) {
    // operators
    case 'and': return '&&';
    case 'or': return '||';
    case 'is': return '===';
    case 'isnt': return '!==';
    case 'not': return '!';
    // booleans
    case 'yes': return 'true';
    case 'no': return 'false';
    case 'on': return 'true';
    case 'off': return 'false';
    // default
    default: return keyword;
  }
}

// returns javascript subtitution for given word
function getSub(word) {
  switch (word) {
    // functions
    case 'print': return 'console.log';
    // default
    default: return word;
  }
}

// processes given token in javascript context
function processToken(token) {
  if (token.type === 'comment') code += `//${token.value}`;
  else if (token.type === 'string') code += `"${token.value}"`;
  else if (token.type === 'keyword') code += getKeyword(token.value);
  else if (token.type === 'sub') code += getSub(token.value);
  else code += token.value;
}

// returns whether to pad given token
function doPad(token, prevToken) {
  // operator after operator [++, -=]
  if (token.type === 'operator' && prevToken.type === 'operator') return false;
  // symbol after non-operator [foo., bar)]
  if (
    token.type === 'symbol'
    && prevToken.type !== 'operator' && prevToken.type !== 'keyword'
  ) return false;
  // non-operator after symbol [.foo, (bar]
  if (
    prevToken.type === 'symbol' && prevToken.value !== ')'
    && token.type !== 'operator'
  ) return false;
  // non-operator after not keyword [!foo]
  if (
    prevToken.type === 'keyword' && prevToken.value === 'not'
    && token.type !== 'operator'
  ) return false;
  // if none pass, return true
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
    if (index) {
      if (token.type === 'comment') code += ';';
      if (doPad(token, statement[index - 1])) code += ' ';
    }
    // process token
    processToken(token);
    index += 1;
  }
  // append semicolon if no comment
  if (statement[statement.length - 1].type !== 'comment') code += ';';
  // return statement code
  return code;
}

// returns whether to newline given statement
function doNewline(statement, prevStatement) {
  // start of if statements
  if (
    statement[0].type === 'keyword' && statement[0].value === 'if' &&
    !(prevStatement[0].type === 'keyword' && prevStatement[0].value === 'if')
  ) return true;
  // end of if statements
  if (
    !(statement[0].type === 'keyword' && statement[0].value === 'if') &&
    prevStatement[0].type === 'keyword' && prevStatement[0].value === 'if'
  ) return true;
  // default to no newline
  return false;
}

// parses given syntax tree into javascript
export default function parse(tree) {
  let js = '';
  const varnames = [];
  // declare variables
  for (const statement of tree) {
    if (statement.length > 1) {
       if (statement[0].type === 'word' && statement[1].type === 'operator') {
         const varname = statement[0].value;
         if (!varnames.includes(varname)) varnames.push(varname);
      }
    }
  }
  if (varnames.length) js += `var ${varnames.join(', ')};\n\n`
  // for each statement in tree
  let treeIndex = 0;
  while (treeIndex < tree.length) {
    // append statement code
    const statement = tree[treeIndex];
    if (treeIndex && doNewline(statement, tree[treeIndex - 1])) js += '\n';
    js += getStatementCode(statement) + '\n';
    treeIndex += 1;
  }
  // return parsed javascript
  return js;
}
