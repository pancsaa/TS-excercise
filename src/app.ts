import fs = require("fs")

const createNumber=(value: number)=>{
    return Math.floor(Math.random()*value)+1
}

const setNumberList=(value:number,v:number,createNumber: (v:number)=>number): number[]=>{
    const t:number[]=[]
    for(let i =0; i<value;i++){
        t.push(createNumber(v))
    }
    return t;
}

const numbers= setNumberList(100,5,createNumber);
console.log(numbers);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const setNumberList2=(count:number, v:number, createNumber: (v:number)=>number):number[]=>{
    return Array.from({length: count}, item=> createNumber(v))
}

const numbers2= setNumberList2(100,5,createNumber);
console.log(numbers2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Stat =Record<number, number>
const statistic: Stat={};

//statistic["1000"]=59
for(let v of numbers){
    if(v in statistic){
        statistic[v]!+=1
    }
    else{
        statistic[v]=1;
    }
}
console.log(statistic);