import config from './redirectConfig.json'

export default function({route, redirect}) {
  const matchedUrl = config.find(r => r.from === route.path)
  if (matchedUrl) {
    return redirect(matchedUrl.to)
  }
}

