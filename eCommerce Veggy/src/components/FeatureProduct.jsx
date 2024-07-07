const productData = [
    {
        img:"/product-1.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    },
    {
        img:"/product-2.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    },
    {
        img:"/product-3.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    },
    {
        img:"/product-4.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    },
    {
        img:"/product-5.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    },
    {
        img:"/product-6.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    },
    {
        img:"/product-7.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    },
    {
        img:"/product-8.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    },
    {
        img:"/product-9.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    },
    {
        img:"/product-10.jpg",
        name:"ORGANIC BARKLETT PEAR",
        price:"$35.99"
    }
];
import Product from "./Product";
export default function FeatureProduct() {
  return (
    <div className="pt-20">
      <div className="container">
      <div className="sm:flex justify-between items-center">
        <div className="text-xl md:text-4xl pb-4 sm:pb-0">
Feature Product
        </div>
        <div className="flex gap-8 items-center text-[14px] md:text-lg">
<button className="border-b border-[#000] ">
Best Sellers
</button>
<button>Most Popular</button>
        </div>
      </div>
       {/* Grid */}
       <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grd:cols-4 xl:grid-cols-5 gap-8">
{
    productData.map((items)=>(
       <Product key={items.img}
       img={items.img}
       name={items.name}
       price={items.price}
       /> 
    ))
}
       </div>
      </div>
    </div>
  )
}
