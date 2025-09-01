import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // PPR (Partial Prerendering) 是實驗性功能，需要 Next.js canary 版本，暫時移除以確保穩定運行
  // experimental: { 
  //   ppr: 'incremental' //incremental: 對特定路線採用 PPR
  // }
};

export default nextConfig;
