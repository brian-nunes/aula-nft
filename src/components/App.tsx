import '../styles/App.css';
import Logo from './Logo';
import useMetaMask from '../contexts/MetaMaskProvider';

function App() {
  const { isConnected, hasNFT, connect, mintNFT } = useMetaMask();
  
  return (
    <div className="App">
      <header className="App-header">
        <p className="pText">{isConnected ? (hasNFT ? "Parabéns, você já tem nossa NFT!" : "Parabéns, você pode mintar nossa NFT!") : "Olá, você encontrou nossa NFT, conecte sua carteira!"}</p>
        <Logo />
        {!isConnected && <button className='button' onClick={connect}>Conectar</button>}
        {(isConnected && !hasNFT) && <button className='button' onClick={mintNFT}>Pegar NFT!</button>}
      </header>
    </div>
  );
}

export default App;
