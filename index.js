var inside = require('turf-inside');
var featureCollection = require('turf-featurecollection');

/**
 * Returns a FeatureCollection of points representing all points that fall
 * within a collection of polygons.
 *
 * @module turf/within
 * @param {FeatureCollection} points
 * @param {FeatureCollection} polygons
 * @return {FeatureCollection} A collection of all points that land
 * within at least one polygon.
 * @example
 * var searchWithin = turf.featurecollection([
 *   turf.polygon([
 *     [[-46.653,-23.543],
 *      [-46.634,-23.5346],
 *      [-46.613,-23.543],
 *      [-46.614,-23.559],
 *      [-46.631,-23.567],
 *      [-46.653,-23.560],
 *      [-46.653,-23.543]]
 *   ])
 * ]);
 * var points = turf.featurecollection([
 *   turf.point([-46.6318, -23.5523]),
 *   turf.point([-46.6246, -23.5325]),
 *   turf.point([-46.6062, -23.5513]),
 *   turf.point([-46.663, -23.554]),
 *   turf.point([-46.643, -23.557])]);
 * var ptsWithin = turf.within(points, searchWithin);
 * //=points
 * //=searchWithin
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
