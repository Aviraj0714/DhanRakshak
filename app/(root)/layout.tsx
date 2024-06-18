import MobileNav from "@/components/ui/mobilenav";
import Sidebar from "@/components/ui/sidebar";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={firstname:'Aviraj',lastname:'Bhaliya'}
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn}></Sidebar>
    <div className="flex size-full flex-col">
      <div className="root-layout">
<Image src="/icons/logo.svg" alt="logo" width={30} height={30}/>
<div>
  <MobileNav user={loggedIn}></MobileNav>
</div>
      </div>

    {children}
    </div>
   </main>
  );
}
