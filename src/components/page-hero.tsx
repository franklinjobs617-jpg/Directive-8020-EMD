import Image from "next/image";

interface PageHeroProps {
  src: string;
  alt: string;
  title?: string;
}

export function PageHero({ src, alt, title }: PageHeroProps) {
  return (
    <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden rounded-lg mb-8">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
}
