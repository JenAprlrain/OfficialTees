export const getAllONFTeesCollectionIdsFromZooCoin = () => {
  return fetch(
    `https://pet-api.zoocoin.cash/nfts/profile/0x13D4e5476f0B47D6F71D83390e032bA0F043d363/collections`
  ).then(res => res.json())
}

export const getAllONFTeesCollectionDataById = (collectionIds: string[]) => {
  const arrayOfPromises = []
  collectionIds.map(id => {
    arrayOfPromises.push(
      fetch(`https://pet-api.zoocoin.cash/nfts/collections/${id}`)
    )
  })
  return arrayOfPromises
}
