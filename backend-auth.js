const msal = require('@azure/msal-node');
const { msalConfig } = require('./authConfig');

// This is how the backend will get the accessToken

const main = async () => {

    const msalInstance = new msal.ConfidentialClientApplication(msalConfig);

    const tokenResponse = await msalInstance.acquireTokenByClientCredential({        
        scopes: ['https://graph.microsoft.com/.default'],
    });

    console.log(tokenResponse)
}

main().then()