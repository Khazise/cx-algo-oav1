function max(array = [])
{
    let max = array[0];
    for(var i = 0; array[i] != null; i++)
    {
        if(array[i] > max)
        {
            max = array[i];
        }
    }
    return max;
}

console.log(max([10,2,3,4,5]));
