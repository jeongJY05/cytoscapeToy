import cytoscape from 'cytoscape';
import './style.css';
import sunmNodes from './workExperience/Sunm'
import qtip from 'cytoscape-qtip';


const colorsByLevel =  {
    'level1': '#000133', //company level
    'level2': '#FC86AA', //workspace level
    'level3': '#D8DCD6', //points level
    'level4': '#D8DCD6', //points level
};

cytoscape.use(qtip);


function createCytoscape() {
    const cytoscape_obj = cytoscape({

        container: document.getElementById('cy'),  
        elements: sunmNodes,
        
        style: [ // the stylesheet for the graph
            {
            selector: 'node',
            style: {
                'background-color': (node) => colorsByLevel[node.attr('level')],
                'width': 15,
                'height': 15,
                'border-color': '#ffffff',
                'border-width': 2,
                }
            },
            {
            selector: '#n0',
            style: {
                label:'data(title)',
                }
            },
            {
            selector: 'edge',
            style: {
                'width': 1,
                'target-distance-from-node': 2,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
                'curve-style': 'haystack',
            }
            }
        ],
        
        layout: {
            name: 'cose',
            padding: 100, // padding used on fit
            nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
            animate: false, // whether to transition the node positions
        },

        //options
        boxSelectionEnabled:false, //Whether box selection (i.e. drag a box overlay around, and release it to select) is enabled
        autounselectify: true, //Whether nodes should be unselectified (immutable selection state) by default

    });

    cytoscape_obj.addListener('click','node',(evt)=>doEvent(evt));

    cytoscape_obj.nodes().each((node) => {

        switch(node.data('level')) {

            case 'level1' :
                return;
            case 'level2' : 
                return;
            case 'level3' : 
            default : ;
        }

        node.qtip({
        content: node.data('title'),
        show: {
            event: 'mouseenter mouseover'
         },
        hide: {
            event: 'mouseleave mouseout'
         },
        style: {
            classes : 'qtip',
         },
        position: {
            my: 'bottom center',
            at: 'top center',
         },        
        });
    });
}


function doEvent(evt){
    const target = evt.target;

    const targetData = target._private.data;

    console.log(targetData.level);
    if('level2' === targetData.level) {
        target.qtip({
            content: targetData.tenure,
            show: {
               event: 'click',
               ready: true,               
            },
       },);
    }

}

createCytoscape();
