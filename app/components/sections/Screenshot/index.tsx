import React from "react";
import Image from "next/image";

export default function ScreenshotSection() {
  return (
    <section className="w-full bg-[#111111] py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center gap-20">
          {/* First Screenshot */}
          <div className="w-full max-w-[768] max-h-[576]">
            <Image
              src="/assets/screen_platform2.webp"
              alt="Platform Screenshot 2"
              width={768}
              height={576}
              className="w-full h-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>

          {/* Second Screenshot */}
          <div className="w-full max-w-[768] max-h-[576]">
            <Image
              src="/assets/screen_platform3.webp"
              alt="Platform Screenshot 3"
              width={768}
              height={576}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
