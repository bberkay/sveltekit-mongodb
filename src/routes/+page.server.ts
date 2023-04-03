import { getCollection } from "$db/collections";   

export async function load(request: Request): Promise<{ data: any }> {
    // get skip and limit from searchParams in request
    const url = new URL(request.url);
    let skip = Number(url.searchParams.get("skip")); 
    if(skip < 0) 
        skip = 0;
    
    // get repositories from database
    const repositories = await getCollection("repositories", skip * 2, 2);
    return { data: repositories };
}