'use strict'



//  !----------------------------- 1 ----------------------------------

// const fs = require('fs');
//  const path = require('path');

// const folderPath = 'fs_test_directory'; 


// const poem = 'What is this life if, full of care, We have no time to stand and stare. No time to stand beneath the boughs And stare as long as sheep or cows.';

// const myFolderPath = path.join(__dirname, 'fs_test_directory'); 

// try {
//   if (!fs.existsSync(myFolderPath)) {
//     fs.mkdirSync(myFolderPath);
//   }

//   const words = poem.split(' ');

//   for (let i = 0; i < 50; i++) {
//     const filePath = path.join(myFolderPath, `file${i + 1}.txt`);
//     const word = words[i % words.length];

//     fs.writeFileSync(filePath, word);
//   }

//   console.log('files created');
// } catch (err) {
//   console.error(err);
// }


// // !--------------------------------- 3 ----------------------------------


// const fs = require('fs').promises;
//const path = require('path');

//const folderPath = 'fs_test_directory'; 
// function generateRandomDigit() {
//   return Math.floor(Math.random() * 10);
// }

// async function appendRandomDigitToFile(file) {
//   try {
//     const filePath = path.join(folderPath, file);

//     if (!file.endsWith('.txt')) {
//       console.log(`Skipping file: ${file} (not a .txt file)`);
//       return;
//     }

//     const fileContent = await fs.readFile(filePath, 'utf-8');
//     const randomDigit = generateRandomDigit();
//     const newContent = `${fileContent}${randomDigit}`;

//     await fs.writeFile(filePath, newContent);
//     console.log(`Appended random digit to file: ${file}`);
//   } catch (error) {
//     console.error(`Error appending random digit to file ${file}:`, error);
//   }
// }

// async function appendRandomDigitToFiles() {
//   try {
//     const files = await fs.readdir(folderPath);

//     if (files.length === 0) {
//       console.log('No files in the directory');
//       return;
//     }

//     const appendPromises = files.map(file => appendRandomDigitToFile(file));
//     await Promise.all(appendPromises);

//     console.log('Append done');
//   } catch (error) {
//     console.error('Error reading directory:', error);
//   }
// }

// appendRandomDigitToFiles();


// !----------------------------- 2 --------------------------------------
const fs = require('fs');
 
const folderPath = 'fs_test_directory'; 


fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  if (files.length === 0) {
    console.log('Directory already clear');
    return;
  }
  
  function deleteFile(file, callback) {
    fs.unlink(`${folderPath}/${file}`, err => {
      if (err) {
        console.error(`Error deleting file ${file}:`, err);
        callback(err);
      } else {
        console.log(`Deleted file: ${file}`);
        callback(null);
      }
    });
  }
  
  const filesToDelete = files.filter(file => !file.endsWith('.html'));

  if (filesToDelete.length === 0) {
    console.log('No files to delete');
    return;
  }

  
  function deleteNextFile(index) {
    if (index >= filesToDelete.length) {
      console.log('Remove done');
      return;
    }
    const file = filesToDelete[index];
    deleteFile(file, err => {
      if (err) {
        console.error(`Error deleting file ${file}:`, err);
      }
      deleteNextFile(index + 1);
    });
  }

  deleteNextFile(0);
});
