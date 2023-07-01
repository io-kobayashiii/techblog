type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <>
      <main className="bg-gray-800 pt-106 pb-50 md:pt-180 md:pb-80">
        <article className="mx-auto max-w-lg px-15 md:px-30">
          {children}
        </article>
      </main>
    </>
  );
}
