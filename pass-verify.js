const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123 .202';
  const hash = '$2b$10$9ve3UK5pMIUx6S2Fe9CqSu9tckP4bzPZgmK8UyjttH1rOAEQX8FFG';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch)

}

verifyPassword();
