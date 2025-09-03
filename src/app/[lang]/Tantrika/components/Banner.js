import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full max-w-md border border-blue-600 rounded-lg overflow-hidden">
      <Image
      height={1000}
      width={1000}
        src="/assets/TantrikaLogo.png"
        alt="Tantrika Banner"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

