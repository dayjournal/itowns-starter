import './style.css'
import * as itowns from 'itowns';

const map = document.getElementById('map') as HTMLDivElement;
const placement = {
    coord: new itowns.Coordinates('EPSG:4326', 150.0, 30.0),
    heading: -50,
    range: 10000000,
    tilt: 50,
};
const view = new itowns.GlobeView(map, placement);

const m_mono = new itowns.TMSSource({
    crs: 'EPSG:3857',
    url: 'https://tile.mierune.co.jp/mierune_mono/${z}/${x}/${y}.png',
    attribution: {
        name: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
    },
    isInverted: true,
});
const monoLayer = new itowns.ColorLayer('m_mono', {
    source: m_mono,
});
view.addLayer(monoLayer);
