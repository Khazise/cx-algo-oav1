function HowManyCamelCase(str = '')
{
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

