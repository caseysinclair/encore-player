import Moment from 'moment';

const PLAYER_TIMER_FORMAT_M_SS = 'm:ss';
const PLAYER_TIMER_FORMAT_BASE = '2000-01-01 00:00:00';

export function formatAudioTime(milliseconds) {
   return Moment(PLAYER_TIMER_FORMAT_BASE)
    .add(Moment.duration(milliseconds))
    .format(PLAYER_TIMER_FORMAT_M_SS);
}