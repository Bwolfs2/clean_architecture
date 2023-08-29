---
sidebar_position: 1
---

# Models

TODO: Model Definition


```dart
class MovieModel extends Movie {
  MovieModel(
    int movieId,
    String title,
    String overview,
    String releaseDate,
    List<int> genreIds,
    double voteAverage,
    double popularity,
    String posterPath,
    String backdropPath,
    String? tvName,
    String? tvRelease
  ) : super(
          movieId,
          title,
          overview,
          releaseDate,
          genreIds,
          voteAverage,
          popularity,
          posterPath,
          backdropPath,
          tvName,
          tvRelease,
        );

  // Convert a MovieModel instance into a Map.
  Map<String, dynamic> toJson() => {
        'movieId': movieId,
        'title': title,
        'overview': overview,
        'releaseDate': releaseDate,
        'genreIds': genreIds,
        'voteAverage': voteAverage,
        'popularity': popularity,
        'posterPath': posterPath,
        'backdropPath': backdropPath,
        'tvName': tvName,
        'tvRelease': tvRelease,
      };

  // Create a MovieModel instance from a Map.
  factory MovieModel.fromJson(Map<String, dynamic> json) {
    return MovieModel(
      json['movieId'],
      json['title'],
      json['overview'],
      json['releaseDate'],
      List<int>.from(json['genreIds']),
      json['voteAverage'],
      json['popularity'],
      json['posterPath'],
      json['backdropPath'],
      json['tvName'],
      json['tvRelease'],
    );
  }
}

```



Some people like to use Freezed as a way to simplify things, however, since it doesn't extend from the entity, in my view, it's breaking some SOLID principles, and you will need to do some workarounds to make it work well. In my opinion, the Data Mapper pattern addresses this in a more elegant way.

```dart
import 'package:freezed_annotation/freezed_annotation.dart';

part 'movie.freezed.dart';
part 'movie.g.dart';

@freezed
class Movie with _$Movie {
  const factory Movie({
    required int movieId,
    required String title,
    required String overview,
    required String releaseDate,
    required List<int> genreIds,
    required double voteAverage,
    required double popularity,
    required String posterPath,
    required String backdropPath,
    String? tvName,
    String? tvRelease,
  }) = _Movie;

  factory Movie.fromJson(Map<String, dynamic> json) => _$MovieFromJson(json);
}
```