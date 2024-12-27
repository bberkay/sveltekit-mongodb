import { searchCollection } from "$db/collections";

export async function GET(request: Request): Promise<Response> {
    // get search from searchParams in request
    const url = new URL(request.url);
    const search = url.searchParams.get("search");

    // get repositories from MongoDB
    const repositories = await searchCollection("repositories", search!);

    // return JSON response
	return new Response(JSON.stringify(repositories));
}
