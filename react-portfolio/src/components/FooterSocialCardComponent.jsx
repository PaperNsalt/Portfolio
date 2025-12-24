import { motion } from "motion/react";

const FooterSocialCard = ({ icon, platform, username, url }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-row justify-start items-start gap-6"
    >
      {icon}

      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="xl:text-[6rem] tracking-[-0.1em] leading-20">
          {platform}
        </h1>
        <motion.p className="border rounded-3xl py-1 px-4 xl:text-[3.2rem] tracking-[-.1em] hover:bg-white/80">
          {" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#f2552e] ">
            {" "}
            {username}{" "}
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FooterSocialCard;
