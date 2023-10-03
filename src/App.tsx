import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { postForm } from "./services/api";
import { createNFT } from "./web3";

function App() {
  const [file, setfile] = useState<any>(null);
  const [image, setimage] = useState<any>(null);
  const handleFileChange = (event: any) => {
    setfile(event.target.files[0]);
  };
  const handleUpload = async (event: any) => {
    event.preventDefault();
    const data = new FormData();
    data.append("image", file, file.name);
    const response = await postForm("upload/image", data);
    setimage(response.data.data[0].path);
    console.log(response);
  };
  const mint = async () => {
    // const address = await createNFT(
    //   {
    //     name: "fanhub.sol.NFT",
    //     description: "FANHUB NFT",
    //     symbol: "FANHUB",
    //     attributes: [],
    //   },
    //   image
    // );
    // console.log(address);
  };

  return (
    <>
      <img src={image} alt="" />
      <form className="App" onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </form>
      <button onClick={mint}>Mint</button>
    </>
  );
}

export default App;
