// build
const StyleDictionary = require('style-dictionary').extend('config.json');
consolde.log("StyleDictionary");
StyleDictionary.registerTransform({
	name: 'vzTruncate',
	type: 'name',
	transformer: function(prop) {
		console.log("prop.path", prop.path);
		console.log("prop.path.substring(prop.path.lastIndexOf('vz')", prop.path.substring(prop.path.lastIndexOf('vz')));
		return prop.path.substring(prop.path.lastIndexOf('vz'));
	}
});
consolde.log("registerTransform");

module.exports = StyleDictionary;
consolde.log("module.exports");

StyleDictionary.buildPlatform('newstyle');
consolde.log("StyleDictionary.buildPlatform");