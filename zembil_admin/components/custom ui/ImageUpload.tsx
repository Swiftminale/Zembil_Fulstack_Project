import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus, Trash } from "lucide-react";
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
  const handleUpload = (result: any) => {
    console.log(result);
    if (result.event === "success") {
      onChange(result.info.secure_url);
    } else {
      console.error("Image upload failed:", result);
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px]">
            <div className="absolute top-0 right-0 z-10">
              <Button
                onClick={() => onRemove(url)}
                size="sm"
                className="bg-red-1 text-white"
                aria-label="Remove image"
              >
                <Trash />
              </Button>
            </div>
            <Image
              src={url}
              alt="Uploaded image"
              fill
              className="object-cover rounded-lg"
              onError={(e) => console.error("Image failed to load", e)}
            />
          </div>
        ))}
      </div>

      <CldUploadWidget
        uploadPreset="xcl2r2qh"
        onSuccess={handleUpload} // Changed to onSuccess
        onError={handleUpload} // Optionally handle errors
      >
        {({ open }) => (
          <Button
            type="button"
            onClick={() => open?.()}
            className="bg-grey-1 text-white"
            aria-label="Upload new image"
          >
            <Plus className="h-4 w-4 mr-2" />
            Upload Image
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
