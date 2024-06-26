import React from "react";

const Productscard = ({ products }) => {
  return (
    <div className="mt-10 mx-8 border px-5 py-5 rounded-md ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg group relative border border-slate-100"
          >
            <div className=" img-div items-center justify-center block mx-auto group-hover:opacity-75 flex bg-rose-100 rounded-t-lg ">
              <img
                src={product.image}
                alt=""
                className="image h-36 items-center object-cover p-3 mix-blend-multiply "
              />
            </div>
            <div className="mx-2 mt-2">
              <h2 className="font-bold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productscard;
