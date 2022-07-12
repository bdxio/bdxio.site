export default function ({ $axios }) {
  console.log("process.env", process.env.VUE_APP_API_URL);
  console.log("process.env", process.env.API_URL);
  $axios.onRequest((config) => {
    if (process.server) {
      config.url = config.url.replace("/api/", process.env.VUE_APP_API_URL);
    }
  });
}
