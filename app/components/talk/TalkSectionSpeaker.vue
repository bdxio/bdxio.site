<template>
  <section class="talk-section-speaker">
    <section-title tag="h3"
      >{{ speaker.name }}</section-title
    >
    <flex-container tag="ul" class="speaker-infos">
      <flex-item tag="li">
        <img
          src="~/assets/img/socials/twitter.svg"
          alt="Icône Twitter BDX IO"
          class="info-logo"
        />
        <span>
          @twitter
        </span>
      </flex-item>
      <flex-item tag="li">
        <img
          src="~/assets/img/icons/company.svg"
          alt="Icône Twitter BDX IO"
          class="info-logo"
        />
        <span>
          Company
        </span>
      </flex-item>
      <flex-item tag="li">
        <img
          src="~/assets/img/socials/github.svg"
          alt="Icône Twitter BDX IO"
          class="info-logo"
        />
        <span>
          github
        </span>
      </flex-item>
      <flex-item tag="li">
        <img
          src="~/assets/img/icons/location.svg"
          alt="Icône Twitter BDX IO"
          class="info-logo"
        />
        <span>
          Location, Country
        </span>
      </flex-item>
    </flex-container>
    <p>
      {{ speaker.presentation }}
    </p>
  </section>
</template>

<script>
export default {
  name: "TalkSectionSpeaker",
  props: {
    speaker: {
      type: Object,
      required: true,
      validator: (value) => {
        let result = true;
        ['name', 'presentation'].forEach(key => {
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
.talk-section-speaker {
  background: #f5f5f5;
  padding: 50px;

  h3 {
    margin: 0;
    font-family: 'Lato';
    color: #000;
    font-size: 22px;
  }

  .speaker-infos {
    gap: 80px;
    margin: 60px 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      .info-logo {
        width: 40px;
        height: 40px;
        margin-right: 12px;
      }
    }
  }

  p {
    margin: 0;
  }
}
</style>
