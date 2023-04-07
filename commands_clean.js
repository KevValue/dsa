class orderManager {
    constructor(){
        this.orders = []
    }

    execute(command, ...args){
        return command.execute(this.orders, ...args)
    }
}

class Queue {
    observers = []
    constructor(...subscribers){
        this.observers.push(...subscribers)
    }

    execute(msg, ...args){
        const observer = this.observers.pop()
        return msg.execute(observer.orders, ...args)
    }

}

class Poller {
    queue = []
    observers = []
    constructor(){

    }
}

class Command {
    constructor(execute){
        this.execute = execute
    }
}

function placeOrder (order, id){
    return new Command((orders) => {
        orders.push(order, id)
        return `Thank you for placing ${order} ${1}`
    })
}

const manager = new orderManager()
const queue = new Queue(manager)
console.log(queue.execute(new placeOrder("orange chicken with soda", 1)))
console.log(manager.orders)