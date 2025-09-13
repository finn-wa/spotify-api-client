import type AuthStrategy from "./auth/strategy/AuthStrategy";
import {
  AlbumsApi,
  ArtistsApi,
  AudiobooksApi,
  BaseAPI,
  CategoriesApi,
  ChaptersApi,
  Configuration,
  EpisodesApi,
  GenresApi,
  LibraryApi,
  MarketsApi,
  PlayerApi,
  PlaylistsApi,
  SearchApi,
  ShowsApi,
  TracksApi,
  UsersApi,
} from "./openapi";

export function spotifyApiClient<T extends BaseAPI>(
  apiClass: { new (configuration: Configuration): T },
  authStrategy: AuthStrategy,
) {
  const apiConfig = new Configuration({
    accessToken: async () => {
      const token = await authStrategy.getOrCreateAccessToken();
      return token.access_token;
    },
  });
  return new apiClass(apiConfig);
}

export const spotifyAlbumsApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(AlbumsApi, authStrategy);

export const spotifyArtistsApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(ArtistsApi, authStrategy);

export const spotifyAudiobooksApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(AudiobooksApi, authStrategy);

export const spotifyCategoriesApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(CategoriesApi, authStrategy);

export const spotifyChaptersApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(ChaptersApi, authStrategy);

export const spotifyEpisodesApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(EpisodesApi, authStrategy);

export const spotifyGenresApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(GenresApi, authStrategy);

export const spotifyLibraryApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(LibraryApi, authStrategy);

export const spotifyMarketsApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(MarketsApi, authStrategy);

export const spotifyPlayerApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(PlayerApi, authStrategy);

export const spotifyPlaylistsApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(PlaylistsApi, authStrategy);

export const spotifySearchApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(SearchApi, authStrategy);

export const spotifyShowsApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(ShowsApi, authStrategy);

export const spotifyTracksApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(TracksApi, authStrategy);

export const spotifyUsersApi = (authStrategy: AuthStrategy) =>
  spotifyApiClient(UsersApi, authStrategy);
