import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569398016530_7116';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };
  // config.customLoader = {
  //    controller: {
  //     directory: 'app/io/controller',
  //     inject: 'app',
  //     caseStyle: 'upper',
  //   },
  // };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
