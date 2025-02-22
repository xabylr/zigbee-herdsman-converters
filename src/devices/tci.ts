import {Definition} from '../lib/types';
import extend from '../lib/extend';

const definitions: Definition[] = [
    {
        zigbeeModel: ['VOLARE ZB3\u0000\u0000\u0000\u0000\u0000\u0000\u0000'],
        model: '676-00301024955Z',
        vendor: 'TCI',
        description: 'Dash L DC Volare',
        extend: extend.light_onoff_brightness(),
    },
    {
        zigbeeModel: ['MAXI JOLLY ZB3'],
        model: '151570',
        vendor: 'TCI',
        description: 'LED driver for wireless control (60 watt)',
        extend: extend.light_onoff_brightness(),
    },
    {
        zigbeeModel: ['PROFESSIONALE ZB3'],
        model: '122576',
        vendor: 'TCI',
        description: 'Direct current wireless dimmable electronic drivers with DIP-SWITCH',
        extend: extend.light_onoff_brightness(),
    },
];

export default definitions;
module.exports = definitions;
