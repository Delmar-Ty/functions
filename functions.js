function circleArea(radius) {
    var pi = 3.14;
    console.log(radius);
    var area = radius ** 2 * pi;
    document.getElementById('area').innerHTML = area;
}

function compare(x, y) {
    if (x > y) {
        document.getElementById('compared').innerHTML = x + " Is Greater";
    } else {
        document.getElementById('compared').innerHTML = y + " Is Greater";
    }
}

function EvenOdd(a) {
    if (a % 2 === 0) {
        document.getElementById('result').innerHTML = "Your number is even";
    } else {
        document.getElementById('result').innerHTML = "Your number is odd";
    }
}

function palindrome(q) {
    var array1 = q.split("");
    var final = array1.reverse();
    var final = array1.join("");
    if (final === q) {
        document.getElementById('hello').innerHTML = "Is a plaindrome";
    } else {
        document.getElementById('hello').innerHTML = "Not palindrome";
    }
}