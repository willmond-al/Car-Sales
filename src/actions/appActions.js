export const TOGGLE_ADDITIONAL_FEATURE = "TOGGLE_ADDITIONAL_FEATURE"

export const toggleAdditonalFeature = (featureId) =>{
    return { type: TOGGLE_ADDITIONAL_FEATURE, payload: featureId}
}