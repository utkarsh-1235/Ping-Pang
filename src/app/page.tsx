import { Heading } from "@/components/ui/heading";
import { MaxWidthWrapper } from "@/components/ui/max-width-wrapper";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <>
    <section className="relative py-24 sm:py-32 bg-brand-25">
    <MaxWidthWrapper className="text-center"> 
      <div className="relative mx-auto text-center flex flex-col gap-10 items-center">
        <div>
          <Heading><span>Real-Time Saas Insights,</span>
          <br />
          <span className="relative ">
            Delivered to your Discord
          </span>
          </Heading>
          </div>
      
      <p className="text-base/7">
        PingPang is the easiest way to monitor your Saas. Get instant notifications for {" "}<span className="text-gray-700"> sales, new users, or any other event</span>{" "}sent directly to your discord
      </p>
      <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-center sm:items-start">
      {[
          "Real-time Discord alerts for critical events",
          "Buy once, use forever",
          "Track sales, new users, or any other event",
      ].map((item, index) => (
           <li key={index} className="flex gap-1.5 items-center text-center">
            <Check className="size-5 shrink-0 text-brand-700"/>
            {item}
           </li>
      ))}

      </ul>
      <div className="w-full max-w-80">
       <ShinyButton href="/signup" className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"> Start For Free Today</ShinyButton>
      </div>
      </div>
       </MaxWidthWrapper>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    </>
    
  );
}
