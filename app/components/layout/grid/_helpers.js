/**
 *  constructGutterClass takes a prop and converts it to a valid gutter HTML class
 */
function constructGutterClass(prop) {
  const media = prop.replace("gutter", "");
  return `gutter-${media}`;
}

/**
 * filterClassProps takes an object containing all the props and returns a filtered Array only containing
 * props equal to <empty string>, meaning they must be treated as HTML classes
 * @param {Object} props
 * @return {Array}
 */
export const filterClassProps = (props) => Object.keys(props).filter((prop) => props[prop] === "");

/**
 * mapPropsToClasses takes an array of props and converts it to valid HTML classes
 * with standard BEM prefixes
 * example : mapPropsToClasses(["xs6", "xsOffset4"]);
 * Returns : "fg__col-xs12 fg__col-xs-offset4"
 * @param {Array} classProps
 * @return {String}
 */
export const mapPropsToClasses = (classProps) =>
  classProps
    .map((prop) => (prop.includes("gutter") ? constructGutterClass(prop) : `fg__col-${prop}`))
    .join(" ")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
