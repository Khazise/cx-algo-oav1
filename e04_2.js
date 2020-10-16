function average(array = [])
{
    let somme = 0;
    for(var i = 0; array[i] != null; i++)
    {
        somme += array[i] ;
    }

    return somme/i;
}

console.log(average([1,2,3,4,5]));
