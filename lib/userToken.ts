import { config } from '@/config';
import proxy from '@/utils/proxy';

export const userToken = {
    /** 获取用户token */
    getAuthToken: async () => {
        // 从数据库获取可用token和代理地址
        return {
            authTokens: ['40c2dd06d99d6d05a978b6207daa0631d132fa9b'], // config.twitter.authToken,
            proxyUris: ['http://127.0.0.1:7897'], // proxy.proxyUri,
        };
    },
    /** 用户token过期 */
    autoTokenExpired: async (token: string) => {
        // 在数据库调整用户过期状态
        const tokenIndex = config.twitter.authToken?.indexOf(token) || -1;
        if (tokenIndex > -1) {
            config.twitter.authToken?.splice(tokenIndex, 1);
        }
    },
};
