<script>
import { filterClassProps, mapPropsToClasses } from "./_helpers";

export default {
  name: "FlexContainer",
  functional: true,
  render(h, { props, listeners, children, data }) {
    const classProps = filterClassProps(props);

    const tagProp = props.tag || "div";
    const direction = props.direction === "column" ? "column" : "row";

    return h(
      tagProp,
      {
        attrs: {
          class: `${direction} ${mapPropsToClasses(classProps)} ${data.staticClass || ""}`,
        },
        on: listeners,
      },
      children
    );
  },
};
</script>
