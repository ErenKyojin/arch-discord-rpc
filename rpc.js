const clientId = '1062108549922160690';
const discRPC = require('discord-rpc');
const RPC = new discRPC.Client({transport: 'ipc'});
const refreshTime = 15000;

discRPC.register(clientId)

async function activity()
{
    if(RPC == false) return;
    RPC.setActivity({

        details: 'Using arch btw',
        state: 'I\'m on ' + process.platform,
        startTimestamp: Date.now(),
        largeImageKey: '1',
        largeImageText: 'Not to brag but i\'m an arch user',
        smallImageKey: '2',
        smallImageText: 'just a penguin',
        instance: false,
        buttons: [
            {label: '🐧', url: 'https://github.com/ErenKyojin/arch-discord-rpc'}
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
