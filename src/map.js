/*Noy Barak - 305412785*/

function Map(posts) {
  this._posts = posts;
}

Map.prototype.find_a_person = function(name) 
{
  return ["I met " +name+ " at Chabad house Bangkok", "We found " +name+ " R.I.P at Langtang valley"];
};

Map.prototype.find_a_location = function(name) 
{
    if(this.find_a_person(name).length <= 0)
      return false;
    return true;
};

Map.prototype.find_map_inconsistencies = function(name) 
{
    if(this.find_a_person(name).length > 1)
      return true;
    return false;
};

module.exports = Map;
