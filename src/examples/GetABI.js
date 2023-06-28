import { ethers } from 'ethers';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  const address = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
  const apiKey = 'SIT14YYXWD6QJBZKHQ2GZN8BHJAQ3H6J8Y';
  const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`;

  const infuraUrl =
    'https://mainnet.infura.io/v3/2d7875eeec4c48b28158f1b9b5e85db7';

  useEffect(() => {
    const getABI = async () => {
      const res = await axios.get(url);
      const abi = JSON.parse(res.data.result);
      const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
      const contract = new ethers.Contract(address, abi, provider);

      const name = await contract.name();
      const totalSupply = await contract.totalSupply();

      console.log('name :>> ', name);
      console.log('totalSupply :>> ', totalSupply.toString());
    };

    getABI();
  }, [url]);

  return (
    <div>
      <h1>get ABI</h1>
    </div>
  );
};

export default App;
