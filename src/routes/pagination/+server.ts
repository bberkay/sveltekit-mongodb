import { getCollection } from "$db/collections";   

export async function GET(request: Request): Promise<Response> {   
    // get skip and limit from searchParams in request
    const url = new URL(request.url);
    let skip = Number(url.searchParams.get("skip")); 
	if(skip < 0) 
        skip = 0;

    console.log("skip: " + skip);
    const repositories = await getCollection("repositories", skip * 2, 2);
	return new Response(JSON.stringify(repositories));
}
