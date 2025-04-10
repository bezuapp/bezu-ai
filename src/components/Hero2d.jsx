import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import Iphone15Pro from "./ui/iphone-15-pro";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import { circularStd, circularStdMed } from "@/fonts";

export default function Hero2d() {
  const [activeSection, setActiveSection] = useState("video");
  const containerRef = useRef(null);
  const touchStartY = useRef(null);

  // Set this to true if you want the scroll effect to happen only once
  const [scrollOnce, setScrollOnce] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollOnce && activeSection !== "video") return;
      if (e.deltaY > 0) {
        setActiveSection("chat");
      } else if (e.deltaY < -0) {
        setActiveSection("video");
      }

      if (scrollOnce) setScrollOnce(true);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (scrollOnce && activeSection !== "video") return;

      if (touchStartY.current !== null) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY.current - touchY;

        if (deltaY > 50) {
          setActiveSection("chat");
          if (scrollOnce) setScrollOnce(true);
        } else if (deltaY < -50) {
          setActiveSection("video");
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [activeSection, scrollOnce]);

  const changeSection = (section) => {
    setActiveSection(section);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "min-h-screen block  bg-cover",
        activeSection === "video"
          ? "bg-gradient-to-b from-white to-[#FEF1BD]"
          : "bg-black bg-[url('/dbg.svg')] text-white"
      )}
    >
      <div className="pt-5">
        {" "}
        <Navbar dark={true} />
      </div>
      <AnimatePresence mode="wait">
        {activeSection === "video" ? (
          <motion.div
            key="video"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className=" text-black min-h-screen"
          >
            <div className="flex flex-col items-center mt-16  justify-center gap-4  lg:mb-0 mb-16">
              <h1
                className={`${circularStd.className} text-4xl max-w-4xl text-balance mx-auto text-center`}
              >
                Discover, Create, and Chat with your lifelike AI characters in
                Bezu
              </h1>
              <p className={`${circularStdMed.className}`}>
                Lifelike AI friends for you to support and entertain
              </p>
              <div className="flex gap-4">
                {/* <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&pcampaignid=web_share"> */}
                <div className="flex gap-4">
                  <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&hl=en_IN">
                    <Image
                      src="/16.svg"
                      width={250}
                      height={250}
                      alt=""
                      className="w-[150px]"
                    />
                  </Link>
                  {/* <Link href="https://apps.apple.com/app/bezu-ai-video-chat-with-ai/id6737712382">
                    <Image
                      src="/apple.svg"
                      width={500}
                      height={500}
                      alt=""
                      className="w-[150px]"
                    />
                  </Link> */}
                </div>
                {/* <Link href="https://bspu8h9egdg.typeform.com/to/bzC5n3e4">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Join for early access!
                  </span>
                </button>
              </Link> */}
              </div>
              <div className="mx-auto max-h-screen my-10 flex items-center justify-center gap-20">
                <Image
                  src="/25.svg"
                  alt=""
                  width={400}
                  height={500}
                  className="lg:block hidden"
                />
                <Image
                  alt=""
                  width={400}
                  height={400}
                  className="size-full lg:max-h-[80vh] w-max"
                  src="/images/1p.png"
                  type="image"
                />
                <Image
                  src="/26.svg"
                  alt=""
                  width={400}
                  height={500}
                  className="lg:block hidden"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className=" text-white min-h-screen"
          >
            <div className="flex flex-col items-center mt-16 justify-center gap-4 lg:mb-0 mb-16 ">
              {/* <Image src="/logo.svg" alt="" width={50} height={50} /> */}
              <h1
                className={`${circularStd.className} text-4xl max-w-4xl text-balance mx-auto text-center`}
              >
                Discover, Create, and Chat with your lifelike AI characters in
                Bezu
              </h1>
              <p className={`${circularStdMed.className}`}>
                Lifelike AI friends for you to support and entertain
              </p>
              {/* {/* <div className="flex gap-4"> */}
              {/* <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&pcampaignid=web_share"> */}
              <div className="flex gap-4">
                <Link href="https://play.google.com/store/apps/details?id=com.bezu.ai&hl=en_IN">
                  <Image
                    src="/16.svg"
                    width={250}
                    height={250}
                    alt=""
                    className="w-[150px]  rounded-md border"
                  />
                </Link>
                {/* <Link href="https://apps.apple.com/app/bezu-ai-video-chat-with-ai/id6737712382">
                  <Image
                    src="/apple.svg"
                    width={500}
                    height={500}
                    alt=""
                    className="w-[150px] border rounded-md"
                  />
                </Link> */}
              </div>
              {/* <Link href="https://bspu8h9egdg.typeform.com/to/bzC5n3e4">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Join for early access!
                  </span>
                </button>
              </Link> */}
            </div>
            <div className="mx-auto max-h-screen my-10 flex items-center justify-center gap-20">
              <Image
                src="/25d.svg"
                alt=""
                width={400}
                height={500}
                className="lg:block hidden"
              />
              <Image
                alt=""
                width={400}
                height={400}
                className="size-full lg:max-h-[80vh] w-max"
                src="/images/2p.png"
                type="image"
              />
              <Image
                src="/26d.svg"
                alt=""
                width={400}
                height={500}
                className="lg:block hidden"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bottom-20 left-1/2 rounded-full bg-gray-800 lg:mt-0 mt-10 flex gap-5 p-5 w-max px-10 items-center z-10 mx-auto">
        <motion.div
          className={`rounded-full px-5 py-5 cursor-pointer ${
            activeSection === "video"
              ? "bg-yellow-500 text-black"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => changeSection("video")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src="/camera.svg" alt="" width={35} height={35} />
        </motion.div>
        <motion.div
          className={`rounded-full px-5 py-3  cursor-pointer ${
            activeSection === "chat"
              ? "bg-yellow-500 text-black"
              : "bg-gray-200 text-white"
          }`}
          onClick={() => changeSection("chat")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/chat.svg"
            alt=""
            width={30}
            height={30}
            className="text-wh"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
