
import { watchBrands ,  genderOptions , bestSellingWatches , dailyDeals ,firstPurchaseOffer , latestArrivals , offeredWatches , products} from "./WatchData";

const getAllWatches = () => {
    const source  = [watchBrands , genderOptions , bestSellingWatches , dailyDeals ,firstPurchaseOffer , latestArrivals , offeredWatches , products ];
    return source.flatMap((source) => 
    source.flatMap((data) => data.watches));
}

const getWatch = (brandName) =>{
    const allWatches = getAllWatches();
    return allWatches.filter((watch) => watch.color.toLowerCase() === brandName );
   
}

export default getWatch;

