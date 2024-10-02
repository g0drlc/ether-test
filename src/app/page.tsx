import Image from "next/image";
import { Title } from "@/components/Title";
import { Card } from "@/components/Card";
import { Picture } from "@/components/Picture";
import { DetailCard } from "@/components/DetailCard";

export default function Home() {
  return (
    <main className="relative">
      <Title />
      <Picture />
      <div className="flex max-lg:flex-col justify-center items-center gap-[30px] bg-[url('/img/effect1.png')] bg-no-repeat bg-center mb-[116px]">
        <DetailCard
          title={"Detributed Token"}
          subTitle1={"current"}
          value1={4817121.2}
          subTitle2={"total supply"}
          value2={10000000000.0}
          percentShow={false}
        />
        <DetailCard
          title={"Total Staked NFTS"}
          subTitle1={"staked"}
          value1={3252}
          subTitle2={"Total"}
          value2={5500}
          percentShow={true}
        />
      </div>
    </main>
  );
}
