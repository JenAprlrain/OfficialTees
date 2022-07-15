const findTheTransactionKeyThatMatchesNftTokenId = (
  transactionObj: object[],
  nft: { tokenId: number }
) => +Object.keys(transactionObj)[0] === nft.tokenId

export const retrieveFtmScanTxHash = (nft, allTransactionData) => {
  let txHash = ""
  const res = allTransactionData.find(transactionObj =>
    findTheTransactionKeyThatMatchesNftTokenId(transactionObj, nft)
  )
  if (res) {
    txHash = res[nft.tokenId].data.items[0].nft_transactions[0].tx_hash
  }
  return txHash
}
