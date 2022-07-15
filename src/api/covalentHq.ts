export const getAllNftTransactionDataByTokenId = (allNfts: object[]) => {
  const chain_id = "250"
  const contract_address = "0xd606543c1c7607bf02b9536e9b31cdc1cf564c1e"
  const arrayOfPromises = []
  // allNfts.map(nft => {
  //   arrayOfPromises.push({
  //     [nft.tokenId]: fetch(
  //       `https://api.covalenthq.com/v1/${chain_id}/tokens/${contract_address}/nft_transactions/${nft.tokenId}/?&key=${process.env.GATSBY_COVALENT_KEY}`
  //     ),
  //   })
  // })
  return arrayOfPromises
}
