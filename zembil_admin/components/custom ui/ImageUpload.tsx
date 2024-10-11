import React from "react";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import {SquarePlus} from "lucide-react"

function ImageUpload() {
  return (
    <CldUploadWidget uploadPreset="ryjpsjyl">
      {({ open }) => {
        return (
          <Button onClick={() => open()} className="bg-grey-1 text-white">
            <SquarePlus />
            Upload Image
          </Button>
        );
      }}
    </CldUploadWidget>
  );
}

export default ImageUpload;
