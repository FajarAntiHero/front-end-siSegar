export function ButtonComponent( {textButton, textSize ,colorText , bgButton, margin, borderRadius, padding} ){
    return (
        <>
            <button type='submit' className={`w-fit h-fit font-montserrat font-bold ${textSize} ${colorText} ${bgButton} ${margin} ${borderRadius} ${padding}`} >
                {textButton}
            </button>
        </>
    )
}

export function ButtonCustomSizeableComponent( {width, height, textButton, textSize ,colorText , bgButton, margin, borderRadius, padding} ){
    return (
        <>
            <button type='submit' className={`${width} ${height} font-montserrat font-bold ${textSize} ${colorText} ${bgButton} ${margin} ${borderRadius} ${padding}`} >
                {textButton}
            </button>
        </>
    )
}