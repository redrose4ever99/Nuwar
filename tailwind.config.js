module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_500: "#9f9f9f",
        gray_800: "#393d46",
        bluegray_100: "#cdcfd1",
        bluegray_100_87: "#cdcfd187",
        black_900_0c: "#0000000c",
        gray_50: "#f6f7fb",
        white_A700_82: "#ffffff82",
        yellow_400: "#fae952",
        gray_500_87: "#9f9f9f87",
        black_900_19: "#00000019",
        white_A700: "#ffffff",
        black_900_68: "#00000068",
        black_900_26: "#00000026",
      },
      fontFamily: { poppins: "Poppins", playfairdisplay: "Playfair Display" },
      boxShadow: {
        bs2: "0px 16px  25px 0px #0000000c",
        bs3: "0px 16px  50px 0px #0000000c",
        bs1: "0px 16px  50px 0px #00000019",
        bs: "0px 16px  50px 0px #00000026",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
