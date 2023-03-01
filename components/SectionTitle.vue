<script>
function getTitleClasses(props) {
  if (!props) {
    return "";
  }

  const classes = [];

  classes.push(props.color || "dark");
  classes.push(
    props.section === undefined ? `title--subsection` : `title--section`
  );

  return classes.join(" ");
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
    font-weight: $font-weight-light;
    line-height: 24px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    letter-spacing: 2px;
  }

  &.dark {
    color: $primary-dark;
  }

  &.light {
    color: $light-font;
  }
}
</style>
