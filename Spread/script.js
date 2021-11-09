document.addEventListener("DOMContentLoaded", function() {

    var startTime = performance.now();


    var cy = (window.cy = cytoscape({
        container: document.getElementById("cy"),

        // demo your layout
        layout: {

            name: "spread",
            randomize: true,
            //animate: false,
            // name: 'preset'

            //name: 'spread',
            // minDist: 40

            // some more options here...
        },

        style: [{
                selector: "node",
                style: {
                    "background-color": "grey",
                    ["label"]: function(ele) {
                        return ele._private.data["id"];
                    },
                    "font-size": "12px",
                    width: 15,
                    height: 15
                },
            },

            {
                selector: "edge",
                style: {
                    "line-color": "red",
                    opacity: 0.3,
                    'width': 1

                },
            },
        ],
        elements: fetch("random_nodes.json")
            .then(function(res) {
                return res.json();
            })
            .then((data) => {
                return data["elements"];
            }),

        ready: function() {
            console.log("Rendered CY")
            var endTime = performance.now();
            console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);

        }


    }));



});