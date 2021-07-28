import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const hr = '─'.repeat(process.stdout.columns);

  // Logging separately so that the columns count isn't messed up
  // by the extra space that's added in the join method
  console.log('\n');

  const lines = [
    chalk.gray(hr),
    '\n',
    chalk.gray('Request'),
    chalk.magenta(req.method),
    chalk.blueBright.bold(req.baseUrl),
    '\n',
  ];
  if (Object.keys(req.body).length > 0) {
    lines.push(chalk.gray('Body'));
    lines.push(chalk.whiteBright(JSON.stringify(req.body, null, 2)));
    lines.push('\n');
  }
  if (Object.keys(req.query).length > 0) {
    lines.push(chalk.gray('Query'));
    lines.push(chalk.whiteBright(JSON.stringify(req.query, null, 2)));
  }
  console.log(lines.join(' '));
  next();
}
