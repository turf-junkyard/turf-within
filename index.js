var inside = require('turf-inside');
var featureCollection = require('turf-featurecollection');

module.exports.before = function(ptFC, polyFC){
  var pointsWithin = featureCollection([]);
  polyFC.features.forEach(function(poly){
    ptFC.features.forEach(function(pt){
      var isInside = inside(pt, poly);
      if(isInside){
        pointsWithin.features.push(pt);
      }
    });
  });
  return pointsWithin;
};

module.exports.fast = function(ptFC, polyFC){
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
