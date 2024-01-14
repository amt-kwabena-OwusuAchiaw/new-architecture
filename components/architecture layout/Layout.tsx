import Image from "next/image";
import addPhotoImage from "../../assets/images/young-man.png";
import interest from "../../assets/images/interest.png"
import step4 from "../../assets/images/step4.png"
import completed from "../../assets/icons/completed.svg"
export default function Layout({
  children,
  imageState,
}: {
  children: React.ReactNode;
  imageState: string;
}) {
  return (
    <div className="flex w-[100vw] overflow-x-hidden">
      <div className="w-[50vw] bg-background-image h-[100vh] flex flex-col justify-end items-center">
        {imageState !== "noImage" && (
          <Image
            src={imageState==="addAPhoto"? addPhotoImage:imageState==="Interest"?interest:imageState==="ExtraInterest"?step4: imageState==="completed"? completed:''}
            alt="addPhotoImage"
            className="object-contain"
          />
        )}
      </div>
      <div className="w-[50vw]">{children}</div>
    </div>
  );
}
