import { createI18n } from "vue-i18n";

import zhTW from "./locales/zh-TW.json";
import en from "./locales/en.json";

export default createI18n({
  legacy: false,
  locale: "zh-TW",
  messages: {
    "zh-TW": zhTW,
    en: en,
  },
});
