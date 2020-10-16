function shift(array = [])
{
    let newArray = [];
    for(var i = 1; array[i] != null; i++)
    {
        newArray[i-1] = array[i];
    }

    return newArray;
}

console.log(shift([10,2,3,4,5]));
