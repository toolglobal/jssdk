# jssdk
wallet sdk
```
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
5. 获取当前账户地址
getWalletInfo('getCurrentAccountAddress'
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })
6. 获取所有账户地址
getWalletInfo('getAccountAddressList'
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })

7. 获取签名执行结果
getWalletInfo('getSignatureRequestResult', {
        transferAddress: string, // 转账地址
        transferMoney: string, // 金额
        currentCoin: string, // 币种 大写
      }).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })

8. 批量交易OLO执行结果
getWalletInfo('getMultiSignatureRequestResult', arr // 交易数组 [{value:'数量', to:'地址'}]
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })

9. 单签返回上链结果（不签名）

jsonTest = {
    "createdAt":1621474085316,
    "gasLimit":21000,
    "gasPrice":"100",
    "nonce":112,
    "sender":"038131f045a4285fe04d82b980bbb3e7d253304be95593afdbd37c3c6524863bec",
    "signature":"0x259cd23824fcb18b0a9cac21c758ed97dc8f5d9734952842d22c609b8a2341c973005a8732196cfdf634b25aecf22d1dab20a5db2ef8ad614c256580e2c1f4ca01",
    "body":{
        "to":"58b46678c90aec545c36a85640a5beb2558545b3",
        "value":"500000000",
        "load":"",
        "memo":"sys"
    },
    "hash":"0x9a1a74503eeb6f417d9b68773ab44e9500b44eee242bd1017cd844797aba864d",
    "isSuccess":true
}

getWalletInfo('getChainRequestResult', jsonTest
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })

10. 批量签名返回上链结果（不签名）
jsonTest = {
    "createdAt":1621478454068,
    "gasLimit":21000,
    "gasPrice":"100",
    "nonce":112,
    "sender":"038131f045a4285fe04d82b980bbb3e7d253304be95593afdbd37c3c6524863bec",
    "operations":[
        {
            "to":"58B46678C90Aec545c36A85640a5beb2558545B3",
            "value":"500000000"
        }
    ],
    "memo":"sys",
    "signature":"0xd6bf75610377ad36f1147c1e51ae1b05eb06f05b11ee111d5781980f69ec72597f328791b72c68a5a57ac1ba7a86672c32d7bdae0ef03b4972aec7b078b50b4201",
    "hash":"0xa7a2fde3c5b5675fa84306b91617c95405627209771ef76d76ebb851267100a9",
    "isSuccess":false
}
getWalletInfo('getMultiChainRequestResult', jsonTest
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })

11. 查询授权额度签名
getWalletInfo('getSignResultNeedPassword', jsonTest
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })

12. // 兼容metamask交易, metaMaskJson和metamask交易参数一致
getWalletInfo('sendTransaction', metaMaskJson
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })

13. 获取当前chainId
getWalletInfo('chainId', {}
      ).then(res => {
        // 返回信息
      }).catch(err=>{
        // Error 错误信息 e.message
      })
```