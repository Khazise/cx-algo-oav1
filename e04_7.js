function diff(array = [])
{
    let max = array[0];
    let min = array[0];
    for(var i = 0; array[i] != null; i++)
    {
        if(array[i] > max)
        {
            max = array[i];
        }

        if(array[i] < min)
        {
            min = array[i];
        }
    }
    return max-min;
}

console.log(diff([10,2,3,4,5]));
