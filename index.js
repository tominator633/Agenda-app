
const stringToMatch = "https://example.com/callback#access_token=NwAExzBV3O2Tk&token_type=Bearer&expires_in=3600&state=1";

const result = stringToMatch.match(/(?<=access_token=)[^&]*/)[0];
console.log(result);

const result2 = stringToMatch.match(/(?<=expires_in=)[^&]*/)[0];
console.log(result2);

//const pattern = /(?<=access_token=).+(?=&token)/;

console.log(window.history);