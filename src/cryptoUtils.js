// cryptoUtils.js
export function encryptData(variable) {
  if (variable) {
    const encrypted = btoa(variable);
    return encrypted;
  } else {
    console.error('La variable à chiffrer est undefined.');
    return null; // ou une valeur par défaut selon votre logique
  }
}