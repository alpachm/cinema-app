import React, { useEffect, useState } from 'react'
import * as Services from './../../services/series';
import { IBasicSerieInfoEntity } from '../../entities/IBasicSerieInfo-entity';

const useSeries = () => {
    const [onTheAir, setOnTheAir] = useState<IBasicSerieInfoEntity[]>([])

    const getSeries = async () => {
        const getOnTheAirSeries = await Services.getOnTheAirSeriesService();

        setOnTheAir(getOnTheAirSeries);
    }

    useEffect(() => {
        getSeries();
    }, [])

  return {onTheAir}
}

export default useSeries