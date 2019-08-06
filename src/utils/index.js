export default (function() {

function getRandomNumber() {
  const crypto = window.crypto || window.msCrypto;
  if (crypto && crypto.getRandomValues) {
    let rands = new Uint8Array(1);
    crypto.getRandomValues(rands);
    return (rands[0]%16).toString(16);
  } else {
    return ((Math.random()*16) || 0).toString(16);
  }
}

function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g, getRandomNumber)
}

return {
  createUUID: createUUID
}
})();