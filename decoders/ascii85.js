function decode() {
  const encodedData = document.getElementById('input').value;
  const cleanData = encodedData.replace(/[^~\w<>]/g, '');
  if (!cleanData.startsWith('<~') || !cleanData.endsWith('~>')) {
    alert('Invalid encoded data!');
    return;
  }
  const data = cleanData.slice(2, -2);
  const decodedData = [];
  let i = 0;
  while (i < data.length) {
    const charCode = 0;
    for (let j = 0; j < 5; j++) {
      const charValue = data.charCodeAt(i + j) - 33;
      charCode += charValue * Math.pow(85, 4 - j);
    }
    decodedData.push(String.fromCharCode(charCode));
    i += 5;
  }
  const output = decodedData.join('');
  document.getElementById('output').value = output;
}