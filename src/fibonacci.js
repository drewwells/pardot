var seed = [ 0, 1 ];

function fibLoop( n ){

    var memoize = seed.slice();
    function f( n ) {
        for (var i = 0; i < n - 2; i++) {
            memoize.push(memoize[i] + memoize[i + 1]);
        }
        //Just in case someone asks for 1 digit
        memoize.splice(n);
        return memoize;
    }
    return f( n );
}



function fibRecursive( n ) {

    var memoize = seed.slice();
    function f( n, substep/*necessary to splice fib(1)*/ ){
        if (!memoize[n - 2] && n > 1) {
            f(n - 1, true);
        }
        
        memoize.push(memoize[n - 3] + memoize[n - 2]);
        //catch fib(1)
        if (!substep) {
            memoize.splice(n);
        }
        return memoize;
    }
    return f( n );
}

