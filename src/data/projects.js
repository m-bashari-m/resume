import urlShorteningImage from "../images/url-shortening.jpg"
import travelJourney from "../images/my-travel-journey.jpg"
import nftPreview from "../images/nft-preview-card-component.jpg"
import resume from "../images/my-resume.jpg"

export const data = [
  {
    image: urlShorteningImage,
    title: "URL Shortening API",
    bg: "bg-violet-500",
    bgGradient: "from-violet-500",
    descriptionEn: "This service is designed so that users can share links to websites and resources without having to copy and paste long URLs. This is done with the help of Rebrandly API.",
    descriptionFa: "این سرویس به گونه ای طراحی شده است که کاربران بتوانند لینک های وب سایت ها و منابع را بدون نیاز به کپی و چسباندن URL های طولانی به اشتراک بگذارند. که این کار به کمک Rebrandly API انجام می شود.",
    source: "https://github.com/m-bashari-m/url-shortening",
    demo: "https://m-bashari-m.github.io/url-shortening/",
    badges: ["react", "api", "css"], 
  },
  {
    image: travelJourney,
    title: "My Travel Journey",
    bg: "bg-red-400",
    bgGradient: "from-red-400",
    descriptionEn: "This web page is a guide to helping people plan their own travel journeys. It includes information about popular travel destinations, as well as a link to Google Maps which shows the recommendations destination.",
    descriptionFa: "این صفحه وب راهنمای کمک به افراد برای برنامه ریزی سفرهای خود است. که شامل اطلاعاتی در مورد مقاصد محبوب سفر و همچنین پیوندی به Google Maps است که توصیه‌های مقصد را نشان می‌دهد.",
    source: "https://github.com/m-bashari-m/my-travel-journey",
    demo: "https://m-bashari-m.github.io/my-travel-journey/",
    badges: ["react", "css"], 
  },
  {
    image: nftPreview,
    title: "NFT Preview Card Component",
    bg: "bg-slate-700",
    bgGradient: "from-slate-700",
    descriptionEn: "This NFT is a uniqute preview card that shows the amount of ETH that someone owns, as well as theri name and picture.",
    descriptionFa: "این NFT یک کارت پیش‌نمایش منحصربه‌فرد است که میزان ETH را که یک فرد در اختیار دارد، و همچنین نام و تصویر او را نشان می‌دهد.",
    source: "https://github.com/m-bashari-m/nft-preview-card-component",
    demo: "https://m-bashari-m.github.io/nft-preview-card-component/",
    badges: ["html", "sass", "css"], 
  },
  {
    image: resume,
    title: "My Resume",
    bg: "bg-indigo-400",
    descriptionEn: "This web page shows off my skills and experience in web development. In addition, the project contains links to my portfolio, Telegram and also LinkedIn profile, so potential employers and clients can see my work and contact me about future opportunities.",
    descriptionFa: "این پروژه مهارت و تجربه من در توسعه وب را نشان می دهد. علاوه بر این، این پروژه حاوی لینک هایی به نمونه کارها، تلگرام و همچنین پروفایل لینکدین من است، بنابراین کارفرمایان و مشتریان می توانند کارهای من را ببینند و در مورد فرصت های آینده با من تماس بگیرند.",
    bgGradient: "from-indigo-400",
    source: "https://github.com/m-bashari-m/resume",
    demo: "https://m-bashari-m.github.io/resume/",
    badges: ["react", "tailwind", "formik", "i18next"], 
  },
]