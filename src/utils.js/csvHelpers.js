const parseCsvFile = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result.split('\n');
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

const CSVtoArray = text => {
  const reValid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
  const reValue = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
  // Return NULL if input string is not well formed CSV string.
  if (!reValid.test(text)) return null;
  const a = [];                     // Initialize array to receive values.
  text.replace(reValue, // "Walk" the string using replace with callback.
      (m0, m1, m2, m3) => {
          // Remove backslash from \' in single quoted values.
          if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
          // Remove backslash from \" in double quoted values.
          else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
          else if (m3 !== undefined) a.push(m3);
          return ''; // Return empty string.
      });
  // Handle special case of empty last value.
  if (/,\s*$/.test(text)) a.push('');
  return a.filter(i => i !== '');
};

export {
  parseCsvFile,
  CSVtoArray,
}
