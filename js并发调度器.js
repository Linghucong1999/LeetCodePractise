class Scheduler {
    constructor(count) {
        this.count = count;
        this.number = 0;
        this.queue = [];
    }

    addTask(timeout, str) {
        this.queue.push([timeout, str]);
    }

    start() {
        if (this.number < this.count && this.queue.length) {
            let [timeout, str] = this.queue.shift();
            this.number++;
            setTimeout(() => {
                console.log(str);
                this.number--;
                this.start();
            }, timeout * 1000);
            this.start();
        }
    }

}

const scheduler = new Scheduler(2)
scheduler.addTask(1, '1');   // 1s后输出’1'
scheduler.addTask(2, '2');  // 2s后输出’2'
scheduler.addTask(1, '3');  // 2s后输出’3'
scheduler.addTask(1, '4');  // 3s后输出’4'
scheduler.start();

