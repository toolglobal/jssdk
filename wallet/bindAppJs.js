const cbMap = {}

const appCb = (data, handlerName) => {
  const handler = cbMap[handlerName]
  if (typeof handler === 'function') {
    handler(data)
  }
}

const setCbMap = (typeName, resolve, reject) => {
  const time = +new Date()
  const sName = `${typeName}_s_${time}`
  const fName = `${typeName}_f_${time}`
  cbMap[sName] = resolve
  cbMap[fName] = reject
  return {
    sName,
    fName
  }
}

window.appCb = appCb

export {
  cbMap,
  setCbMap
}
