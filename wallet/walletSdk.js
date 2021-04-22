const UA = navigator.userAgent

const isIOS = UA.match(/iPad/) || UA.match(/iPhone/) || UA.match(/iPod/)

const inApp = window.oloJs || (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.accessToken)

const typeMap = {
  getCurrentAccountCoinBalance: true, // 获取余额
  getSignature: true, // 获取签名
  getCurrentAccountCoinAddress: true, // 指定币种合约地址
  multiSignature: true // 批量交易OLO
}

const getWalletInfo = (typeName, params) => {
  const rejectFunc = `${typeName}Reject`
  if (typeof params !== 'string' && !isIOS) {
    params = JSON.stringify(params)
  }
  // console.log('params', params)
  if (!typeName) {
    return Promise.reject('缺少数据类型')
  }
  if (!typeMap[typeName]) {
    return Promise.reject('未知类型')
  }
  if (!inApp) {
    return Promise.reject('不在app内')
  }
  if (window[rejectFunc]) {
    return Promise.reject('尚未返回结果, 重复操作')
  }
  const promise = new Promise((resolve, reject) => {
    // console.log('excute promise')
    window[typeName] = resolve
    window[rejectFunc] = reject
    // rej = reject
    if (isIOS) {
      // window.webkit.messageHandlers.accessToken.postMessage(null)
      Promise.reject('IOS 暂不支持')
    } else {
      window.oloJs[typeName](params)
    }
  })
  return promise
  .finally(res => {
    // console.log('finally')
    window[typeName] = null
    window[rejectFunc] = null
    return res
  })
  .catch(err=>{
    // console.log('err', err)
    throw new Error(err)
  })
}


export default getWalletInfo