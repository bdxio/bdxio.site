<script>
import { filterClassProps, mapPropsToClasses } from "./_helpers";

export default {
  name: "FlexItem",
  functional: true,
  render(h, { props, listeners, children, data }) {
    const classProps = filterClassProps(props);

    const tagProp = props.tag || "div";
    return h(
      tagProp,
      {
        attrs: {
          class: `${mapPropsToClasses(classProps)} flex-item ${data.staticClass || ""} ${data.class || ""}`
        },
        on: listeners
      },
      children
    );
  }
};
</script>
