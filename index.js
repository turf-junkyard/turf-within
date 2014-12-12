var inside = require('turf-inside');
var featureCollection = require('turf-featurecollection');

module.exports = function(ptFC, polyFC){
  pointsWithin = featureCollection([]);
  polyFC.features.forEach(function(poly){
    ptFC.features.forEach(function(pt){
      var isInside = inside(pt, poly);
      if(isInside){
        pointsWithin.features.push(pt);
      }
    });
  });
  return pointsWithin;
}