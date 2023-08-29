---
sidebar_position: 2
---

# Repository Interface

TODO: Definition of Repostiry Interface

```dart
abstract class MoviesRepository {
  Future<Either<Failure, List<Movie>>> getMovieNowPlaying();
  Future<Either<Failure, List<Movie>>> getMoviePopular();
  Future<Either<Failure, List<Movie>>> getMovieUpComming();
  Future<Either<Failure, List<Trailer>>> getMovieTrailerById(int id);
  Future<Either<Failure, List<Trailer>>> getTvShowTrailerById(int id);
  Future<Either<Failure, List<Crew>>> getMovieCrewById(int id);
  Future<Either<Failure, List<Crew>>> getTvShowCrewById(int id);
}

```