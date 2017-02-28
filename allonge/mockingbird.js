// About Kestrels, Identity and Vireo, popularly known as S K I.
const K = (x) => (y) => x;
const I = (x) => (x);
const V = (x) => (y) => (z) => z(x)(y);


// list first and last elements
const first = K,
      second = K(I),
      // pair acts something like JS's '.apply'
      pair = (f) => (s) => (selector) => selector(f)(s);
      
console.log(first('rajat')('saxena'));
console.log(second('rajat')('saxena'));

const latin = pair('rajat')('saxena');
console.log(latin(first));
console.log(latin(second));

// forming linked list with S K I
const EMPTY = {};
const ll123 = pair(1)(pair(2)(pair(3)(pair(4)(EMPTY))));
console.log(ll123);  // The following expression will get 
    // printed in Chrome debugger: (selector) => selector(f)(s)
console.log(ll123(first));
console.log(ll123(second)(first));

const length = (aPair, buffer = 0) => 
                    aPair === EMPTY ? buffer : length(aPair(second), 1 + buffer);
const reverse = (aPair, buffer = EMPTY) => 
                    aPair === EMPTY ? buffer : reverse(aPair(second), pair(aPair(first))(buffer));
const map = (fn, aPair, buffer = EMPTY) =>
                aPair === EMPTY ? reverse(buffer) : map(fn, aPair(second), pair(fn(aPair(first)))(buffer));
console.log('Length of S K I linked list: ' + length(ll123));
const reversedll = reverse(ll123);
const mappedll = map((n) => n*n, ll123);
console.log('Elements after reversing the list: ');
console.log(reversedll(first));
console.log(reversedll(second)(first));
console.log('Elements after mapping the list to a square function: ');
console.log(mappedll(first));
console.log(mappedll(second)(first));