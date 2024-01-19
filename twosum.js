var twoSum = function(nums, target) {
    const Indices=new Map()
    for(let i=0;i<num.length;i++){
        const complement=target-nums[i];
        if(Indices.has(complement)){
            return [Indices.get(complement),i];
        }
        return Indices.set(nums[i],i);
    }
    return[];
};