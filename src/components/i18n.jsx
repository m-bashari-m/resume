import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         Hero: "About",
         Projects: "Projects",
         Skills: "Skills",
         Contact: "Contact",
         Developer: "Mojtaba Bashari",
         PopupSuccess: "Your email has been sent. You should receive a reply from me soon",
         PopupError: "There is something wrong. Try one more time or use another way",
         FormNamePlaceholder: "Name",
         FormEmailPlaceholder: "Email",
         FormMessagePlaceholder: "Type your message here ...",
         FormMessageField: "Message",
         FormSend: "Send",
         FormNameError: "At least 3 characters needed",
         FormNameErrorRequired: "Please enter your name",
         FormEmailError: "Email is not valid",
         FormEmailErrorRequired: "Please enter your email",
         FormMessageErrorRequired: "Please Enter your message",
        }
      },
      fa: {
        translation: {
          Hero: "درباره",
          Projects: "پروژه ها",
          Skills: "مهارت ها",
          Contact: "ارتباط",
          Developer: "مجتبی بشری",
          PopupSuccess: "ایمیل شما با  موفقیت ارسال شد",
          PopupError: "مشکلی پیش آمده. یک بار دیگر تلاش کرده یا از روشی دیگر استفاده کنید",
          FormNamePlaceholder: "نام",
          FormEmailPlaceholder: "ایمیل",
          FormMessagePlaceholder: "پیام خود را اینجا بنویسید ...",
          FormMessageField: "پیام",
          FormSend: "ارسال",
          FormNameError: "حداقل ۳ حرف وارد کنید",
          FormNameErrorRequired: "لطفا نام خود را وارد کنید",
          FormEmailError: "ایمیل نامعتبر است",
          FormEmailErrorRequired: "لطفا ایمیل خود را وارد کنید",
          FormMessageErrorRequired: "لطفا پیام خود را بنویسید",
        }
      },
    }
  });

export default i18n;
