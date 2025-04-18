// create-nojekyll.js
import { writeFile } from 'fs/promises';

const filePath = './dist/.nojekyll';

try {
  await writeFile(filePath, '');
  console.log('.nojekyll creado con éxito.');
} catch (err) {
  console.error('Error al crear .nojekyll:', err);
}
