
function createLoadingActionType(suffix) {
  return (actionName) => `${actionName}_${suffix}`;
}

export const createRequestActionType = createLoadingActionType('REQUEST');
export const createSuccessActionType = createLoadingActionType('SUCCESS');
export const createFailureActionType = createLoadingActionType('FAILURE');
