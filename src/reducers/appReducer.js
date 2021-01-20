const initialState = {
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500, added: false },
        { id: 2, name: 'Racing detail package', price: 1500, added: false },
        { id: 3, name: 'Premium sound system', price: 500, added: false },
        { id: 4, name: 'Rear spoiler', price: 250, added: false }
      ]
}

export const appReducer = (state=initialState, action) =>{
    switch(action.type){
        case "TOGGLE_ADDITIONAL_FEATURE":
            return {
                ...state,
                additionalFeatures: state.additionalFeatures.map(feature =>{
                    if(feature.id === action.payload){
                        return {
                            ...feature, 
                            added: !feature.added
                        }
                    } else {
                        return feature
                    }
                })
            }
            default :
            return state
    }
}