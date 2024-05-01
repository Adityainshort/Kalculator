import React, { useState } from 'react';

const Page = () => {
    const nums = [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
        { id: 6, value: 6 },
        { id: 7, value: 7 },
        { id: 8, value: 8 },
        { id: 9, value: 9 },
        { id: 0, value: 0 }
    ];
    
    const operations = [
        { id: 11, value: "+" },
        { id: 12, value: "-" },
        { id: 13, value: "*" },
        { id: 14, value: "/" }
    ];
    const[firstN,SetFirstN]=useState(0);
    const [numberValue, setNumberValue] = useState("");
    const [operator, setOperator] = useState("");

    const handleOperation = (op) => {
        SetFirstN(numberValue);
        setNumberValue("");
        setOperator(op);
    };

    const handleCalculate = () => {
        const ans = eval(`${firstN} ${operator} ${numberValue}`);
        setNumberValue(ans);
    };

    return (
        <div className='bg-slate-300 min-h-screen w-full mx-auto p-4 flex flex-col sm:flex-row sm:justify-center items-center sm:items-start'> 
            <div className='w-full sm:w-1/2'>
                <input className='w-full rounded' type="number" name="numberholder" value={numberValue} placeholder='' readOnly />
            </div>
            <div className='w-full sm:w-1/2 flex flex-wrap p-4 -pl-4 justify-center sm:justify-between'>
                {nums.map((ele) => (
                    <button key={ele.id} className='w-1/12 max-w-[16%] min-w-[15%] h-12 bg-slate-400 m-2 sm:w-auto sm:mx-2'
                        onClick={() => setNumberValue(numberValue * 10 + ele.value)}
                    >
                        {ele.value}
                    </button>
                ))}
            </div>
            <div className='flex flex-col w-full sm:w-1/4 justify-center sm:justify-end'>
                <button className='w-full h-12 bg-slate-400 m-2 sm:w-auto' onClick={handleCalculate}>=</button>
                {operations.map((ele) => (
                    <button key={ele.id} className='w-full h-12 bg-slate-400 m-2 text-xl sm:w-auto'
                        onClick={() => handleOperation(ele.value)}
                    >
                        {ele.value}
                    </button>
                ))}
                <button onClick={() => setNumberValue(0)}> Clear</button>
            </div>
        </div>
    );
};

export default Page;


