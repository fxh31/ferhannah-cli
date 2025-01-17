import process from 'child_process'
import chalk from 'chalk'
import ora from 'ora'

// 进度条
const spinner = ora({
  text: "ferhannah-cli 正在更新",
  spinner: {
    interval: 100,
    frames: ["⠋", "⠙", "⠹", "⠸"].map((item) => chalk.blue(item)), // 进度条的样式
  }
})

export const update = () => {
  spinner.start() // 开始动画
  process.exec("npm install ferhannah-cli -g", (error, stdout) => {
    if (error) {
      spinner.fail("更新失败") // 失败
      console.log(chalk.red(error))
    } else {
      spinner.succeed("更新成功") // 成功
      console.log(chalk.green("更新成功"))
    }
  })
}