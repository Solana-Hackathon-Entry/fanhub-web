import { CONNECTION } from "./connection";
import { ACCOUNT } from "./account";
import { METAPLEX_INSTANCE, getKeypairIdentity } from "./metaplex";
import { toMetaplexFile } from "@metaplex-foundation/js";
import fs from "fs";
import { get } from "https";

export default function urlToBuffer(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const data: Uint8Array[] = [];
    get(url, (res) => {
      res
        .on("data", (chunk: Uint8Array) => {
          data.push(chunk);
        })
        .on("end", () => {
          resolve(Buffer.concat(data));
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  });
}

export const metaplex = METAPLEX_INSTANCE(
  CONNECTION,
  getKeypairIdentity(ACCOUNT)
);

export async function uploadFile(uri: string) {
  const buffer = await urlToBuffer(uri);
  const file = toMetaplexFile(buffer, "image.jpg");
  return await metaplex.storage().upload(file);
}

export async function uploadNFT(metadata: any, imageUri: string) {
  metadata.image = await uploadFile(imageUri);
  const { uri } = await metaplex.nfts().uploadMetadata(metadata);
  return uri;
}

export async function createNFT(metadata: any, imageUri: string) {
  const {
    nft: { address },
  } = await metaplex.nfts().create({
    uri: await uploadNFT(metadata, imageUri),
    name: "FanHUB",
    sellerFeeBasisPoints: 0,
  });

  return address.toString();
}
