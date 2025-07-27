import { Heading } from "./components/heading";
import { MaxWidthWrapper } from "./components/max-width-wrapper";

export default function Home() {
  return (
    <>
    <section className="relative py-24 sm:py-32 bg-brand-25">
    <MaxWidthWrapper className="text-center"> 
      <div className="relative mx-auto text-center flex flex-col gap-10 items-center">
          <Heading><span>Real-Time Saas Insights,</span>
          <br />
          <span className="relative ">
            Delivered to your Discord
          </span>
          </Heading>
      </div>
      <p className="text-base/7">
        PingPang is the easiest way to monitor your Saas. Get instant notifications for <span className="text-gray-700"> sales, new users, or any other event</span>sent directly to your discord
      </p>
       </MaxWidthWrapper>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    </>
    
  );
}
