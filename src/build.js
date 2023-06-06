const StyleDictionary = require("style-dictionary").extend('./src/config.json');
// StyleDictionary.registerParser({
//   pattern: /.json$/,
//   parse: ({contents, filePath}) => {
//     return JSON.parse(contents);
//   }
// });
StyleDictionary.registerFilter({
    name: 'descriptionFilter',
    matcher: function(token) {
      // Source for incoming token
			const desc = token.original.name;
			if (desc) {
				return desc === 'vz-color-comp-vz-color-grey-vz-color-grey-3' || desc === 'vz-color-comp-vz-color-grey-vz-color-grey-4';
			}
    }
  });

  StyleDictionary.registerTransform({
    name: 'time/seconds',
    type: 'value',
    matcher: function(prop) {
      return prop.attributes.category === 'vz-color-comp';
    },
    transformer: function(prop) {
      return (prop.attributes.value) + 'TS';
    }
  });
  StyleDictionary.registerFormat({
    name: 'myCustomFormat',
    formatter: function({dictionary, platform, options, file}) {
      const dropShadowObj = JSON.stringify(dictionary.tokens);
      const dropShadowObjCov = JSON.parse(dropShadowObj);
      const keyValue = dropShadowObjCov['vz-shadow-center-md-light'].value.color;
      console.log('Color Key', keyValue);
      let outputObj = {};
      if (keyValue) {
        outputObj['$vz-shadow-center-md-light'] = keyValue;
        console.log('Output Obj', outputObj);
        return JSON.stringify(outputObj);
      }
    }
  })

	// const StyleDictionaryExtended = StyleDictionary.extend('./src/config.json');
  // StyleDictionaryExtended.buildAllPlatforms();
  StyleDictionary.buildAllPlatforms();

  // {
  //   "destination": "_boxShadow.scss",
  //   "format": "myCustomFormat",
  //   "options": {
  //     "showFileHeader": false
  //   },
  //   "filter": {
  //     "type": "boxShadow"
  //     }
  // },

console.log("Complete!");