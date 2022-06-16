import fs from 'fs';

export function readSecret(secretName) {
  try {
    return fs.readFileSync(`${secretName}`, 'utf8'); // /run/secrets/
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error(`An error occurred while trying to read the secret: ${secretName}. Err: ${err}`);
    } else {
      console.debug(`Could not find the secret,: ${secretName}. Err: ${err}`);
    }
    return '';
  }
}
