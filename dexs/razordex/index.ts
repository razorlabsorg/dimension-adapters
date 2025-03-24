import { Adapter } from '../../adapters/types';
import { httpGet } from '../../utils/fetchURL';
import { CHAIN } from '../../helpers/chains';


async function fetch() {
    const {data} = await httpGet('https://api.razordex.com/v1/defillama')
    return {
        dailyFees: data.feesMove,
        tvl: data.tvlMove,
        dailyVolume: data.totalVolumeMove,
    }
}


const adapter: Adapter = {
    adapter: {
        [CHAIN.MOVE]: {
            fetch,
            runAtCurrTime: true,
        }
    },
    version: 2
}

export default adapter;
