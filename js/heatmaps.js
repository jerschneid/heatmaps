//JS code here
var data;
var options;

google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawMarkersMap);


function drawMarkersMap() 
{
	InitMapVars();

	var chart = new google.visualization.GeoChart(document.getElementById('map'));
	chart.draw(data, options);
};

function InitMapVars()
{
	data = google.visualization.arrayToDataTable([
		['Country',   'Population', 'Area Percentage'],
		['France',  65700000, 50],
		['Germany', 81890000, 27],
		['Poland',  38540000, 23]
		]);

	options = {
		sizeAxis: { minValue: 0, maxValue: 100 },
	    region: '155', // Western Europe
	    displayMode: 'markers',
	    colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
	};
}

