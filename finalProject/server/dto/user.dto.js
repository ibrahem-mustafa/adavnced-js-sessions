module.exports = function UserDto({ _id,  name, email, branches, transactions }) {
  return {
      id: _id,
    name,
    email,
    branches,
    transactions,
  };
}
