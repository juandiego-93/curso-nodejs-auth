const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4NDg0NDkzOX0.TFmuAfDoiNv-dUsB78i_F2Tty854BN9umZcHOe6czU4'


function verifyToken(token, secret) {
  return jwt.verify(token, secret);
};

const payload = verifyToken(token, secret);
console.log(payload);
