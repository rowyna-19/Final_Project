function encodeBase64(obj) {
  return btoa(JSON.stringify(obj));
}
export function loginApi({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password && password.length >= 4) {
        const payload = {
          sub: email,
          name: email.split('@')[0],
          // expires in 1 hour
          exp: Math.floor(Date.now() / 1000) + 60 * 60
        };
        // not a real JWT (no signature) but includes payload for front-end demo
        const token = `${encodeBase64({ alg: 'none' })}.${encodeBase64(payload)}.`;
        resolve({ token });
      } else {
        reject({ message: 'Invalid credentials' });
      }
    }, 600);
  });
}
export function registerApi({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password.length >= 4) {
        resolve({ message: 'ok' });
      } else {
        reject({ message: 'Invalid data' });
      }
    }, 600);
  });
}
export function decodeToken(token) {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const payload = JSON.parse(atob(parts[1]));
    return payload;
  } catch {
    return null;
  }
}