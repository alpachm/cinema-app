import React, { useContext, useEffect, useState } from 'react'
import * as Services from './../../services/series';
import { IBasicSerieInfoEntity } from '../../entities/IBasicSerieInfo-entity';
import { LoadingPageContext } from '../../context/loadingPageContext';

const useSeries = () => {
    const {setIsLoading} = useContext(LoadingPageContext);
    const [onTheAir, setOnTheAir] = useState<IBasicSerieInfoEntity[]>([])

    const getSeries = async () => {
        setIsLoading(true);
        const getOnTheAirSeries = await Services.getOnTheAirSeriesService();

        setOnTheAir(getOnTheAirSeries);
        setIsLoading(false);
    }

    useEffect(() => {
        getSeries();
    }, [])

  return {onTheAir}
}

export default useSeries