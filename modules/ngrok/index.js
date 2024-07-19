const ngrok = require('ngrok');

export default function() {
    this.nuxt.hook('listen', async(server, { host, port }) => {
        const url = await ngrok.connect({ addr: port });
        console.log(`Ngrok URL: ${url}`);
    });
}