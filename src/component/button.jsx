export function ButtonComponent( {textButton, textSize ,colorText , bgButton, margin, borderRadius, padding} ){
    return (
        <>
            <button type='submit' className={`cursor-pointer w-fit h-fit font-montserrat font-bold ${textSize} ${colorText} ${bgButton} ${margin} ${borderRadius} ${padding}`} >
                {textButton}
            </button>
        </>
    )
}

export function ButtonCustomSizeableComponent( {width, height, textButton, textSize ,colorText , bgButton, margin, borderRadius, padding} ){
    return (
        <>
            <button type='submit' className={`${width} ${height} cursor-pointer font-montserrat font-bold ${textSize} ${colorText} ${bgButton} ${margin} ${borderRadius} ${padding}`} >
                {textButton}
            </button>
        </>
    )
}