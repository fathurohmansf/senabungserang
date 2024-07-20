const ngrok = require('ngrok');

export default function() {
    this.nuxt.hook('listen', async({ port }) => { // Hapus `host` dari parameter
        const url = await ngrok.connect({ addr: port });
        console.log(`Ngrok URL: ${url}`);
    });
}