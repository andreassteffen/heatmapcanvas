import * as d3 from 'd3';
import {v4} from 'uuid';

export default d3.range(0,100).map((idx)=>{
    return {
           id: idx,
        uuid: v4(),
        smiles: 'c1cccc1',
        heatmap: d3.range(0,200).map((id)=>Math.random())
    }});


