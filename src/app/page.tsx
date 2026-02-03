import Header from "@/components/sections/header";
import RedeemLoading from "@/components/sections/redeem-loading";
import CookieConsent from "@/components/sections/cookie-consent";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#3c139c] text-white">
      <Header />
      <main className="flex-grow">
        <RedeemLoading />
      </main>
      <CookieConsent />
    </div>
  );
}
