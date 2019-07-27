import * as d3 from 'd3';

class CanvasHeatMap {
    constructor(opts) {
        this.data = opts.data;
        this.element = opts.element;

        this.element.innerHTML = '';
        this.width = 200
        this.height = 50
        this.colorScale = d3.scaleSequential().domain([0, 1])
            .interpolator(d3.interpolateViridis);
        const visRoot = d3
            .select(this.element)
            .style('position', 'relative');

// main canvas to draw on
        this.canvas = visRoot
            .append('canvas')
            .attr('width', this.width)
            .attr('height', this.height)
            .style('width', `${this.width}px`)
            .style('height', `${this.height}px`);


        this.drawHeatMap();
    }

    setColor() {
        // more stuff
    }

    setData() {
        // even more stuff
    }

    drawHeatMap() {
        const ctx = this.canvas.node().getContext('2d');
        ctx.save();
        d3.range(0, this.width).map((idx) => {
            ctx.beginPath();
            ctx.moveTo(idx, 0);
            ctx.lineTo(idx, this.height);
            ctx.strokeStyle = this.colorScale(this.data[idx])
            ctx.stroke();
        })


        ctx.restore();
    }


}

export default CanvasHeatMap;
