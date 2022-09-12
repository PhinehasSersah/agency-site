import Image from "next/image";

const Categories = ({ nestedBlok }) => {
  return (
    <div className="w-full h-full">
      <Image
        src={nestedBlok.image.filename}
        alt={nestedBlok.title}
        className="object-cover rounded-full shadow-sm "
        width={500}
        height={500}
        layout="responsive"
      />

      <p className="text-center mt-10 font-incon uppercase tracking-wider transition ease-in duration-500 text-sm hover:text-yellow-700 hover:underline underline-offset-4">
        {nestedBlok.title}
      </p>
    </div>
  );
};

export default Categories;
