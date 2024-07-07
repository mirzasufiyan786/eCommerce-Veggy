const productData = [
    {
        img:"/product-6.jpg",
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
import Product from "./Product"
export default function Discound() {
  return (
    <div className="py-20">
      <div className="container">
<h2 className="text-xl md:text-4xl pb-4 sm:pb-0">Discount</h2>
       {/* Grid */}
       <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grd:cols-4 xl:grid-cols-5 gap-8">
        <div className="relative w-fit mx:auto ">
<img className="h-full object-cover" src="/discount-bg.jpg" alt="discount" />
<div className="absolute w-full h-full top-0 left-0 grid place-items-center text-whit ">
<div className="text-xl flex flex-col gap-4 text-white">
<h2 className="text-[40px] font-bold">$20</h2>
<div>
    <p>Under Products</p>
    <p>Limited Time Only</p>
</div>
</div>
</div>
        </div>
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
