export default function ({ $axios }) {
  console.log("process.env", process.env)
  $axios.onRequest((config) => {
    if (process.server) {
      config.url = config.url.replace('/api/', process.env.API_URL)
    }
  })
}