<template>
  <div class="v-input-container">
    <label
      :for="`v-input-${_uid}`"
      :class="{ active: isFocused || fieldValue, focused: isFocused }"
    >
      <slot />
    </label>
    <input
      v-model="fieldValue"
      :type="type"
      :pattern="pattern"
      :required="required"
      :disabled="disabled"
      :step="step"
      :min="min"
      :max="max"
      :name="`v-input-${_uid}`"
      :id="`v-input-${_uid}`"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    value: {
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    pattern: String,
    required: Boolean,
    disabled: Boolean,
    step: {
      type: Number,
      validator: () => {
        return this.type === "number";
      },
    },
    min: {
      type: Number,
      validator: () => {
        return this.type === "number";
      },
    },
    max: {
      type: Number,
      validator: () => {
        return this.type === "number";
      },
    },
  },
  data() {
    return {
      isFocused: false,
    };
  },
  computed: {
    fieldValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.v-input-container {
  position: relative;
  display: inline-block;
  transition: 0.75s ease-in;
  border-radius: 2px 2px 0 0;
  margin-top: 1rem;

  label {
    position: absolute;
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    padding: 0.5rem;
    font-size: 0.7rem;
    transition: 0.3s;
    transform-origin: left;
    color: $primary;
    pointer-events: none;

    &.active {
      transform: scale(0.8) translateY(-85%);
    }

    &.focused {
      color: $red;
    }
  }

  input {
    border: none;
    background: $white;
    padding: 0.5rem;
    outline: none;
    transition: 0.3s ease-in;
    color: $dark-font;
    height: 1rem;
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, $red 50%, $primary 50%);
    background-size: 250%;
    background-position: right;
    transition: 0.3s cubic-bezier(0.8, 0, 0.2, 1);
  }

  &:hover {
    input {
      background: $light;
      transition: 0.3s;
    }
  }

  &:focus-within {
    input {
      background: $light;
      color: $dark-font;
      transition: 0.3s ease-in;
    }
    &::after {
      background-position: left;
    }
  }
}
</style>
