# jssdk
wallet sdk

exam:
import getWalletInfo from filePath
1. 获取签名
getWalletInfo('getSignature', {
        transferAddress: string, // 转账地址
        transferMoney: string, // 金额
        currentCoin: string, // 币种 大写
      }).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })
2. 获取余额
getWalletInfo('getCurrentAccountCoinBalance', string // 币种 大写
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })
3. 获取代币合约地址
getWalletInfo('getCurrentAccountCoinAddress', string // 币种 大写
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })
4. 批量交易OLO
getWalletInfo('multiSignature', arr // 交易数组 [{value:'数量', to:'地址'}]
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })

