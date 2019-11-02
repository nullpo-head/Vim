import * as fs from 'fs';
import { IConfiguration } from "../iconfiguration";
import { IConfigurationValidator, ValidatorResults } from "../iconfigurationValidator";

export class VimrcValidator implements IConfigurationValidator {
  async validate(config: IConfiguration): Promise<ValidatorResults> {
    const result = new ValidatorResults();

    if (config.vimrc.enable && !fs.existsSync(config.vimrc.path) ) {
      result.append({
        level: 'error',
        message: `.vimrc not found at ${config.vimrc.path}`
      });
    }

    return result;
  }

  disable(config: IConfiguration): void {
    // no-op
  }
}