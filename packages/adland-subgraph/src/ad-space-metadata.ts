import { Bytes, dataSource, json, log } from "@graphprotocol/graph-ts";
import { AdSpaceMetadata } from "../generated/schema";

export function handleMetadata(content: Bytes): void {
  let adSpaceMetadata = new AdSpaceMetadata(dataSource.stringParam());

  log.info("Updating metadata for ad space: {}", [dataSource.stringParam()]);

  if (adSpaceMetadata) {
    let metadata = json.fromBytes(content).toObject();
    if (metadata) {
      let image = metadata.get("image");
      if (image) {
        let ipfsString = image.toString();

        let cid = ipfsString.replace("ipfs://", "");

        adSpaceMetadata.image = ipfsString;
        adSpaceMetadata.imageGatewayURI =
          "https://" +
          "amethyst-representative-mandrill-369.mypinata.cloud" +
          "/ipfs/" +
          cid;
      }

      let name = metadata.get("name");
      if (name) {
        adSpaceMetadata.name = name.toString();
      }

      let description = metadata.get("description");
      if (description) {
        adSpaceMetadata.description = description.toString();
      }

      let aspect_ratio = metadata.get("aspect_ratio");
      if (aspect_ratio) {
        adSpaceMetadata.aspect_ratio = aspect_ratio.toString();
      }

      let animation_url = metadata.get("animation_url");
      if (animation_url) {
        adSpaceMetadata.animation_url = animation_url.toString();
      }

      let external_url = metadata.get("external_url");
      if (external_url) {
        adSpaceMetadata.external_url = external_url.toString();
      }
    }

    adSpaceMetadata.save();
  }
}
