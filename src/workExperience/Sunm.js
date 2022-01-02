import workExperience from './workExperience'


const sunmNodes = returnNodes();

function returnNodes() {

    let sunMData = [{ data :{
        id : 'n0',
        title : workExperience[0].company,
        label : workExperience[0].detail.numberofYear,
        level : 'level1',
    }}]

    let nodeNum = 1;
    let edgeNum = 0;        

    workExperience[0].detail.works.forEach((current) => {

        //title
        sunMData.push
        ({
            data : {
                id : ( 'n'+ nodeNum ) ,
                title : current.title,
                label : current.tenure,
                level : 'level2',                
            }
        });

        sunMData.push
        ({
            data : {
                id : ( 'e' + edgeNum ),
                source: 'n0', target: ( 'n'+ nodeNum ),
            }
        });

        let nodeNum2 = 0;
        let edgeNum2 = 0;

        current.point.forEach((point) => {
            //point
            sunMData.push
            ({
                data : {
                    id : ('n'+ nodeNum + nodeNum2),
                    title : point,
                    level : 'level3',
                }
            });
            sunMData.push
            ({
                data : {
                    id : ( 'e' + edgeNum + edgeNum2),
                    source: ('n'+ nodeNum) , target: ('n'+ nodeNum + nodeNum2)
                }
            });
            nodeNum2++;
            edgeNum2++;
        });

        current.skill.forEach((skil) => {
            //skill
            sunMData.push
            ({
                data : {
                    id : ('n'+ nodeNum + nodeNum2),
                    title : skil,
                    level : 'level4',
                }
            });
            sunMData.push
            ({
                data : {
                    id : ( 'e' + edgeNum + edgeNum2),
                    source: ('n'+ nodeNum) , target: ('n'+ nodeNum + nodeNum2)
                }
            });
            nodeNum2++;
            edgeNum2++;
        });


        nodeNum++;
        edgeNum++;

    });

    return sunMData;
}

export default sunmNodes;
