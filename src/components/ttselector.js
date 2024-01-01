import styled from "styled-components"

export default function TooltipSelector({onChange}){
    
    const Select=styled.select
        `padding:10px;
        margin:100px 0;
        border-radius:5px;
        width:200px;
        font-size:1.25rem;
        `;


    return (
        <Select name="Tooltipselector" onChange={(e)=>onChange(e.target.value)}>
            <option value="left">Left</option>
            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
        </Select>
    )
}