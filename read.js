const fs = require('fs');

fs.readFile('user.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const arr = data.split('\n').filter(a => a).map(a => JSON.parse(a));
  console.log(arr);
});
