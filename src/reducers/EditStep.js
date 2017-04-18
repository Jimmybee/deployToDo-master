const initialState = { };

const editStep = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EDIT_STEP':
      const step = action.step
      return Object.assign({}, state, {
        answerHint: step.answerHint,
        answerText: step.answerText,
        checkInProximity: step.checkInProximity,
        completionText: step.completionText,
        freeHint: step.freeHint,
        hintPenalty: step.hintPenalty,
        initialText: step.initialText,
        setup: step.setup,
        stepNumber:  step.stepNumber,
        objectId: step.objectId,
        location: step.location,
        nameOrLocation: step.nameOrLocation,
      });
    default:
      return state
  }
}
export const load = data => ({ type: 'STEP', data })

export default editStep