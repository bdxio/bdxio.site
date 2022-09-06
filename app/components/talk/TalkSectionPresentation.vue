<template>
  <section class="talk-section-presentation">
    <section-title tag="h2">
      Talk n°{{ presentation.id }} title
    </section-title
    >
    <flex-container class="tag-container">
      <flex-item class="tag">{{ presentation.type }} - {{ presentation.duration }}min</flex-item>
      <flex-item class="tag">{{ presentation.level }}</flex-item>
    </flex-container>
    <p>
      {{ presentation.abstract }}
    </p>
  </section>
</template>

<script>
export default {
  name: "TalkSectionPresentation",
  props: {
    presentation: {
      type: Object,
      required: true,
      validator: (value) => {
        let result = true;
        ['id', 'type', 'duration', 'level', 'abstract'].forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(value, key)) {
            result = false;
          }
        });
        return result;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.talk-section-presentation {
  margin-bottom: 90px;
}

.tag-container {
  gap: 20px;
}

.tag {
  border: 2px solid #242457;
  border-radius: 130px;
  font-size: 18px;
  padding: 12px 20px;
  line-height: 18px;
}
</style>
