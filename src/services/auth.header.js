export default function authHeader() {
  const user = localStorage.getItem("access_token");

  if (user) {
    // for Node.js Express back-end
    return { "x-access-token": user };
  } else {
    return {};
  }
}
