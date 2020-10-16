function count(array = [])
{
    for(var i = 0; array[i] != null; i++){}

    return i;
}

console.log(count(["a","b","c"]));
