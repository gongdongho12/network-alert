import consoleLogo from 'resource/console_logo.txt';
import { argv } from 'process';
import cron, { schedule } from 'node-cron';
// @ts-ignore
import naverCrawlingWithPuppeteer from 'src/runner/naverCrawlingWithPuppeteer';
import { cronTable } from 'meta/cronMeta';

console.log(consoleLogo);

const parameters = argv.slice(2)
console.log("run codes:", parameters)

// @ts-ignore
const runnerToPromise = (runScript: string): Promose<any> => import(`src/runner/${runScript}`).then(({ default: runner }) => runner())

if (parameters.length > 0) {
  parameters.reduce((promise: Promise<any>, runScript: string) => {
    return promise.then(runnerToPromise(runScript))
  }, Promise.resolve<any>(undefined))
} else {
  const schedule_list = cronTable.map(({ schedule, runner }) => {
    console.log('schedule:', schedule, 'runner:', runner)
    return cron.schedule(schedule, async () => await runnerToPromise(runner), {
      scheduled: false
    })
  })
  schedule_list.forEach(schedule => schedule.start())
}
