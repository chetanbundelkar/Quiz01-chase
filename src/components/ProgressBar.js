import React from 'react'
import "../pro.css"

const ProgressBar = ({done ,color}) => {
    const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 7,
			width: `${done}%`,
      // background:{color == "red" && "red"}
		}
		
		setStyle(newStyle);
	}, 200);
  return (
    // <div className="progress">
    <div className="progress-done" style={style}>
        {done}%
    </div>
// </div>
  )
}

export default ProgressBar