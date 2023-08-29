---
sidebar_position: 3
---

# DataSources

TODO: Definition of Datasource

```dart
abstract class MovieDataSource {
  Future<List<Movie>> getMovieNowPlaying();
  Future<List<Movie>> getMoviePopular();
  Future<List<Movie>> getMovieUpComming();
  Future<List<Trailer>> getMovieTrailerById(int id);
  Future<List<Trailer>> getTvShowTrailerById(int id);

  Future<List<Crew>> getMovieCrewById(int id);

  Future<List<Crew>> getTvShowCrewById(int id);
}
```