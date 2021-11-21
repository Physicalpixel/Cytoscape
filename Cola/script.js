document.addEventListener("DOMContentLoaded", function() {

    var startTime = performance.now();

    var cy = (window.cy = cytoscape({
        container: document.getElementById("cy"),

        // demo your layout
        layout: {
            name: "cola",
            randomize: true,

            // name: 'preset'

            //name: 'spread',
            // minDist: 40

            // some more options here...
        },

        style: [{
                selector: "node",

                style: {
                    /*display: function(ele) {
                        if (ele._private.data["hierarchy_level"] > 3) {
                            return "none";
                        }
                    },*/
                    'border-color': 'white',
                    'border-width': 4,
                    "background-color": function(ele) {
                        if (ele._private.data["gender"] == "Female") {

                            return "#ff7ef3";
                        } else {
                            console.log(ele._private.data["gender"])
                            return "#00c2ff";
                        }
                    },
                    ["label"]: function(ele) {
                        return ele._private.data["id"];
                    },
                    "text-valign": "center",
                    "text-halign": "center",
                    "font-size": "12px",
                    width: function(ele) {
                        return 40
                    },
                    height: function(ele) {
                        return 40
                    },
                },
            },

            {
                selector: "edge",
                style: {

                    "target-arrow-shape": "triangle",
                    "target-arrow-color": "green",
                    "target-arrow-opacity": 1,
                    //"arrow-scale": 0.5,
                    "curve-style": function() {
                        return "bezier";
                    },
                    "line-color": "grey",
                    width: 0.9,
                    opacity: 0.5,
                },
            },
        ],

        // elements: fetch('./data/planar-chain.json').then(function( res ){ return res.json(); })
        elements: fetch("./Cytoscape/silo3.json")
            .then(function(res) {
                return res.json();
            })
            .then((data) => {
                return data["graph"]["elements"];
            }),

        ready: function() {
            console.log("Rendered CY")
            var endTime = performance.now();
            console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);

        }


    }));

});
