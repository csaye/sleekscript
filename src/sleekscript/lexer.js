// recursively retrieves tokens from given code
function getTokens(code, tokens) {
  // for each possible token
  for (const token of possibleTokens) {
    // if code matches token
    const match = code.match(token.regex);
    if (match) {
      // push token
      tokens.push({
        match: match,
        type: token.type
      });
    }
  }
}

// lexes given sleekscript into tokens
export default function lex(code) {
  const tokens = [];
  getTokens(code, tokens); // recursively retrieve tokens
  return tokens;
}
