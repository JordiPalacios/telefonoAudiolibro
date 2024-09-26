import React from 'react'

export const Guide = ({ stepsInfo }) => {
    return (
        <div>
            {stepsInfo.map((step, index) => {
                return (
                    <div key={step.id} style={{ display: 'flex', flexDirection: step.txtLeft ? 'row' : 'row-reverse', alignItems: 'center', marginBottom: '20px' }} >
                        <img src={step.imgSrc} alt={step.imgName} />
                        <div>
                            <h2>{step.tittle}</h2>
                            <p style={{}}>{step.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
