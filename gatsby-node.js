/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const fetch = require("node-fetch")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const wardrobeTemplate = path.resolve(`./src/pages/wardrobe/index.tsx`)
  let collectionIds
  const arrayOfPromises = []
  const allCollectionData = []
  let allNftOwnerAddresses = []
  // let allAddresses = []
  let uniqueAddresses = []

  await fetch(
    `https://pet-api.zoocoin.cash/nfts/profile/0x13D4e5476f0B47D6F71D83390e032bA0F043d363/collections`
  )
    .then(res => res.json())
    .then(data => (collectionIds = Object.keys(data)))

  if (collectionIds.length > 0) {
    collectionIds.map(id => {
      arrayOfPromises.push(
        fetch(`https://pet-api.zoocoin.cash/nfts/collections/${id}`)
      )
    })
  }

  await Promise.all(arrayOfPromises).then(res => {
    res.forEach(collection => {
      collection
        .json()
        .then(data => {
          allCollectionData.push(data)
          return allCollectionData
        })
        .then(() => {
          allCollectionData.forEach(collection =>
            collection.tokensbelong.forEach(nft => {
              allNftOwnerAddresses.push(nft.owner)
            })
          )
        })
        .then(() => {
          uniqueAddresses = [...new Set(allNftOwnerAddresses)]
        })
        .then(() => {
          uniqueAddresses.forEach(address => {
            const nftsBelongingToAddress = allCollectionData.map(collection =>
              collection.tokensbelong.filter(nft => nft.owner === address)
            )
            createPage({
              path: `/wardrobe/${address}`,
              component: wardrobeTemplate,
              context: {
                wardrobeOwner: address,
                allCollectionData: allCollectionData,
                nftsBelongingToAddress: nftsBelongingToAddress,
              },
            })
          })
        })
    })
  })
}
