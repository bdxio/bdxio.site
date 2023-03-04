<script setup lang="ts">
import { h, Component, useAttrs, useSlots } from "vue";

type SectionTitle = {
  tag: "h1" | "h2" | "h3" | "h4";
  color: "light" | "dark";
  section?: true;
};

const props = withDefaults(defineProps<SectionTitle>(), {
  tag: "h2",
  color: "dark",
  section: undefined,
});
const children = useSlots();
const attrs = useAttrs();

const getTitleClasses = (props: SectionTitle) => {
  if (!props) {
    return "";
  }

  const classes = [];

  classes.push(props.color || "dark");
  classes.push(
    props.section === undefined ? `title--subsection` : `title--section`
  );

  return classes.join(" ");
};

return () =>
  h(
    props.tag,
    {
      class: `${getTitleClasses(props)} ${attrs.staticClass || ""}`,
      on: attrs.listeners,
    },
    children
  );
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
