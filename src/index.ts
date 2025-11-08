export {
  getDefaultCachingStrategy,
  spotifyAuthConfig,
  spotifyAuthViaClientCredentials,
  spotifyAuthViaCodeWithPkce,
  spotifyAuthViaImplicitGrant,
  spotifyAuthViaProvidedAccessToken,
} from "./auth";

export { type SpotifyAuth } from "./auth/strategy/AuthStrategy";

export {
  type AccessToken as SpotifyAccessToken,
  isEmptyAccessToken,
} from "./auth/token/AccessToken";

export * from "./openapi/apis/index";
export * from "./openapi/models/index";

export {
  initSpotifyPlayer,
  type SpotifyPlayer,
  type SpotifyPlayerOptions,
} from "./player/SpotifyPlayer";

export * from "./player/types";

export {
  spotifyAlbumsApi,
  spotifyArtistsApi,
  spotifyAudiobooksApi,
  spotifyCategoriesApi,
  spotifyChaptersApi,
  spotifyEpisodesApi,
  spotifyGenresApi,
  spotifyLibraryApi,
  spotifyMarketsApi,
  spotifyPlayerApi,
  spotifyPlaylistsApi,
  spotifySearchApi,
  spotifyShowsApi,
  spotifyTracksApi,
  spotifyUsersApi,
} from "./SpotifyClient";
