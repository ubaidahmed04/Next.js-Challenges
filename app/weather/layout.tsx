export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <h1 className="text-2xl text-center bg-gray-300">Weather App</h1>
      {children}
      </>
    );
  }
  