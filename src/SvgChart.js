import AbstractChart from './AbstractChart.js';
import LayerOrganizer from './layerOrganizer.js';

class SvgChart extends AbstractChart {
  constructor(selector, ...options) {
    super(selector, ...options);

    this.svg = this.container.append('svg');
    this.rootG = this.svg.append('g');
    this.layers = new LayerOrganizer(this.rootG);
    this.updateDimensionNow();
  }

  _updateDimension() {
    super._updateDimension();

    const { width, height } = this._state;
    const { offset, margin } = this._state.options;
    const { top, left } = margin;

    this.svg
      .attr('width', width)
      .attr('height', height);

    this.rootG.attr(
      'transform',
      `translate(${left + offset.x},${top + offset.y})`
    );

    return this;
  }
}

export default SvgChart;
