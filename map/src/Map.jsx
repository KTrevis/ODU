import { useState, useEffect, useCallback } from 'react';
import { Map, Layer, Source } from 'react-map-gl/maplibre';
import ControlPanel from './ControlPanel/ControlPanel';

const dataLayer = {
		id: 'data',
		type: 'fill',
		paint: {
		  'fill-color': {
			property: 'results',
			stops: [
			  [0, '#9400D3'],
			  [1, '#000080'],
			]
		  },
		  'fill-opacity': 0.5
		}
}

export default function MyMap() {
	const [allData, setAllData] = useState(null);
	const [hoverInfo, setHoverInfo] = useState(null);

	console.log(allData)
	const onHover = useCallback(event => {
		const {
			features,
			point: {x, y}
		} = event;
		const hoveredFeature = features && features[0];
		setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
	}, []);

	useEffect(() => {
		fetch("contours.json")
		  .then(resp => resp.json())
		  .then(json => {
			setAllData(json)
		})
	}, []);

  	return (
		<>
    		<Map
    			initialViewState={{
    			  longitude: 2.3522219,
    			  latitude: 48.856614,
    			  zoom: 5
    			}}
    			style={{width: '100vw', height: '100vh'}}
    			mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=2E7KhMdCwoMbe2gGsgKP"
				interactiveLayerIds={['data']}
				onMouseMove={onHover}
				>
				<Source type="geojson" data={allData}>
					<Layer {...dataLayer} />
				</Source>
				{hoverInfo ? 
				<ControlPanel 
					bureau={hoverInfo.feature.properties.id_bv}/>
				: <ControlPanel/>}
			</Map>
		</>
  );
}