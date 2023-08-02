const ValidateProduct = (objectPrincipal, findObject)=> {
    
    if (typeof findObject !== 'object' || findObject === null) {
        return false;
    }

    const clavesObjetoPrincipal = Object.keys(objectPrincipal);

    for (const clave of clavesObjetoPrincipal) {
        if (objectPrincipal[clave] === findObject) {
            return objectPrincipal[clave];
        }
    }

    return false;
}

export default ValidateProduct;
