if (Array.hasOwnProperty('map') === false) {
  Array.prototype.map = function (projectionFunction) {
    function mapInternal (array, projectionFunction) {
      var mapped = []
      for (var i = 0; i < array.length; i++) {
        mapped.push(projectionFunction(array[i], i, array))
      }
      return mapped
    }

    return mapInternal(this, projectionFunction)
  }
}

Array.prototype.smoosh = function (level) {
  function smooshRecursively (array) {
    var smooshed = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] instanceof Array) {
        smooshed.push.apply(smooshed, smooshRecursively(array[i]))
      } else {
        smooshed.push(array[i])
      }
    }
    return smooshed
  }

  function smooshLeveled (level, array) {
    var smooshed = []
    for (var i = 0; i < level + 1; i++) {
      if (array[i] instanceof Array) {
        for (var j = 0; j < array[i].length; j++) {
          smooshed.push(array[i][j])
        }
      } else {
        smooshed.push(array[i])
      }
    }
    return smooshed
  }

  function smooshInternal (array, level) {
    if (typeof level === 'undefined' || level === Infinity) {
      return smooshRecursively(array)
    }
    return smooshLeveled(level, array)
  }

  return smooshInternal(this, level)
}

Array.prototype.smooshMap = function (projectionFunction) {
  return this.smoosh().map(projectionFunction)
}
