turf-within
===========
[![Build Status](https://travis-ci.org/Turfjs/turf-within.svg)](https://travis-ci.org/Turfjs/turf-within)

Returns a feature collection of points representing all points that fall withing a collection of polygons.

```js
var within = require('turf-within')
var point = require('turf-point')
var polygon = require('turf-polygon')
var featurecollection = require('turf-featurecollection')


var poly = polygon([[[10,0],[20,10],[20,20], [20,0]]])
var polyFC = featurecollection([poly])
var pt1 = point(1,1)
var pt2 = point(1,3)
var pt3 = point(14,2)
var pt4 = point(13,1)
var pt5 = point(19,7)
var ptFC = featurecollection([pt1, pt2, pt3, pt4, pt5])

var ptsWithin = within(ptFC, polyFC)

console.log(ptsWithin) // feature collection with 3 pts
```