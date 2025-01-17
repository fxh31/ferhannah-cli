import { Command } from 'commander'
import { version } from '../package.json'
import { create } from "./command/create"
import { update } from "./command/update"

const program = new Command('ferhannah')
program.version(version, "-v --version", "版本号")

// create 指令
program
  .command("create")
  .description("初始化新项目")
  .argument("[name]", "项目名称") // []：可选参数
  .action((dirName) => {
    create(dirName)
  })

// update 指令
program
  .command("update")
  .description("更新 ferhannah-cli")
  .action(async () => {
    await update()
  })

program.parse()