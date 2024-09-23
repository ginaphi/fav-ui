'use server';
import fs from 'node:fs';
import path from 'node:path';
import ora from 'ora';
import logSymbols from 'log-symbols';
import chalk from 'chalk';
import { getEmailComponent } from '../utils/get-email-component';
import type { ErrorObject } from '../utils/types/error-object';
import { improveErrorWithSourceMap } from '../utils/improve-error-with-sourcemap';
import { closeOraOnSIGNIT } from '../utils/close-ora-on-sigint';

export interface RenderedEmailMetadata {
  markup: string;
  plainText: string;
  reactMarkup: string;
}

export type EmailRenderingResult =
  | RenderedEmailMetadata
  | {
      error: ErrorObject;
    };

export const renderEmailByPath = async (
  emailPath: string,
): Promise<EmailRenderingResult> => {
  const timeBeforeEmailRendered = performance.now();

  const emailFilename = path.basename(emailPath);
  let spinner: ora.Ora | undefined;
  if (process.env.NEXT_PUBLIC_IS_BUILDING !== 'true') {
    spinner = ora({
      text: `Rendering email template ${emailFilename}\n`,
      prefixText: ' ',
    }).start();
    closeOraOnSIGNIT(spinner);
  }

  const result = await getEmailComponent(emailPath);

  if ('error' in result) {
    spinner?.stopAndPersist({
      symbol: logSymbols.error,
      text: `Failed while rendering ${emailFilename}`,
    });
    return { error: result.error };
  }

  const {
    emailComponent: Email,
    createElement,
    render,
    sourceMapToOriginalFile,
  } = result;

  const previewProps = Email.PreviewProps || {};
  const EmailComponent = Email as React.FC;
  try {
    const markup = await render(createElement(EmailComponent, previewProps), {
      pretty: true,
    });
    const plainText = await render(
      createElement(EmailComponent, previewProps),
      {
        plainText: true,
      },
    );

    const reactMarkup = await fs.promises.readFile(emailPath, 'utf-8');

    const milisecondsToRendered = performance.now() - timeBeforeEmailRendered;
    let timeForConsole = `${milisecondsToRendered.toFixed(0)}ms`;
    if (milisecondsToRendered <= 450) {
      timeForConsole = chalk.green(timeForConsole);
    } else if (milisecondsToRendered <= 1000) {
      timeForConsole = chalk.yellow(timeForConsole);
    } else {
      timeForConsole = chalk.red(timeForConsole);
    }
    spinner?.stopAndPersist({
      symbol: logSymbols.success,
      text: `Successfully rendered ${emailFilename} in ${timeForConsole}`,
    });

    return {
      markup,
      plainText,
      reactMarkup,
    };
  } catch (exception) {
    const error = exception as Error;

    spinner?.stopAndPersist({
      symbol: logSymbols.error,
      text: `Failed while rendering ${emailFilename}`,
    });

    return {
      error: improveErrorWithSourceMap(
        error,
        emailPath,
        sourceMapToOriginalFile,
      ),
    };
  }
};
