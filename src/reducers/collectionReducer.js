export const initialCollection = {
  collectionIds: [],
  collectionData: [],
}

export default (state, action) => {
  const { type, payload, name } = action
  switch (type) {
    case "GET_COLLECTION_IDS":
      return { ...state, [name]: payload }
    case "GET_COLLECTION_DATA":
      return { ...state, [name]: [...state[name], payload] }
    default:
      return state
  }
}
