import useMetaMask from "../contexts/MetaMaskProvider"
import '../styles/Button.css'

const Button: React.FC = () => {
    const {isConnected, hasNFT, connect, mintNFT} = useMetaMask();
    
    if (!isConnected) {
        return (<button className='button' onClick={connect}>Conectar</button>)
    } else if (!hasNFT) {
        return(<button className='button' onClick={mintNFT}>Pegar NFT!</button>)
    } else {
        return (<></>)
    }
}

export default Button;