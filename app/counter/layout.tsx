
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <h1 className="text-2xl text-center bg-gray-400">Count Timer</h1>
      {children}
      </>
    );
  }
  