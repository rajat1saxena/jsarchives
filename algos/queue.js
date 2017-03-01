// An implementation of a queue
queue = function (size) {
    let head = 0;
    let tail = 0;
    let count = 0;
    let arr = [];
    
    return {
      enqueue(item) {
        // check overflow
        if (count===size) {
            throw 'Queue overflow';
        }
        arr[tail] = item;
        count++;
        if (tail===size-1) {
            tail = 0;
        } else {
            tail = tail + 1;
        }
      },
      dequeue() {
            // check underflow
            if (count===0) {
                throw 'Queue underflow';
            }
            let result = arr[head];
            count--;
            if (head===size-1) {
                head = 0;
            } else {
                head = head + 1;
            }
            return result;
      },
      isEmpty() {
          return count === 0;
      }
    };
};

// Driver program
//var testqueue = queue(10);
//testqueue.enqueue(3);
//testqueue.enqueue(56);
//testqueue.enqueue(78);
//testqueue.enqueue(6);
//console.log(testqueue.dequeue());
//console.log(testqueue.dequeue());
//console.log(testqueue.isEmpty());
//console.log(testqueue.dequeue());
//console.log(testqueue.dequeue());
//console.log(testqueue.isEmpty());

exports.queue = queue;