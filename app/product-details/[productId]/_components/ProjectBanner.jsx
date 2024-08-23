import Image from "next/image";

function ProjectBanner({ product }) {
  const bannerUrl = product?.attributes?.banner?.data?.attributes?.url;
  const baseUrl = "http:/localhost:1337";

  // Only set imageUrl if bannerUrl exists
  const imageUrl = bannerUrl ? `${baseUrl}${bannerUrl}` : null;
  return (
    <div>
      {product ? (
        <Image
          src={imageUrl}
          alt="banner"
          width={400}
          height={350}
          className="rounded-lg object-cover text-center sm:float-right"
        />
      ) : (
        <div className="h-[350px] w-[350px] bg-slate-200 animate-pulse">
          Loading...
        </div>
      )}
    </div>
  );
}

export default ProjectBanner;
