/**
 * Created by Yaraslau_Sushchyk on 30.05.2016.
 */

document.getElementById('color').addEventListener('click',colorit);

function colorit() {

    /*d3.select("body").selectAll("p")
        .data([4, 8, 15, 16, 23, 42])
        .enter().append("p")
        .text(function(d) { return "I’m number " + d + "!"; });
    */

    // Update…
    var p = d3.select("body").selectAll("p")
        .data([4, 8, 15, 16, 23, 42])
        .text(function(d) { return d; });

// Enter…
    p.enter().append("p")
        .text(function(d) { return d; });

// Exit…
    p.exit().remove();
}
