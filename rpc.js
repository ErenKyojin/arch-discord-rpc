const clientId = '1062108549922160690';
const discRPC = require('discord-rpc');
const distro = require('distro-info');
const RPC = new discRPC.Client({transport: 'ipc'});
const refreshTime = 15000;
const supportedDistros = ['arch', `centos`, `debian`, `elementary`, `fedora`, `kali`, `mageia`, `manjaro`, `mint`, `opensuse`];

discRPC.register(clientId)

async function activity()
{
    if(RPC == false) return;
    if(!supportedDistros.includes(distro.name())) return;
    RPC.setActivity({

        details: `Yeah i use ${distro.name()} btw`,
        state: `(and ${distro.desktop()} as my DE)`,
        startTimestamp: Date.now(),
        largeImageKey: `${distro.name()}`,
        largeImageText: `🔥 Yeah my high IQ requires version ${distro.version()}`,
        smallImageKey: 'penguin',
        smallImageText: 'just a penguin',
        instance: false,
        buttons: [
            {label: '🔥 git', url: 'https://github.com/ErenKyojin/arch-discord-rpc'}
        ]

    });

};

RPC.on('ready', async () => {
    activity();

    setInterval(() => {
        activity();
    }, refreshTime * 1000);
})

RPC.login({clientId}).catch(err => console.error(err));
