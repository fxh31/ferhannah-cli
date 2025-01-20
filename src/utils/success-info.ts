import chalk from "chalk"
import log from "./log"
// const figlet = require("figlet")

const goodPrinter = async (message: string) => {
  // const data = await figlet(message)
  // console.log(chalk.rgb(40, 156, 193).visible(data))
  console.log(chalk.rgb(40, 156, 193).visible(message))
}

export const successInfo = async (projectName: string) => {
  console.log()
  console.log(chalk.blackBright("======================================="))
  console.log(chalk.blackBright("=========  ferhannah-cli ========="))
  console.log(chalk.blackBright("======================================="))
  console.log()

  log.success(`项目创建成功 ${chalk.blueBright(projectName)}`)
  console.log()
  log.success("执行以下命令启动项目")
  log.info(`cd ${chalk.blueBright(projectName)}`)
  log.info(`${chalk.yellow("pnpm")} install`)
  log.info(`${chalk.yellow("pnpm")} run dev`)

  goodPrinter("ferhannah-cli")
}