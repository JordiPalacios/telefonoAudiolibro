import React from 'react'

export const Guide = ({txtSide, srcImg, nameImg, txtL1, txtL2, txtL3, txtTittle}) => {
    const isLeftSide = txtSide === 'left'
    return (
        <div style={{display: 'flex', flexDirection: isLeftSide ? 'row' : 'row-reverse', alignItems:'center'}}>
            <img src={srcImg} alt={nameImg}/>
            <div style={{flexDirection:'column'}}>                
                <h3>{txtTittle}</h3>
                <p>{txtL1}</p>
                <p>{txtL2}</p>
                <p>{txtL3}</p>
            </div>
        </div>
    )
}
