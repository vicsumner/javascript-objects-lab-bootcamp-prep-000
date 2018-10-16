var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

// function removeFromPlaylist(playlist, artistName){
//         delete playlist[artistName]
//         return playlist
// }