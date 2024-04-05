import Image from "next/image";
import React from "react";

const BrandComponent = () => {
  return (
    <>

<section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
   <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
               <a
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
               <Image width={100} height={100}
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                  alt="image"
                  className="w-full h-10"
                  />
               </a>
               <a
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
               <Image width={100} height={100}
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/lineicons.svg"
                  alt="image"
                  className="w-full h-10"
                  />
               </a>
               <a
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
               <Image width={100} height={100}
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                  alt="image"
                  className="w-full h-10"
                  />
               </a>
               <a
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
               <Image width={100} height={100}
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                  alt="image"
                  className="w-full h-10"
                  />
               </a>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
};

export default BrandComponent;


