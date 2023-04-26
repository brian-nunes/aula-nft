import useMetaMask from "../contexts/MetaMaskProvider";
import "../styles/MainText.css"

const MainText: React.FC = () => {
    const { isConnected, hasNFT } = useMetaMask();
    let textFinal = '';

    if (isConnected){
        if (hasNFT) {
            textFinal = "Parabéns, você já tem nossa NFT!";
        } else {
            textFinal = "Parabéns, você pode mintar nossa NFT!";
        }
    } else {
        textFinal = "Olá, você encontrou nossa NFT, conecte sua carteira!";
    }

    return <p className="MainText">{textFinal}</p>
}

export default MainText;