/**
 * Created by Yaraslau_Sushchyk on 30.05.2016.
 */

document.getElementById('color').addEventListener('click',colorit);

function colorit() {
    let divSelection = d3.select('#pcont');
    let allPs = divSelection.selectAll("p");
    allPs
        .data([4, 8, 15, 16, 23, 42])
        .enter().append("p")
        .text(function(d) { return "I’m number " + d + "!"; });


    d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 100).attr("r", 25).style("fill", "purple");
}
