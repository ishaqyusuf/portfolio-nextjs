import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="content-wrapper">
      <div className="content ">
        <p>
          {`Hello there! 👋 I'm Ishaaq Yusuf, your Tech Maestro hailing from Kwara, Nigeria 🌍.`}
        </p>
        <p>
          {`I'm a Full-Stack Engineer sculpting digital dreams with Next.js, bridging frontiers of innovation at GND PRODESK, where I'm the solo architect of excellence 🚀. Former virtuoso at EaFreight USA, orchestrating brilliance from afar. With a legacy of triumphs on Fiverr and Upwork, I'm your trusted guide through the digital realm 💻. Let's shape the future together!`}
        </p>
        <Button asChild variant="link" size={"lg"} className="inline px-0">
          <Link href="/writing">
            <h2 className="mb-4 mt-8">Writing</h2>
          </Link>
        </Button>
      </div>
    </div>
  );
}
