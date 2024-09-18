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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <h2>Specific layout for Product ID</h2>
      </body>
    </html>
  );
}
