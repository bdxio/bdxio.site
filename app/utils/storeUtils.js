/** Generate simple setters for given state
* @param {Object} state     store state
* @return {Object}          return simple setters
* @example
*   // For given state :
*       generateSetters({ myVar: null })
*   // Return value will be :
*       { setMyVar(state, value) { state.myVar = value } }
*/
export function generateSetters(state) {
    const setters = {}
    Object.keys(state).forEach(key => {
        const setterKey = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
        setters[setterKey] = (state, value) => {
            state[key] = value;
        };
    });
    return setters;
}
