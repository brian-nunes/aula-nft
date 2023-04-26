import React, { createContext, useState, ReactNode, useContext } from 'react';

interface MetaMaskContextProps {
  isConnected: boolean,
  hasNFT: boolean,
  connect: () => void,
  mintNFT: () => void
}

export const MetaMaskContext = createContext<MetaMaskContextProps>({
  isConnected: false,
  hasNFT: false,
  connect: () => {},
  mintNFT: () => {}
});

export const MetaMaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [hasNFT, setHasNFT] = useState<boolean>(false);

    const connect = () => {
        // Aqui entra o código de conectar a carteira
        setIsConnected(true);
    }

    const mintNFT = () => {
        // Aqui entra o código de mintar a NFT
        setHasNFT(true);
    }

  return (
    <MetaMaskContext.Provider value={{ isConnected, hasNFT, connect, mintNFT }}>
      {children}
    </MetaMaskContext.Provider>
  );
};

const useMetaMask = () => useContext(MetaMaskContext);

export default useMetaMask;
