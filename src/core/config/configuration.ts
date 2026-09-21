export interface AppConfig {
  env: string;
  port: number;
  observe: {
    appKey: string;
    appSecret: string;
  };
}

export default (): AppConfig => ({
  env: process.env.NODE_ENV ?? 'development',
  port: parseInt(process.env.PORT ?? '3000', 10),
  observe: {
    appKey: process.env.OBSERVE_APP_KEY!,
    appSecret: process.env.OBSERVE_APP_SECRET!,
  },
});
