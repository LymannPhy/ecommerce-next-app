// import { describe } from "node:test";
// import { title } from "process";
// import React from "react";
// export type ParamProps = {
//   params: {
//     id: number;
//   };
// };

// async function getDetail(id: number) {
//   const productDetail = await fetch(`https://store.istad.co/api/products/${id}`);
//   const res = await productDetail.json();
//   return res.results;
// }

// export async function generateMetadata({params}: any) {
//   const id = params.id
//   const product = await getDetail(id);
//   return {
//     name: product?.name,
//     desc: product.desc,
//     openGraph: {
//       image: product.image,
//     },
//   }
// }


// async function page({ params }: ParamProps) {
//   const id = params.id;
//   const productDetail = await getDetail(id);
//   return (
//     <div>
//       <h1 className="font-bold text-xl">
//         Product Name:
//         {productDetail.name}
//       </h1>
//     </div>
//   );
// }

// export default page;