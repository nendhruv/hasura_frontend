export default function authHeader() {
  const user = localStorage.getItem("access_token");

  if (user) {
    // for Node.js Express back-end
    return { 'headers': {"x-access-token": user, 'is-authorised': true} };
  } else {
    return {};
  }
}
