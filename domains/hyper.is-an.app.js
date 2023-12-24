// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Share Account Web', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'hyper', // desired subdomain name
  owner: {
    repo: 'https://github.com/phathua/free-domains',
    email: 'phat2003qn',
  },
  record: {
    CNAME: 'hyper.is-an.app', // e.g.: <your-github-account>.github.io
    TXT: ['v=spf1 mx a include:mail0.serv00.com -all'],
    A: ['128.204.218.48'],
    NS: ['dns1.serv00.com', 'dns2.serv00.com'],
  },
  proxy: false
})
