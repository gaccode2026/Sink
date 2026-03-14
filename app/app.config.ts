export default defineAppConfig({
  title: 'FCAI-Sink',
  github: 'https://github.com',
  coffee: 'https://ifdian.net/a/warmo',
  twitter: 'https://github.com',
  telegram: 'https://github.com',
  description: '记录一个简单的项目，是时候开启一段新的征程！',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
