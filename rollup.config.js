import { defineConfig } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve"; // rollup 支持 node.js 模块
import commonjs from "@rollup/plugin-commonjs"; // rollup 支持 common.js 模块
import externals from "rollup-plugin-node-externals"; // rollup 自动识别外部依赖
import json from "@rollup/plugin-json"; // rollup 支持 json 文件大书包
import terser from "@rollup/plugin-terser"; // rollup 压缩代码
import typescript from "rollup-plugin-typescript2"; // rollup 支持 typescript 文件打包

export default defineConfig({
  input: {
    index: "src/index.ts", // 打包入口文件
  },
  output: [
    {
      dir: "dist", // 输出目标文件夹
      format: "esm", // 输出 commonjs 文件
    },
  ],
  plugins: [
    nodeResolve(),
    externals({
      devDeps: false, // 可以识别我们 package.json 中的依赖当作外部依赖处理 不会直接将其中引用的方法打包出来
    }),
    typescript({
      tsconfig: "./tsconfig.json", // 确保 tsconfig.json 设置正确
    }),
    json(),
    commonjs(),
    terser(),
  ],
});
