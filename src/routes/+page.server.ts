import { getCollection } from "$db/collections";   

export async function load(): Promise<{ data: any }> {
    const repositories = await getCollection("repositories", 1, 2);
    return {
        data: repositories
    };
}