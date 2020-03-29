import devConfig from "./dev";
import prodConfig from "./prod";

// 输出日志信息
const commonConfig = {
  noConsole: true
};

const config = process.env.NODE_ENV === 'development'
  ? { ...commonConfig, ...devConfig }
  : { ...commonConfig, ...prodConfig };

export default config;
