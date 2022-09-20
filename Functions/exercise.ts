let LargestPrime=(...nums: number[]): number => {
    let ans = 0;
    nums.sort();
    nums.reverse();
    for (let i = 0; i < nums.length; i++)
    {
        let sqr = Math.sqrt(nums[i]);
        var IsPrime = true;
        for (let j = 2; j <= sqr; j++)
        {
            if (nums[i] % j == 0)
            {
                IsPrime = false;
            }
            
            if (!IsPrime) {
                break;
            }
        }
        
        if (IsPrime) {
            ans = nums[i];
            break;
        }
    }
    return ans;
    }
    console.log(`Prime Number : ${LargestPrime(27, 111, 131, 11, 8)}`);