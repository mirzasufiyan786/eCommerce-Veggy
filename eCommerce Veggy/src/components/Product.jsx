import { CiHeart } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { TfiShoppingCartFull } from "react-icons/tfi";
export default function Product({ img, name, price }) {
    return (
        <div className="border border-gray-300 p-4 cursor-pointer relative group hover:shadow-2xl">
            <img src={img} alt={name} />
            <div className="pt-8">
                <p className="text-gray-500">
                    Fruits
                </p>
                <h2>{name}</h2>
                <div className="pt-1 flex items-center gap-2">
                    <div className="text=[#ffc78b]text-[14px] flex " >
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                    <p className="text-gray-500 text-[12px]">(321,976)</p>
                </div>
                <h3 className="text-primary text-xl pt-2">{price}</h3>
            </div>

            {/* show olly on hover */}
            <div className="absolute w-full top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex gap-2 items-center  absolute left-[50%] translate-x-[-50%]">
                    <div className="bg-[#f3ebd6] h-[40px] w-[40px] rounded-full grid place-items-center text-[24px]
text-primaryDark hover:bg-primaryDark hover:text-white">
                        <TfiShoppingCartFull />
                    </div>

              
                <div className="bg-[#f3ebd6] h-[40px] w-[40px] rounded-full grid place-items-center text-[24px]
text-primaryDark hover:bg-primaryDark hover:text-white">
                    <CiHeart />
                </div>
            </div>
            </div>

        </div>
    )
}
