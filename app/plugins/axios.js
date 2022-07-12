export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (process.server) {
      config.url = config.url.replace("/api/", process.env.VUE_APP_API_URL);
    }
  });
}
