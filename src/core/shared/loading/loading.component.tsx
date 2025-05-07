import { useIsFetching } from '@tanstack/react-query';
import {useLoaderStyles} from './loading.styles';

const LoaderComponent = () => {
    const {loader, inner,} = useLoaderStyles();
    // const isFetching = useIsFetching();

    // if (isFetching === 0) return null;
    return (
        <div className={loader}>
            <span className={inner}></span>
        </div>
    );
};

export default LoaderComponent;
