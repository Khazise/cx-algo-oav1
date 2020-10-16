function marcos(str = '')
{
    let sos = 'SOS';
    let result = 0;
    let y = 0;
    for(let i =0; i< str.length;i++)
    { 
        if(y>2){y=0;}
        if(str[i] != sos[y] )
        {
            result++;
        }
        y++
    }

    return result;
}

console.log(marcos('SOFSOSSISSOWSOS'));
