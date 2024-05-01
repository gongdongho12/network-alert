// @ts-ignore
import network from "network"

function main() {
  console.log('Hello, running network!')

  network.get_interfaces_list(function(err: any, list: any[]) {
    console.log("list", list)
  })
}

export default main