function HowManyCamelCase(str = '')
{
    var cpt = 0;
    let tmp = ' ';
    //str = str.replace(/-/g,' ');
    //str = str.trim();
    //str = str.split(" ");
    let result = 0;

    for(let i =1; i< str.length;i++)
    { 
        if(str[i] == str[i].toUpperCase())
        {
            result++;
        }
    }

    return result;
}

console.log(HowManyCamelCase('tonyTonyCh0pper'));
