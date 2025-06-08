
import { watchBrands ,  genderOptions , bestSellingWatches ,  latestArrivals ,  products} from "./WatchData";

const getAllWatches = () => {
    const source  = [watchBrands , genderOptions , bestSellingWatches , latestArrivals , products ];
    return source.flatMap((source) => 
    source.flatMap((data) => data.watches));
}

const getWatch = (brandName) =>{
    const allWatches = getAllWatches();
    return allWatches.filter((watch) => watch.color.toLowerCase() === brandName );
   
}

export default getWatch;

