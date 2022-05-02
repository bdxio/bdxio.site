<script>
import { filterClassProps, mapPropsToClasses } from "./_helpers";

export default {
  name: "FlexContainer",
  functional: true,
  render(h, { props, listeners, children, data }) {
    const classProps = filterClassProps(props);

    const tagProp = props.tag || "div";

    console.log(tagProp);
    return h(
      tagProp,
      {
        attrs: {
          class: `row gutter--xs ${mapPropsToClasses(classProps)} ${data.staticClass || ""}`,
        },
        on: listeners,
      },
      children
    );
  },
};
</script>
