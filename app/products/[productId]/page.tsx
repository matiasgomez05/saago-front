import { notFound } from "next/navigation";
import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductId({ params }: Props) {
    if(parseInt(params.productId)>1000){
        notFound();
    }
    return <h1>Product Number { params.productId }</h1> 
}