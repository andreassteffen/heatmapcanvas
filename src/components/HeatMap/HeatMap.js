import React,{Component} from 'react';
import CanvasHeatMap from './CanvasHeatMap';

class HeatMap extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.chart= new CanvasHeatMap({
            element: this.refs.plot,
            data: this.props.data,
        })
    }

    render() {
        return (
            <div ref={"plot"}>
            </div>
        );
    }
}



export default HeatMap;
