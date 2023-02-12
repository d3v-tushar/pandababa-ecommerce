import React from "react";

const Categories = () => {
  const homeCategories = [
    {
      title: "Toys",
      imgURL:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-1.jpg&w=1920&q=75",
    },
    {
      title: "Sports",
      imgURL:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-2.jpg&w=1920&q=75",
    },
    {
      title: "Gaming",
      imgURL:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-3.jpg&w=1920&q=75",
    },
    {
      title: "Furniture",
      imgURL:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-4.jpg&w=1920&q=75",
    },
    {
      title: "Fashion",
      imgURL:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-5.jpg&w=1920&q=75",
    },
    {
      title: "Cameras",
      imgURL:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fcategories%2Fcat-6.jpg&w=1920&q=75",
    },
  ];
  return (
    <div className="grid grid-cols-6 gap-x-4 my-12 shadow-sm">
      {homeCategories.map((catetory, index) => (
        <div key={index} className="group relative overflow-hidden cursor-pointer rounded-md w-full h-full">
          <img
            className="group-hover:scale-110 duration-200 w-full"
            src={catetory.imgURL}
            alt=""
          />
          <span className="absolute bottom-2 left-2 right-2 group-hover:bg-black group-hover:text-white font-normal bg-gray-200 rounded-sm py-1.5 bg-opacity-50 group-hover:bg-opacity-100">
            <span className="text-opacity-25">{catetory.title}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
