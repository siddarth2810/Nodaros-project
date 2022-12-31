// anychart.onDocumentReady(function () {
//     anychart.data.loadJsonFile("https://static.anychart.com/git-storage/word-press/data/network-graph-tutorial/data_images.json", function (data) {
//     // create chart from loaded data
//     console.log(data)
//     var chart = anychart.graph(data);
//     // set title
//     chart.title("Graph showing the choices");
//     // access nodes
//     var nodes = chart.nodes();

//     // set the size of nodes
//     nodes.normal().height(30);
//     nodes.hovered().height(45);
//     nodes.selected().height(45);

//     // set the stroke of nodes
//     nodes.normal().stroke(null);
//     nodes.hovered().stroke("#333333", 3);
//     nodes.selected().stroke("#333333", 3);
//     // enable labels of nodes
//     chart.nodes().labels().enabled(true);

//     // configure labels of nodes
//     chart.nodes().labels().format("{%id}");
//     chart.nodes().labels().fontSize(12);
//     chart.nodes().labels().fontWeight(600);
//     // draw chart
//     chart.container("container").draw();
//     });
// });

// create data
anychart.onDocumentReady(function () {

    // create data
    var data = {
      nodes: [
        {id: "PATH"},
        {id: "SAGE"},
        {id: "KNIGHT"},
        {id: "BARD"},
        {id: "HEALER"},
        {id: "SCOUT"},
        
      ],
      edges: [
        {from: "PATH", to: "SAGE"},
        {from: "PATH", to: "KNIGHT"},
        {from: "PATH", to: "BARD"},
        {from: "PATH", to: "HEALER"},
        {from: "PATH", to: "SCOUT"},
      ]
    };

    // create a chart and set the data
    var chart = anychart.graph(data);

    // set the chart title
    chart.title("Network Graph: Basic Sample");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
    
});

document.getElementById("container").addEventListener("click" ,function (){
alert("will this work");
});