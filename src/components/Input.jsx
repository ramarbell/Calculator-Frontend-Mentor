function Input({display, formatNumber}) {
    return (
        <div className="display">
           {formatNumber(display)} 
            
        </div>
    )
}

export default Input