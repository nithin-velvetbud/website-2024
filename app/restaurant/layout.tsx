import Header from "@/components/Resturant/Header";
import ScrollToTop from "@/components/ScrollToTop";
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html suppressHydrationWarning lang="en">
       
        <head />
        <body >
        <Header/>
            {children} 
        </body>
      </html>
    );
  }
  

