var map = L.map('map').setView(MISSIONS[0].geo, 18);

L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map)
var LeafIcon = L.Icon.extend({
	options: {
		// shadowUrl: 'leaf-shadow.png',
		iconSize:     [60, 60],
		shadowSize:   [50, 64],
		iconAnchor:   [22, 94],
		shadowAnchor: [4, 62],
		popupAnchor:  [-3, -76]
	}
})

let c = 0
for (let mission of MISSIONS) {
	c++
	L.marker([mission.geo[0],mission.geo[1]], 
		{icon: new LeafIcon({iconUrl: `https://lh3.googleusercontent.com/${mission.img}`})})
		.bindPopup(`
			<h2>#${c} ${mission.missionName}</h2>
			<h3>Passphrase: <b>${mission.Passphrase}</b></h3>
			<a href="https://intel.ingress.com/mission/${mission.intel}" target="_blank">
				Checkout Full Mission (Intel)
			</a>`
		)
	.bindTooltip(`#${c} ${mission.missionName}`).openTooltip()
	.addTo(map)
}