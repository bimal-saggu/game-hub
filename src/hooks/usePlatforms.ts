import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APICLient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APICLient<Platform>('platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24hrs
    initialData: platforms,
});

export default usePlatforms;