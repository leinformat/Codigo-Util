const hubdbV3 = async () =>{
    try {
        //const endpoint = `https://api.hubapi.com/hubdb/api/v2/tables/${tableId}/rows?portalId=${portalId}&limit=${limit}&offset=${offset}${filterQueries}`;
        let endpoint = `https://api.hubapi.com/cms/v3/hubdb/tables/${tableId}/rows?portalId=${portalId}&limit=${limit}&offset=${offset}`;
        const response = await fetch(endpoint);
        const body = await response.json();
        console.log(offset,body);
    }catch (error) {
        // Handle errors
        console.error("Error:", error);
    }
}