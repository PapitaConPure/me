/**
 * If the path starts with "/", it gets prefixed with the actual root
 * @param pathOrUrl 
 * @returns 
 */
function getRoot(pathOrUrl: string = ''): string {
    //if(!pathOrUrl.startsWith('/'))
        return pathOrUrl;
    
    //const root = process.env.NODE_ENV === 'production' ? '/me' : '';
    //return root + pathOrUrl;
}

export default getRoot;
