
const getFilter = (filter) => {
    const arrayFilter = [];
    
    if (filter.category !== "" && filter.category !=="none") {
        arrayFilter.push("categoryId=" + filter.category);

    }

    if (filter.price_min > 0) {
        arrayFilter.push("price_min=" + filter.price_min);

    }
    if (filter.price_max > 0) {
        arrayFilter.push("price_max=" + filter.price_max);

    }
    if (filter.title != "") {
        arrayFilter.push("title=" + filter.title);

    }


    let url = "https://api.escuelajs.co/api/v1/products/";


    arrayFilter.map((element, index) => {

        if (index == 0) {
            url = "https://api.escuelajs.co/api/v1/products/";
            url += "?" + element
        } else {
            url += "&" + element

        }

    })
    
    
    return { url};

}

export default getFilter;
