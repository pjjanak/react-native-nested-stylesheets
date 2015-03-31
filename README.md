# react-native-nested-stylesheet

Nestable stylesheets for react-native.

## Installation
`npm install react-native-nested-stylesheet`

## Usage notes
This plugin will allow you to create styles of the following format:

```
...
namespace: {
	styleA: {...},
	styleB: {...},
},
...
```

With the plain `StyleSheet` API you can only create stylesheets with one level of nesting. It should noted that this does not create cascading selectors. This is merely to allow namespacing of styles (e.g. containing the styles for all items in a specific `ListView`.

Note: You are only allowed to include other objects within a nested style. You cannot define rules at the namespace level.

## Usage Example
```
var React = require('react-native');
var NestedStyleSheet = require('react-native-nested-stylesheet');

var {
	View,
	Text,
	Image,
} = React;

var styles = NestedStyleSheet.create({
	cells: {
		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
		},
		thumbnail: {
			width: 53,
			height: 81,
		},
		content: {
			flex: 1,
		},
	},
});

var Demo = React.createClass({
	render: function() {
		return (
			<View style={styles.cells.container}>
				<Image source={{...}} style={styles.cells.thumbnail}
				<View style={styles.content}>
					<Text>...</Text>
				</View>
			</View>
		);
	},
});

module.exports = Demo;
```
