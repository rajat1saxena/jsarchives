// An implementation of a queue
// Note that this implementation uses 'size', hence the result queue is finite.
// Scroll down for secondary implementation.
'use strict';

const queue = function (size) {
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

// Another way to design queue, without maintaining a count variable
const queue_sec = (size) => {
    let arr = [];
    let head = 0;
    let tail = 0;
    
    return {
        enqueue: (x) => {
			// check for overflow
			if (head === tail && arr[head])
				return new Error("Queue full");
			arr[tail] = x; 
			// increment tail
			tail = (tail === size - 1 ? 0 : tail + 1);
			console.log(tail);
        },
        dequeue: () => {
			// check for underflow
			if (head === tail && !arr[head]) 
                return new Error("Queue underflow");
            let result = arr[head];
            delete arr[head];
			head = (head === size - 1 ? 0 : head + 1);
			return result;
        }
    };
};

exports.queue = queue;