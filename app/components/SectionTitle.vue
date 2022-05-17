<script>
function getTitleClasses(props) {
  if (!props) {
    return "";
  }

  let classes = "";

  if (props.tag) {
    if (props.tag === "h2") classes += `title--subsection`;
    if (props.tag === "h3") classes += `title--section`;
  }

  if (props.color) {
    if (props.color === "dark") classes += ` dark`;
    if (props.color === "light") classes += ` light`;
  }

  return classes;
}

export default {
  name: "SectionTitle",
  functional: true,
  render(h, { props, listeners, children, data }) {
    const tagProp = props.tag || "h2";

    return h(
      tagProp,
      {
        attrs: {
          class: `${getTitleClasses(props)} ${data.staticClass || ""}`,
        },
        on: listeners,
      },
      children
    );
  },
};
</script>

<style lang="scss">
.title {
  &--section {
    font-family: $font-family-body;
    font-size: 20px;
    font-weight: $font-weight-thin;
    line-height: 24px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    letter-spacing: 2px;
  }

  &--subsection {
    font-family: $font-family-title;
    font-size: $font-size-title;
  }

  &.dark {
    color: $dark-font;
  }

  &.light {
    color: $light-font;
  }
}
</style>
