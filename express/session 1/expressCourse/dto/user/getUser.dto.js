function UserDto({ _id, name, email, phone, category, role }) {
  return {
    id: _id,
    name,
    email,
    phone,
    category,
    role,
  };
}

module.exports = {UserDto}
