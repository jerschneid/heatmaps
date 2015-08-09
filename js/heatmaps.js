//JS code here
var data;
var options;
var hot;

google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawMarkersMap);


$(Init);

function Init()
{
	$("#region").change(RegionChanged);
	$("#displayMode").change(DisplayModeChanged);
	$(".add-rows").click(AddRows);

	InitTable();
}

function InitTable()
{
	console.log("Init table");
  var container = document.getElementById('basic_example');
 
  
 	hot = new Handsontable(container, {
    data: data,
    height: 396,
    colHeaders: ["Location", "Value", "Other"],
    rowHeaders: ["Title"],
    stretchH: 'all',
    columnSorting: true,
    contextMenu: true,
    afterChange: TableChanged
 	 });

 	console.log("Finished init table");
}

function AddRows(event)
{
	event.preventDefault();
	var numRows = $(this).data("num-rows");
	console.log("Adding rows" + numRows);
	hot.alter('insert_row', null, numRows);
}

function TableChanged(change, source)
{
	if(!hot || source == "loadData")
		return;

	console.log(source);

	data = hot.getData();
	DrawMap();
}

function RegionChanged()
{
	options.region = $('#region').val();
	DrawMap();
}

function DisplayModeChanged()
{
	options.displayMode = $('#displayMode').val();
	DrawMap();
}

function DrawMap()
{	
	var dataTable = google.visualization.arrayToDataTable(data);
	var chart = new google.visualization.GeoChart(document.getElementById('map'));
	chart.draw(dataTable, options);
}

function drawMarkersMap() 
{
	InitMapVars();
	InitTable();
	DrawMap();
};

function InitMapVars()
{
	data = [
		['Country',   'Population', 'Area Percentage'],
		['France',  65700000, 50],
		['Germany', 81890000, 27],
		['England', 71890000, 27],
		['Italy', 61890000, 27],
		['Belgium', 51890000, 27],
		['Portugal', 41890000, 27],
		['Poland',  38540000, 23]
		];

	data = [
		['Country',   'Population'],
		['France',  65700000],
		['Germany', 81890000],
		['England', 71890000],
		['Italy', 61890000],
		['Belgium', 51890000],
		['Portugal', 41890000],
		['Poland',  38540000]
		];		

	options = {
		//sizeAxis: { minValue: 0, maxValue: 100 },
	    region: '155', // Western Europe
	    displayMode: 'regions',
	    colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
	};
}

