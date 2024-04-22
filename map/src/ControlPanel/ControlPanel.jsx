import "./ControlPanel.css"

export default function ControlPanel(props) {
	return (
	  <div className="control-panel">
		<h3>Visualisation</h3>
		<p>
		  Elections<b>{props.bureau}</b>.
		</p>
		<p>
		  Data source: <a href="https://www.data.gouv.fr/fr/"></a>
		</p>
		<div className="source-link">
		  <a
			href="https://github.com/visgl/react-map-gl/tree/7.1-release/examples/geojson"
			target="_new"
		  >
		  </a>
		</div>
		<hr />
		<div>
			<div>Macron: </div>
			<div>Lepen: </div>
			<div>Abstention: </div>
		</div>
		{/* <hr />
		<div key={'year'} className="input">
		  <label>Year</label>
		  <input
			type="range"
			value={props.bureau}
			min={1995}
			max={2015}
			step={1}
			onChange={evt => props.onChange(evt.target.value)}
		  />
		</div> */}
	  </div>
	);
  }