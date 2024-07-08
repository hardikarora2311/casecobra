import Thankyou from "@/components/Thankyou";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <Thankyou />
    </Suspense>
  );
};

export default Page;
