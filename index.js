var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
 
  return object
}

Object.assign({object}, { key: 'value' })

// const object = { key: value }
 
// updateObjectWithKeyAndValue(oject, 'key', 'value')