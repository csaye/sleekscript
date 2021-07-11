// returns code snippet for given token
function getCode(tokens, i) {
  const token = tokens[i];
  // add content based on type and value
  switch (token.type) {
    case 'comment': return `//${token.value}`;
    case 'keyword': {
      switch (token.value) {
        case 'and': return '&&';
        case 'or': return '||';
        case 'not': return '!';
        default: return token.value;
      }
    }
    case 'slice': {
      const vals = token.value.split(':');
      // array slice
      if (i > 0 && tokens[i - 1].type === 'word') {
        if (!vals[0] && !vals[1]) return '.split()';
        else if (!vals[1]) return `.split(${vals[0]})`;
        else return `.split(${vals[0] ? vals[0] : 0}, ${vals[1]})`;
      // array range
      } else {
        const start = vals[0] ? vals[0] : 0;
        const end = vals[1] ? vals[1] : 0;
        const nums = [];
        for (let i = start; i < end; i++) nums.push(i);
        return `[${nums.join(', ')}]`;
      }
    }
    default: return token.value;
  }
}

// parses given tokens into javascript
export default function parse(tokens) {
  let js = '';
  // append code for each token
  for (let i = 0; i < tokens.length; i++) {
    js += getCode(tokens, i);
  }
  return js;
}
