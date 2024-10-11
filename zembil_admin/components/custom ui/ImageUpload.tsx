import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    if (result.event === "success") {
      const info = result.info as { secure_url: string };
      onChange(info.secure_url);
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center">
        {value.map((url) => (
          <Image
            key={url}
            src={url}
            alt="collection"
            width={100}
            height={100}
            className="object-cover rounded-lg"
          />
        ))}
      </div>

      <CldUploadWidget uploadPreset="ryjpsjyl" onUpload={onUpload}>
        {({ open }) => {
          return (
            <Button onClick={() => open()} className="bg-grey-1 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
