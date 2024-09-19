export const metadata = {
  title: {
    absolute: "Login"
  }
};

export default function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <h1>Login index</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
