---
sidebar_position: 2
---

# UseCase

TODO: Definition of Usecase

```dart
abstract class IGetMovieNowPlaying {
  Future<Either<Failure, List<Movie>>> call();
}

class GetMovieNowPlaying implements IGetMovieNowPlaying {
  final MoviesRepository repository;

  GetMovieNowPlaying(this.repository);

  @override
  Future<Either<Failure, List<Movie>>> call() async {
    return repository.getMovieNowPlaying();
  }
}
```