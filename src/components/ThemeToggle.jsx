function ThemeToggle({theme, setTheme}) {
     
    
    return (
        <header className="header">

    <span className="name">calc</span>
            <div className="theme-wrapper">
                
<span className="theme-label">THEME</span>
<div className="theme-switch">
    <div className="theme-numbers">
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>

<div className="toggle" onClick={() => setTheme((theme + 1) % 3)}>
<div className={`toggle-thumb theme-${theme}`} />
</div>
          </div>
            </div>
        </header>
    )
}

export default ThemeToggle