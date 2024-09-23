"use client";
import { notFound, useRouter } from "next/navigation";
import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  }
}
/*
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};*/

export default function ProductId({ params }: Props) {
    if(parseInt(params.productId)>1000){
        notFound();
    }

    const router = useRouter();
    const handleClick = () => {
      console.log("Added");
      router.push("/");
    }
    return (
      <>
        <button onClick={handleClick}>Add</button>
        <h2>Product Number { params.productId }</h2>
      </>
       
    );
}