import axios from "axios";
import chalk from "chalk";

axios.get("https://httpbin.org/ip")
  .then((response) => {
    console.log(chalk.cyan(`Your IP is ${response.data.origin}`));
  });
