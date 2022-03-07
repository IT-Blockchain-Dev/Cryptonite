import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
});

const infura_key = "ac2d1dc3090f44eca8aa5fa53eeba9ca";
// const walletconnect = new WalletConnectConnector({
//     rpcUrl: `https://mainnet.infura.io/v3/${infura_key}`,
//     bridge: "https://bridge.walletconnect.org",
//     qrcode: true,
// });
const walletconnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${infura_key}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

const walletlink = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${infura_key}`,
    appName: "web3-react-demo",
});

export const connectors = {
    injected: injected,
    walletConnect: walletconnect,
    coinbaseWallet: walletlink,
};
