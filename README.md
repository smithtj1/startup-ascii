# startup-ascii
## start up your angular app with some ascii art flavor

## how to

### add startup-ascii module to your app's dependencies
`angular.module('myApp', [
  'ngRoute',
  ...
  ...
  'startup-ascii'
])`

### use the ascii printer in code
`.controller('View1Ctrl', ['startup-ascii-printer', function(ascii) {
	 ascii.print('milhouse');
}]);`

### or use the directive
`<startup-ascii image="milhouse" />`