import { setCbMap } from './bindAppJs'
const UA = navigator.userAgent

const isIOS = UA.match(/iPad/) || UA.match(/iPhone/) || UA.match(/iPod/)

const inApp = window.oloJs || (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.accessToken)

const typeMap = {
  getCurrentAccountCoinBalance: true, // 获取余额
  getSignature: true, // 获取签名
  getCurrentAccountCoinAddress: true, // 指定币种合约地址
  multiSignature: true, // 批量交易OLO
  getCurrentAccountAddress: true, // 获取当前账户地址
  getAccountAddressList: true, // 获取所有账户地址
  getSignatureRequestResult: true, // 返回单签上链结果
  getMultiSignatureRequestResult: true, // 返回批量签名上链结果
  getChainRequestResult: true, // 单签返回上链结果（不签名）
  getMultiChainRequestResult: true, // 批量签名返回上链结果（不签名）
  getSignResultNeedPassword: true, // 查询授权额度签名需要密码
  sendTransaction: true, // 狐狸交易
  chainId: true // 获取chainId
}

const getWalletInfo = (typeName, params) => {
  // const rejectFunc = `${typeName}Reject`
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
  const promise = new Promise((resolve, reject) => {
    // console.log('excute promise')
    // window[typeName]=resolve
    // window[`${typeName}Reject`]=reject
    const { sName, fName } = setCbMap(typeName, resolve, reject)
    if (isIOS) {
      // window.webkit.messageHandlers.accessToken.postMessage(null)
      Promise.reject('IOS 暂不支持')
    } else {
      // console.log('typeName', typeName)
      window.oloJs[typeName](params,sName,fName)
    }
  })
  return promise
  // .finally(res => {
  //   // console.log('finally')
  //   window[typeName] = null
  //   window[rejectFunc] = null
  //   return res
  // })
  .catch(err=>{
    // console.log('err', err)
    throw new Error(err)
  })
}


export default getWalletInfo