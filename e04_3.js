function min(array = [])
{
    let min = array[0];
    for(var i = 0; array[i] != null; i++)
    {
        if(array[i] < min)
        {
            min = array[i];
        }
    }

    return min;
}

console.log(min([10,2,3,4,5]));
