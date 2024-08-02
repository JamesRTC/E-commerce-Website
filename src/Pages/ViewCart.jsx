import { useDispatch, useSelector } from "react-redux";
import { products } from "../API/productsAPI";
import { LuMinusCircle } from "react-icons/lu";
import { LuPlusCircle } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { paypalLogo } from "../assets/logos";
import { EmptyCart } from "./EmptyCart";
import { useState } from "react";
import { Overlay } from "../components/Overlay";
import { Modal } from "../components/Modal";
import {
  decreaseItemQuantity,
  deleteItem,
  getCart,
  getTotalCartPrice,
  increaseItemQuantity,
} from "../Redux/cartSlice";

export const ViewCart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  const totalAmount = useSelector(getTotalCartPrice);

  const handleClose = () => {
    setModalIsOpen(false);
  };
  if (cart.length === 0) return <EmptyCart />;

  return (
    <section className="gap-10 overflow-scroll px-10 max-sm:mt-[90px] max-sm:px-5 max-sm:text-sm sm:mt-[145px] lg:flex lg:justify-center">
      <div className="mt-5 w-full border px-5 pt-5 max-sm:mb-[300px] md:max-w-[800px]">
        {cart.map((item) => {
          const product = products[item.category].find(
            (product) => item.productId === product.id,
          );

          return (
            <div key={`${item.productId}-${item.size}`}>
              <div className="mb-5 gap-10 border-b-[1px] pb-5 text-sm md:grid md:grid-cols-[300px,1fr]">
                <div className="max-sm-w-full mb-5 grid grid-cols-[100px,1fr] gap-3">
                  <div className="">
                    {product && (
                      <img
                        src={product.mainImage}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <div className="font-semibold uppercase">{item.name}</div>
                    <div className="uppercase">
                      size: <span className="font-semibold">{item.size}</span>
                    </div>
                    <div className="font-semibold uppercase">In stock</div>
                    <div
                      className="mt-5 text-sm font-semibold uppercase underline-offset-2 hover:cursor-pointer hover:underline"
                      onClick={() => setModalIsOpen(item)}
                    >
                      Edit
                    </div>
                    <div className="">
                      {modalIsOpen === item && product && (
                        <Overlay onClose={handleClose} product={product}>
                          <Modal
                            item={item}
                            product={product}
                            onClose={handleClose}
                          />
                        </Overlay>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between gap-10 max-sm:w-full">
                  <div className="flex flex-col items-center gap-3">
                    <div className="uppercase">Each</div>
                    <div>${item.unitPrice}</div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="uppercase">Quantity</div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="hover:cursor-pointer">
                        <LuMinusCircle
                          className="size-5"
                          onClick={() =>
                            dispatch(
                              decreaseItemQuantity({
                                productId: item.productId,
                                size: item.size,
                              }),
                            )
                          }
                        />
                      </div>
                      <div>{item.quantity}</div>
                      <div className="hover:cursor-pointer">
                        <LuPlusCircle
                          className="size-5"
                          onClick={() =>
                            dispatch(
                              increaseItemQuantity({
                                productId: item.productId,
                                size: item.size,
                              }),
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="uppercase">total</div>
                    <div>${item.totalPrice}</div>
                  </div>

                  <div className="hover:cursor-pointer">
                    <IoMdClose
                      className="size-5"
                      onClick={() =>
                        dispatch(
                          deleteItem({
                            productId: item.productId,
                            size: item.size,
                          }),
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bottom-0 left-0 right-0 z-10 mt-5 w-full border px-5 py-5 max-sm:fixed max-sm:w-full max-sm:bg-white md:max-h-[300px] md:max-w-[400px]">
        <div className="mb-5 text-lg font-bold uppercase">order summary</div>
        <div className="flex justify-between">
          <div className="text-md uppercase">estimated total</div>
          <div>${totalAmount}</div>
        </div>
        <button className="my-10 w-full bg-black py-3 font-bold uppercase text-white transition-all duration-300 hover:bg-black/50 max-sm:my-5">
          checkout
        </button>
        <button className="flex w-full items-center justify-center border-[1px] border-black bg-white py-3 font-bold uppercase text-white transition-all duration-300 hover:border-black/50">
          <img src={paypalLogo} alt="" className="w-[100px]" />
        </button>
      </div>
    </section>
  );
};
