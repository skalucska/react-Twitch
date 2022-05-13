export interface TwitchResponse<T> {
  data: T[];
  pagination: { cursor: string };
}
