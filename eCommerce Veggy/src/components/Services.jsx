import { TfiShoppingCartFull, } from "react-icons/tfi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import { TfiGift } from "react-icons/tfi";
import Servicecard from "./Servicecard";
const data = [
{
    title:"FAST AND FREE DELIVERY",
    icon :< TfiShoppingCartFull/>,
    desc:"Free delivery for all orders over $140"
},
{
    title:"FAST AND FREE DELIVERY 2",
    icon :< RiCustomerService2Fill/>,
    desc:"Free delivery for all orders over $140"
},
{
    title:"FAST AND FREE DELIVERY 3",
    icon :< BsShieldCheck/>,
    desc:"Free delivery for all orders over $140"
},
{
    title:"FAST AND FREE DELIVERY 4",
    icon :< TfiGift/>,
    desc:"Free delivery for all orders over $140"
},

];

export default function Services() {
  return (
    <div className="bg-[#f5f2e8]">
     <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-4 py-10">

{
    data.map((items)=>(
        <Servicecard key={items.title} title={items.title}  icon={items.icon} desc={items.desc} />
    ))
}
     </div>
    </div>
  )
}
