import assert from 'assert';
import fs from 'fs';
import path from 'path';
import glob from 'glob';

const dirs = {
      dist: "dist",
      src: "src",
      test: "test"
    };

const expectedFiles = [

  '.editorconfig',
  '.gitattributes',
  '.gitignore',
  '.htaccess',
  '404.html',
  'browserconfig.xml',

  'css/', // for directories, a `/` character
  // should be included at the end
  'css/main.css',
  'css/normalize.css',

  'favicon.ico',
  'humans.txt',

  'icon.png',

  'img/',
  'img/.gitignore',

  'index.html',

  'js/',
  'js/main.js',
  'js/plugins.js',
  'js/vendor/',
  `js/vendor/jquery-3.4.1.min.js`,
  `js/vendor/modernizr-3.7.1.min.js`,

  'LICENSE.txt',
  'robots.txt',
  'site.webmanifest',
  'tile-wide.png',
  'tile.png'

];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function checkFiles(directory, files) {

  // Get the list of files from the specified directory
  const files = glob.sync('**/*', {
    'cwd': directory,
    'dot': true,      // include hidden files
    'mark': true      // add a `/` character to directory matches
  });

  // Check if all expected files are present in the
  // specified directory, and are of the expected type
  files.forEach((file) => {

    let ok = false;
    const expectedFileType = (file.slice(-1) !== '/' ? 'regular file' : 'directory');

    // If file exists
    if (files.indexOf(file) !== -1) {

      // Check if the file is of the correct type
      if (file.slice(-1) !== '/') {
        // Check if the file is really a regular file
        ok = fs.statSync(path.resolve(directory, file)).isFile();
      } else {
        // Check if the file is a directory
        // (Since glob adds the `/` character to directory matches,
        // we can simply check if the `/` character is present)
        ok = (files[files.indexOf(file)].slice(-1) === '/');
      }

    }

    it(`"${file}" should be present and it should be a ${expectedFileType}`, () =>{
      assert.equal(true, ok);
    });

  });

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function runTests() {

  describe('Test if all the expected files are present in the build directories', () => {

    describe(dirs.dist, () => {
      checkFiles(dirs.dist, expectedFiles);
    });
	
    describe(dirs.src, () => {
      checkFiles(dirs.src, expectedFiles);
    });

  });

}

runTests();
