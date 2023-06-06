// import gulp from 'gulp';
const { watch, gulp } = require('gulp');
const run = require('gulp-run');
const fs = require('fs');

const { transformTokens } = require('token-transformer');
const { registerTransforms } = require('@tokens-studio/sd-transforms');
const excludes = [];

const transformerOptions = {
  expandTypography: true,
  expandShadow: true,
  expandComposition: true,
  expandBorder: true,
  preserveRawValue: false,
  throwErrorWhenNotResolved:  true,
  resolveReferences:true
}

const paths = {
  styles: {
    src: 'src/assets/token.json',
    dest: 'src/assets/tokenTrans.json'
  }
};

exports.default = function() {
  console.log("\n\n———————————————————————————————————————————————————————————————————\n::::  Gulp Watching File Change At  :  " + paths.styles.src + "  ::::\n———————————————————————————————————————————————————————————————————\n\n");
  watch(paths.styles.src, runTasks);
};

function runTasks() {
  console.log("\n\n::::  " + paths.styles.src + " has been changed!  ::::\n");
  setTimeout(runTrans, 0);
}



var tokens;
var resolved;
var currentTheme = "";

function runTrans() {
  console.log("\n::::  Running Token Conversion  ::::\n");
  
  fs.readFile(paths.styles.src, 'utf8', function (err, data) {
    if (err) {
      console.log('It\'s Jacked! ' + paths.styles.src);
      throw err;
    } else {
      
      tokens = JSON.parse(data);
      
      var theme = JSON.stringify(tokens.base.themeToShow.value);
      currentTheme = theme.substring(theme.indexOf(".") + 1, theme.indexOf("}"));
      
      var setsToUse = [];
      // Create Current Theme 
      for (const theme in tokens.$themes) {
        for (const set in tokens.$themes[theme].selectedTokenSets) {
          if(tokens.$themes[theme].name == currentTheme) {
            setsToUse.push(set);
          }
        }
      }
      
      
      // Start Token Transformer ———————————–
      resolved = transformTokens(
        tokens, 
        setsToUse,  
        excludes, 
        transformerOptions
      );
      resolved = JSON.stringify(resolved);
      // End Token Transformer ———————————–
      
      
      fs.writeFile(paths.styles.dest, resolved, function (err) {
          if (err) {
            throw err;
          }
          else { 
            console.log("\n::::  Saved Transformed Tokens At :: "+ paths.styles.dest + "  ::::\n\n");
            
            watch(paths.styles.src, runTasks);
            
            return run('npm run styleBuild').exec();
          }
      });
    }
  });
}
