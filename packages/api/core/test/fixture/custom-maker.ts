import { ForgePlatform } from '@electron-forge/shared-types';
import MakerBase from '@electron-forge/maker-base';

interface Config {
  artifactPath: string;
}

export default class Maker extends MakerBase<Config> {
  name = 'custom-maker';

  defaultPlatforms = ['linux'] as ForgePlatform[];

  isSupportedOnCurrentPlatform(): boolean {
    return true;
  }

  async make(): Promise<string[]> {
    return Promise.resolve([this.config.artifactPath || 'default']);
  }
}
