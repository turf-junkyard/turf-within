var inside = require('turf-inside');
var featureCollection = require('turf-featurecollection');

/**
 * Returns a feature collection of points representing all points that fall
 * within a collection of polygons.
 *
 * @module turf/within
 * @param {FeatureCollection} points
 * @param {FeatureCollection} polygons
 * @return {FeatureCollection} A collection of all points that land
 * within at least one polygon.
 * @example
 * var poly = turf.polygon([[[10,0],[20,10],[20,0],[10,0]]]);
 * var polyFC = turf.featurecollection([poly]);
 * var pt1 = turf.point(1,1);
 * var pt2 = turf.point(1,3);
 * var pt3 = turf.point(14,2);
 * var pt4 = turf.point(13,1);
 * var pt5 = turf.point(19,7);
 * var ptFC = turf.featurecollection([pt1, pt2, pt3, pt4, pt5]);
 * var ptsWithin = turf.within(ptFC, polyFC);
 * //=ptFC
 * //=polyFC
 * //=ptsWithin
 */
module.exports = function(ptFC, polyFC){
  var pointsWithin = featureCollection([]);
  for (var i = 0; i < polyFC.features.length; i++) {
    for (var j = 0; j < ptFC.features.length; j++) {
      var isInside = inside(ptFC.features[j], polyFC.features[i]);
      if(isInside){
        pointsWithin.features.push(ptFC.features[j]);
      }
    }
  }
  return pointsWithin;
};
