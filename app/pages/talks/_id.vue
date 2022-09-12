<template>
  <section>
    <pre>{{ talk }}</pre>
  </section>
</template>

<script>
export default {
  name: "TalkPage",
  layout: "page",
  head() {
    return {
      title: "Talk | BDX I/O"
    };
  },
  asyncData(context) {
    const {
      params: { id },
      $axios,
      $config
    } = context;

    $axios
      .get(`${$config.cmsApiUrl}/talks/${id}`, {
        params: {
          populate: "*"
        }
      })
      .then(({ data: { data } }) => {
        return {
          talk: data
        };
      });
  }
};
</script>